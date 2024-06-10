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

    const form = useForm({
        resolver: zodResolver(dataInputSchema)
      });
      const { getValues, setValue } = form;

  function onSubmit(data) {
    console.log(data)
    checkNetwork(data)
    
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

  return { onSubmit,
            form,
            checkNetwork
        }
  
}

export default useGetData


