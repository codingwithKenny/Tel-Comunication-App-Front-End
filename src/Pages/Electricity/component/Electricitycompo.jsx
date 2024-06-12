
import React, { useEffect, useState } from 'react';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { ElectrcityInput } from '../utils/input';
import useGetElectricity from '../hook/useGetElectricity';
import "./Electricitycompo.css"
import GenericFormInput2 from '@/Shared/ElecGenericFormInput';
import { useGetCurrentUser } from '@/Shared/hook/useGetCurrentUser';

const ElectricityCompo = () => {
    const{form,onSubmit , payWithPaystack} = useGetElectricity()
   
   

  
   

    return (
        <div className="electricity">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {
                        ElectrcityInput.map((input, i) => (
                            <GenericFormInput2
                                key={i}
                                form={form}
                                {...input}

                            />
                        ))
                    }
                   
                    
                   
                    <Button type='submit' className="electricityButton" onClick={payWithPaystack}>Buy Now</Button>
                </form>
            </Form>
            {/* {isLoading && <div className="spinner">Loading...</div>} */}
        </div>
    );
};

export default ElectricityCompo;
