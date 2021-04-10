import React,{useContext} from 'react';
import {PayPalButton} from 'react-paypal-button';
import AppContext from '../context/AppContext';
import { useHistory } from 'react-router-dom';
import '../styles/components/Payment.css';
import data from '../../data';


//npm install react-paypal-button --save

const Payment = () => {
    const {state,addNewOrder} = useContext(AppContext);
    const {cart,buyer} = state;
    const history = useHistory();

    const paypalOptions = {
        clientId: data.api.paypal,
        intent:'capture',
        currency:'USD'
    }


    const handlePaymentSuccess = (data)=>{
        console.log(data);
        //si es complete la transacción se llevo a cabo.
        if(data.status==='COMPLETED'){
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
            addNewOrder(newOrder);
            history.push('/checkout/success');
        }
    }

    const buttonStyles = {
        layout:'vertical',
        shape:'rect'
    }

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <div className="Payment">
            <div className="Payment-context">
                <h3>Resumen del pedido:</h3>
                {cart.map((item)=>(
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton 
                    paypalOptions={paypalOptions}
                    buttonStyles={buttonStyles}
                    amount={handleSumTotal()}
                    onPaymentStart={()=>console.log('Start payment')}
                    onPaymentSuccess={data => handlePaymentSuccess(data)}
                    onPaymentError={error => console.log(error)}
                    onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
        </div>
    
    )
}

export default Payment;