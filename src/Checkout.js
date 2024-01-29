import React from 'react';
import './Checkout.css';
import checkoutad from './assets/images/checkoutad.jpg';
import Subtotal from './Subtotal';


function Checkout() {
  return (
    <>
    
    <div className='checkout'>
        <div className="checkout__left">
        <img className='checkout__ad' src={checkoutad} alt="checkout_ad" />
       
            <div>
                <h2>Your Shopping Basket is empty</h2>
                
            </div>

            </div> 
       
            <div className="checkout__right">
                <Subtotal />
            </div>
    
    </div>
  </>
  )
}

export default Checkout