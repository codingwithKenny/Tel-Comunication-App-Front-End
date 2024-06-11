
import React, { useEffect, useState } from 'react';
import { Form } from '@/components/ui/form';

import GenericFormInput from '@/Shared/GenericFormInput';
import { Button } from '@/components/ui/button';
import { ElectrcityInput } from '../utils/input';
import useGetElectricity from '../hook/useGetElectricity';

const ElectricityCompo = () => {
    const{form,onSubmit} = useGetElectricity()
   

  
   

    return (
        <div>
             <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className='myform'>
        {
            ElectrcityInput.map((input,i)=>{
                return <GenericFormInput key={i} {...input} form={form}/>
            })
        }
            {/* <Button className="mt-20" type='submit'>{isLoading? "loading..." : "submit"}</Button> */}
         
    </form>
     
   </Form>
            {/* {isLoading && <div className="spinner">Loading...</div>} */}
        </div>
    );
};

export default ElectricityCompo;
