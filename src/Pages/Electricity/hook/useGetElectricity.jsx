import { useGetCurrentUser } from '@/Shared/hook/useGetCurrentUser';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const ElectricityInputSchema = z.object({
  meternumber: z.string().min(10, "Meter number is required"),
  metertype: z.string().min(1, "Meter type is required"),
  electricitycompany: z.string().min(1, "Electricity Company is required"),
  amount: z.string().min(1, "Amount is required"),
  phone: z.string().min(1, "Phone Number is required")
});

const useGetElectricity = () => {
  const { currentUser } = useGetCurrentUser();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(ElectricityInputSchema)
  });

  function onSubmit(data) {
    console.log(data);
  }

  // MAKE PAYMENT
  function payWithPaystack() {
    try {
      let values = form.getValues();
      let amount = values.amount;
      let meterNumber = values.meternumber;
      let metertype = values.metertype;
      let Electricitycompany = values.electricitycompany;
      let phone = values.phone;
      let userEmail = currentUser.email;
      let UserId = currentUser._id;

      console.log('Initiating Paystack payment with:', { meterNumber, metertype, Electricitycompany, phone, amount, UserId });
      console.log(UserId);

      if (window.PaystackPop) {
        let handler = window.PaystackPop.setup({
          key: import.meta.env.VITE_PAYSTACK_PUBLIC_TEST_KEY,
          email: userEmail,
          amount: amount * 100,
          ref: Math.floor(Math.random() * 1000000000 + 1),
          onClose: function() {
            console.log("window closed");
          },
          callback: function(response) {
            let res = 'Payment complete! Reference: ' + response.reference;
            alert(res);
            console.log('Paystack response:', response);
            console.log('Calling purchaseElectricity with:', {meterNumber, metertype, Electricitycompany, phone, amount, UserId});
            purchaseElectricity(meterNumber, metertype, Electricitycompany, phone, amount, UserId, response.reference);
          }
        });
        handler.openIframe();
      }
    } catch (error) {
      console.log('Error in payWithPaystack:', error);
    }
  }

  async function purchaseElectricity(meterNumber, metertype, Electricitycompany, phone, amount, UserId, paymentReference) {
    try {
      const username = import.meta.env.VITE_VTU_USERNAME;
      const password = import.meta.env.VITE_VTU_PASSWORD;
      const url = `https://vtu.ng/wp-json/api/v1/electricity?username=${username}&password=${password}&phone=${phone}&meter_number=${meterNumber}&service_id=${Electricitycompany}&variation_id=${metertype}&amount=${amount}&currentUserId=${UserId}`;
      // https://vtu.ng/wp-json/api/v1/electricity?username=Frank&password=123456&phone=07045461790&meter_number=62418234034&service_id=ikeja-electric&variation_id=prepaid&amount=3000
      console.log('Purchasing with:', { username,password, meterNumber, metertype, Electricitycompany, phone, amount, UserId });

      const response = await fetch(url);
      if (!response.ok) {
        Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('data purchase response:', data, data.message);
      toast({
        title: data?.code,
        description: data.message
      });
    } catch (error) {
      console.error('Error purchasing electricity:', error);
      toast({
        title: 'Error',
        description: error.message
      });
      // Call refund function
      refundPayment(paymentReference, amount);
      console.log(paymentReference,amount)
    }
  }

  // HANDLE REFUND
  async function refundPayment(reference, amount) {
    try {
      const url = `https://api.paystack.co/refund`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_PAYSTACK_SECRET_KEY}`
        },
        body: JSON.stringify({
          transaction: reference,
          amount: amount * 100
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Refund response:', data);
      toast({
        title: 'Refund Initiated',
        description: `Refund for transaction ${reference} has been initiated.`
      });
    } catch (error) {
      console.error('Error initiating refund:', error);
      toast({
        title: 'Refund Error',
        description: error.message
      });
    }
  }

  return {
    form,
    onSubmit,
    payWithPaystack
  };
}

export default useGetElectricity;