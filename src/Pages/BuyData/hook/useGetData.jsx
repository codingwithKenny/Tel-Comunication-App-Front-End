import { useGetCurrentUser } from '@/Shared/hook/useGetCurrentUser';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const dataInputSchema = z.object({
    phonenumber: z.string().min(10, "Phone number is required"),
    network: z.string().min(1, "Network is required"),
    plan: z.string().min(1, "Plan is required"),
    amount: z.string().min(1, "Amount is required")
  });
const useGetData = () => {
  const [isloading,setisloading] = useState()
  const {currentUser}= useGetCurrentUser()
  const { toast } = useToast();

    const form = useForm({
        resolver: zodResolver(dataInputSchema)
      });
      const { getValues, setValue } = form;

  function onSubmit(data) {
    console.log(data)
    checkNetwork(data)
    payWithPaystack()
    
  }
  // CONFIRM NETWORK
  async function checkNetwork(data) {
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
      let amount = values.amount.split("")[0];
      // let amountToBuy = values.amount;
      let variation_id = values.plan
      let phone = values.phonenumber;
      let userEmail = currentUser.email;
      let UserId = currentUser._id
  
      console.log('Initiating Paystack payment with:', { phone, network_id, userEmail, amount,variation_id,UserId });
      console.log(UserId)
  
      if (window.PaystackPop) {
        let handler = window.PaystackPop.setup({
          key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
          email: userEmail,
          amount: amount* 100,
          ref: Math.floor(Math.random() * 1000000000 + 1),
          onClose: function() {
            console.log("window closed");
          },
          callback: function(response) {
            let res = 'Payment complete! Reference: ' + response.reference;
            alert(res);
            console.log('Paystack response:', response);
            console.log('Calling purchaseData with:', { phone, network_id, amount,UserId});
            purchaseData(phone, network_id, variation_id,UserId,response.reference);
          }
        });
        handler.openIframe();
      }
    } catch (error) {
      console.log('Error in payWithPaystack:', error);
    }
  }
  async function purchaseData(phone, network_id,variation_id, UserId,paymentReference) {
    setisloading(true);
    try {
        const username = import.meta.env.VITE_VTU_USERNAME;
        const password = import.meta.env.VITE_VTU_PASSWORD;
        const url = `https://vtu.ng/wp-json/api/v1/data?username=${username}&password=${password}&phone=${phone}&network_id=${network_id}&variation_id=${variation_id}&currentUserId=${UserId}`;
  
        console.log('Purchasing data with:', { username, password, phone, network_id, variation_id, UserId });
  
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); 
        console.log('data purchase response:', data, data.message);
        toast({
          title: data?.code,
          description: data.message
      });
    
        // const transaction = {
        //     UserId,
        //     network:data.data.network,
        //     amount:data.data.amount,
        //     code:data.code||error,
        //     phone:data.data.phone
        // }
        // console.log(transaction)
        // const saveResponse = await axios.post("http://localhost:3000/Airtime", transaction); 
        // console.log(saveResponse)
      
        setisloading(false);
    } catch (error) {
        console.error('Error purchasing airtime:', error);
        toast({
            title: 'Error',
            description: error.message
        });
        setisloading(false);
        refundPayment(paymentReference, amount);
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
  

  return { onSubmit,
            form,
            checkNetwork,
            payWithPaystack
        }
  
}

export default useGetData


