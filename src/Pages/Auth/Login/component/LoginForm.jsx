import React from 'react';
import useLogin from '../hook/useLogin';
import { Form } from '@/components/ui/form';
import { inputs } from '../utils/input';
import GenericFormInput from '@/Shared/GenericFormInput';
import { Button } from '@/components/ui/button';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const { onSubmit, form, isLoading } = useLogin();

  return (
    <div className='formbigContainer'>
      <div className='formContainer'>
        <div className='form'>
          <h3 className='signText'>SIGN IN</h3>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              {inputs.map((input, i) => (
                <GenericFormInput key={i} form={form} {...input} />
              ))}
              <Link to="/forgot-password">
                <p className='forgotpassword'>Forgot Your Password?</p>
              </Link>
              <Button type="submit" className="submitButton">
                {isLoading ? "Loading..." : 'LOG IN'}
              </Button>
            </form>
          </Form>
        </div>
        <div className='formside'>
          <Link to={'/auth/signup'}>
            <Button className='formsidebtn'>SIGN UP</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;