import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';


const formSchema = z.object({
    userName:z.string(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6," At least 6 characters"),
  });
const useSignUp = () => {
  const navigate = useNavigate()
  const {toast} = useToast()
    const form = useForm({
        resolver:zodResolver(formSchema)
    })

    async function onSubmit(data) {
        console.log(data)

        try {
          const res = await axios.post("https://swiftpay-app-backend.onrender.com/signup", data)
          console.log(res)
          toast({
            title:"success",
            description: res.data.message
           })
          navigate("/auth")
        } catch (error) {
          
        }
        
    }

  return {
    onSubmit,
    form
  }
}

export default useSignUp
