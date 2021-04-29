import React, { useContext, useMemo } from 'react';
import { UserContext } from '../../App';
import { useHistory } from 'react-router';
import { CardNumberElement, useElements, useStripe, CardCvcElement, CardExpiryElement } from '@stripe/react-stripe-js';

const useOptions = () => {
   const options = useMemo(
      () => ({
         style: {
            base: {
               fontSize: '16px',
               color: '#424770',
               letterSpacing: '0.025em',
               fontFamily: 'Source Code Pro, monospace',
               '::placeholder': {
                  color: '#aab7c4',
               },
            },
            invalid: {
               color: '#9e2146',
            },
         },
      }),
      []
   );
   return options;
};

const PaymentCard = ({ service }) => {
   const history = useHistory();
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const email = loggedInUser && loggedInUser.email;
   const stripe = useStripe();
   const elements = useElements();
   const options = useOptions();
   console.log(email)

   const handleSubmit = async event => {
      event.preventDefault();

      if (!stripe || !elements) {
         // Stripe.js has not loaded yet. Make sure to disable
         // form submission until Stripe.js has loaded.
         return;
      }

      const payload = await stripe.createPaymentMethod({
         type: 'card',
         card: elements.getElement(CardNumberElement),
      });
      const clientOrder = { ...service, email, status: 'pending', ...payload };

      fetch('https://polar-castle-67389.herokuapp.com/products', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(clientOrder),
      });
      history.push('/myOrder');
   };

   return (
      <form onSubmit={handleSubmit}>
         <p>Pay With Card:</p>
         <label>
            Card number
            <CardNumberElement
               options={options}
               onReady={() => {
                  console.log('CardNumberElement [ready]');
               }}
               onChange={event => {
                  console.log('CardNumberElement [change]', event);
               }}
               onBlur={() => {
                  console.log('CardNumberElement [blur]');
               }}
               onFocus={() => {
                  console.log('CardNumberElement [focus]');
               }}
            />
         </label>
         <br />
         <label>
            Expiration date
            <CardExpiryElement
               options={options}
               onReady={() => {
                  console.log('CardNumberElement [ready]');
               }}
               onChange={event => {
                  console.log('CardNumberElement [change]', event);
               }}
               onBlur={() => {
                  console.log('CardNumberElement [blur]');
               }}
               onFocus={() => {
                  console.log('CardNumberElement [focus]');
               }}
            />
         </label>
         <br />
         <label>
            CVC
            <CardCvcElement
               options={options}
               onReady={() => {
                  console.log('CardNumberElement [ready]');
               }}
               onChange={event => {
                  console.log('CardNumberElement [change]', event);
               }}
               onBlur={() => {
                  console.log('CardNumberElement [blur]');
               }}
               onFocus={() => {
                  console.log('CardNumberElement [focus]');
               }}
            />
         </label>
         <br />
         <button
            className="btn btn-success px-4 mt-1"
            type="submit"
            disabled={!stripe}
         >
            Confirm with Pay
         </button>
      </form>
   );
};

export default PaymentCard;
