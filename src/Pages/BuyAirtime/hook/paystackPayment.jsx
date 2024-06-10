import React from 'react';
import { PaystackButton } from 'react-paystack';

const PaystackPayment = ({ email, amount, onSuccess, onClose }) => {
    const publicKey = process.env.REACT_APP_PAYSTACK_PUBLIC_KEY;

    const componentProps = {
        email,
        amount: amount * 100, // Paystack expects the amount in kobo
        publicKey,
        text: "Pay Now",
        onSuccess,
        onClose,
    };

    return (
        <div>
            <PaystackButton {...componentProps} />
        </div>
    );
};

export default PaystackPayment;