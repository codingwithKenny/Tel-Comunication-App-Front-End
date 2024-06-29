
import React, { useEffect, useState } from 'react';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import GenericFormInput2 from '@/Shared/ElecGenericFormInput';
import { cableInput } from '../Utils/input';
import useGetCable from '../hook/useGetCable';


const CableComponent = () => {
    const{form,onSubmit , payWithPaystack} = useGetCable()
   
     return (
        <div className="electricity">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {
                        cableInput.map((input, i) => (
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

export default CableComponent;
