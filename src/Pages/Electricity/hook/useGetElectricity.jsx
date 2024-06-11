
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
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
    const form = useForm({
        resolver:zodResolver(ElectricityInputSchema)
    })

    function onSubmit(data) {
        console.log(data)
        
    }
  return {
   form,
   onSubmit
     
  }
}

export default useGetElectricity
