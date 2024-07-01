import React, { useEffect, useState } from 'react';
import { Form } from '@/components/ui/form';
import GenericFormInput from '@/Shared/GenericFormInput'
import { Button } from '@/components/ui/button';
import useGetData from '../hook/useGetData';
import { DataInput } from '../utils/data';
import "./Datacompo.css"
import Info from '@/Pages/BuyAirtime/component/Info';

const Datacompo = () => {
    const { onSubmit, form, checkNetwork,isLoading ,payWithPaystack} = useGetData();
    const [isNetworkFilled, setIsNetworkFilled] = useState(false);
    const[network,setisnetwork] = useState()
    const [price,setPrice] =useState(null)

    // WHEN PHONENUMBER BOX IS FILLED,NETWORK IS GENERATED

    const handleBlur = async (e) => {
       try {
         
        if (e.target.name === 'phonenumber') {
            console.log('Phone number input blurred');
            const values = form.getValues();
            console.log('Form values:', values);
            await checkNetwork(values); 
        }
       } catch (error) {
        console.log(error)
       }
    };
    const networkValue = form.watch('network');
    useEffect(() => {
        setIsNetworkFilled(!!networkValue);
    }, [networkValue]);
// WHEN NETWORK BOX IS FILLED OTHER BOXS DISPLAY
    const handleInputChange = (e) => {
       try {
        if (e.target.name === 'network') {
            const networkValue = form.getValues().network;
            setIsNetworkFilled(!!networkValue);
            console.log('Network input filled:', !!networkValue); 
        }

        if (e.target.name === 'plan') {
            const planValue = e.target.value;
            let planPrice;
           
 
            DataInput.forEach(el => {
              if(el.name === 'plan'){
                el.options.forEach(opt =>{
                    console.log(opt.label)
                    console.log(isNetworkFilled)
                    if(form.getValues().network = opt.label){
                        console.log('yes')
                   
                    }
                  opt.options.forEach(optopt =>{
                    if(optopt.value === planValue){
                      planPrice = '#' + optopt.price
                        
                    }
                  
                  })
                
                })
              }
             
              
            });
           
           
        //    console.log(planPrice,'hey')
           setPrice(planPrice)

             if (planPrice !== null) {
            form.setValue('amount', planPrice);
          }
          }
       } catch (error) {
        console.log(error)
       }
    };
   
  
    return (
        <div className='Airtimeform'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    {
                        DataInput.slice(0, 1).map((input, i) => (
                            <GenericFormInput
                                key={i}
                                form={form}
                                {...input}
                                onBlur={handleBlur} 
                            />
                        ))
                    }
                    <Info/>
                    {
                        DataInput.slice(1, 2).map((input, i) => (
                            <GenericFormInput
                                key={i + 1}
                                form={form}
                                {...input}
                                onChange={handleInputChange}
                            />
                        ))
                    }
                    {
                        isNetworkFilled && DataInput.slice(2).map((input, i) => (
                            <GenericFormInput
                                key={i + 2} 
                                form={form}
                                {...input}
                                onChange={handleInputChange}

                            />
                        ))
                    }
                   
                    <Button type='submit' className="submitButton" onClick={payWithPaystack}>Buy Now</Button>
                </form>
            </Form>
            {isLoading && <div className="spinner">Loading...</div>}
        </div>
    );
};

export default Datacompo;