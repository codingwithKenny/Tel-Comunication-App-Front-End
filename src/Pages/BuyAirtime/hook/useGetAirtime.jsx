import { useGetCurrentUser } from '@/Shared/hook/useGetCurrentUser';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import useGetHistory from './useGetHistory';

const phoneNumberRegex = /^\+\d{1,3}\d{7,14}$/;

const AirtimeInputSchema = z.object({
  phonenumber: z.string().min(1, "Phone number is required").max(20, "").regex(phoneNumberRegex, "Phone number must include country code and be in the format +1234567890"),
  network: z.string().min(1, "Network is required"),
  amount: z.string().min(2, "Amount is required"),
  pay: z.number().min(1, "Amount to pay is required"),
});

const useGetAirtime = () => {
  const [isLoading, setisloading] = useState(false);
  const { toast } = useToast();
  const { currentUser } = useGetCurrentUser();

  const form = useForm({
    resolver: zodResolver(AirtimeInputSchema)
  });

  const { getValues, setValue } = form;

  // HANDLE FORM SUBMISSION
  function onSubmit(data) {
    console.log(data);
    checkNetwork(data); 
    setValue(data);
    alert("successful");
    payWithPaystack(data);
    // console.log(history)
  }

  // CHECK THE PHONENUMBER NETWORK
  async function checkNetwork(data) {
    console.log(data);
    
    const apiKey = import.meta.env.VITE_TERMI_API_KEY; 
    const phoneNumber = data.phonenumber;
    const url = `https://api.ng.termii.com/api/check/dnd?api_key=${apiKey}&phone_number=${phoneNumber}`;
    setisloading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data?.network) {
        setValue('network', data.network_code);
      }
    } catch (error) {
      console.error('Error checking network:', error);
    } finally {
      setisloading(false);
    }
  }

  // MAKE PAYMENT
  function payWithPaystack() {
    try {
      let values = form.getValues();
      let network_id = values.network.toLowerCase().split(" ")[0];
      let Pay = values.pay;
      let amountToBuy = values.amount;
      let phone = values.phonenumber;
      let userEmail = currentUser.email;
      let UserId = currentUser._id
  
      console.log('Initiating Paystack payment with:', { phone, Pay, network_id, userEmail, amountToBuy,UserId });
      console.log(UserId)
  
      if (window.PaystackPop) {
        let handler = window.PaystackPop.setup({
          key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
          email: userEmail,
          amount: Pay * 100,
          ref: Math.floor(Math.random() * 1000000000 + 1),
          onClose: function() {
            console.log("window closed");
          },
          callback: function(response) {
            let res = 'Payment complete! Reference: ' + response.reference;
            alert(res);
            console.log('Paystack response:', response);
            console.log('Calling purchaseAirtime with:', { phone, network_id, amount: Pay, amountToBuy ,UserId});
            purchaseAirtime(phone, network_id, amountToBuy,UserId, response.reference);
          }
        });
        handler.openIframe();
      }
    } catch (error) {
      console.log('Error in payWithPaystack:', error);
    }
  }

  // HANDLE AIRTIME PURCHASE
// HANDLE AIRTIME PURCHASE
async function purchaseAirtime(phone, network_id, amountToBuy, UserId, paymentReference) {
  setisloading(true);
  try {
      const username = import.meta.env.VITE_VTU_USERNAME;
      const password = import.meta.env.VITE_VTU_PASSWORD;
      const url = `https://vtu.ng/wp-json/api/v1/airtime?username=${username}&password=${password}&phone=${phone}&network_id=${network_id}&amount=${amountToBuy}&currentUserId=${UserId}`;

      console.log('Purchasing airtime with:', { username, password, phone, network_id, amountToBuy, UserId });

      const response = await fetch(url); // Changed to await
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json(); // Changed to await
      console.log('Airtime purchase response:', data, data.message);
      toast({
        title: data?.code,
        description: data.message
    });
    // UserId,network,amount,code,phone
      const transaction = {
          UserId,
          network:data.data.network,
          amount:data.data.amount,
          code:data.code||error,
          phone:data.data.phone
      }
      console.log(transaction)
      const saveResponse = await axios.post("https://swiftpay-app-backend.onrender.com/Airtime", transaction); 
      console.log(saveResponse)
    
      setisloading(false);
  } catch (error) {
      console.error('Error purchasing airtime:', error);
      toast({
          title: 'Error',
          description: error.message
      });
      // Call refund function
      refundPayment(paymentReference, amount);
      console.log(paymentReference,amount)
      setisloading(false);
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
    onSubmit,
    form,
    checkNetwork,
    isLoading,
    payWithPaystack,
    purchaseAirtime
  };
}

export default useGetAirtime;