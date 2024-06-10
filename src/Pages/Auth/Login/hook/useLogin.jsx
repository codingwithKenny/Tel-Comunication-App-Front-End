import React, { useEffect, useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';
import { useGetCurrentUser } from '@/Shared/hook/useGetCurrentUser';

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "At least 6 characters"),
});

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { currentUser } = useGetCurrentUser();

  useEffect(() => {
    if (currentUser?.email) {
      console.log('hello');
      // console.log(currentUser);
      navigate('/dashBoard');
    }
  },[]);

  const form = useForm({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:3000/login", data);
      console.log(res);

      toast({
        title: "Welcome",
        description: res.data.message
      });
      navigate("/dashBoard");

      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.log(error);
      console.log(error.response?.data?.message);
      toast({
        title: "ERROR!!!",
        description: error.response?.data?.message
      });
    } finally {
      setIsLoading(false);
    }
    console.log(data);
  };

  return {
    onSubmit: form.handleSubmit(onSubmit),
    isLoading,
    form
  };
};

export default useLogin;