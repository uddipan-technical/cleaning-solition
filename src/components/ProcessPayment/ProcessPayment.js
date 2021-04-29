import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import PaymentCard from './PaymentCard';

const ProcessPayment = () => {
    const stripePromise = loadStripe(
        'pk_test_51IiI0nDFspDzTmXS9rxaHoVHHTIuYzamKGprhQh6bWDZpnznXMUcC6CkxCenhJB529YgIyFORqxflSj28AG4tKgt006J9OR3vY'
     );
    return (
        <Elements stripe={stripePromise}>
          <PaymentCard></PaymentCard>
        </Elements>
    );
};

export default ProcessPayment;