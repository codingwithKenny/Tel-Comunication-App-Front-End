

import React from 'react'
import useSignUp from '../hook/useSignUp'
import { Form } from '@/components/ui/form'
import GenericFormInput from '@/Shared/GenericFormInput'
import { RegInput } from '../utils/inputs'
import { Button } from '@/components/ui/button'
import './SignupForm.css'
import { Link } from 'react-router-dom'


const SignupForm = () => {
    const {onSubmit,form} = useSignUp()

  return (
    <div>
    <div className='bigContainer'>
    <div className='formcont'>
        <div className='formleft'>
        <Link to={'/auth'}> <Button  className='formsidebtn'>SIGN IN</Button></Link>
        </div>
      <div className='formRight'>
      <h3 className='signupText'>SIGN UP</h3>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                {
                    RegInput.map((input,i)=>{
                       return <GenericFormInput key={i} form={form} {...input} />


                    })
                }
                 <div className='signupbutton'><Button className="submitButton">SIGN UP</Button></div>

            </form>
        </Form>
        </div>
   
  </div>
  </div>
    </div>
  )
}

export default SignupForm
