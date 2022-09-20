import { useState } from 'react';
import { useSelector } from 'react-redux';
import './payment-form.styles.scss';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button from '../button/button.component';
import { selectCartTotal} from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector'

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const paymentHandler = async (event) => {
        event.preventDefault();
        console.log('clicked');
       

        if(!stripe || !elements) { //if there are no stripe or elemenets instanses
            return;
        }

        setIsProcessingPayment(true);
        //make a fetch request to payment backend
        //create a serverless Netlify function
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({amount: amount * 100})
        }).then(res=> res.json());
        //get a client secret from result 
        const {paymentIntent: { client_secret }} = response;
        console.log(response);

       

      

        //create an actual payment
        return stripe
            .confirmCardPayment(
                client_secret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                   
                    billing_details: {
                        name: currentUser ? currentUser.displayName : 'Guest'
                        }
                    }
                 }
                )
            .then(function(paymentResult) {
                if(paymentResult.paymentIntent.status === "succeeded") {
                    setIsProcessingPayment(false);
                    console.log(paymentResult.paymentIntent)
                    const total = parseInt(paymentResult.paymentIntent.amount) * 0.010
                    alert(`You successfully paid ${total}${paymentResult.paymentIntent.currency.toUpperCase()}`);
                    elements.getElement(CardElement).clear();
                } else { 
                    if(paymentResult.error) 
                    {
                    alert(paymentResult.error)
                    } 
                }    // Handle result.error or result.paymentIntent
            });

        }


        // if (paymentResult.error) {
        //     alert('Error', paymentResult.error) 
        //         // Handle error here
        // } else if (paymentResult.paymentIntent && paymentResult.paymentIntent.status === 'succeeded') {
        //         // Handle successful payment here
        //     alert('Paymeny Successful', paymentResult.paymentIntent );
        //     }
        
          
          
        // const {error, paymentMethod} = await stripe.createPaymentMethod({
        //     type: 'card',
        //     card: elements.getElement(CardElement),
        //   });
        


      

    return(
        <div className='payment-form-container'>
            <form className='form-container' onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                {isProcessingPayment ? (<div>Payment is processing</div>) : null}
                
                <div className='payment-button'>
                    <Button buttonType='inverted' isLoading={isProcessingPayment}>Pay now</Button>
                </div>

               
            </form>
        </div>
        
    )
}

export default PaymentForm;
