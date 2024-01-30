import React from 'react';
import './Checkout.css';
import checkoutad from './assets/images/checkoutad.jpg';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [{basket}, dispatch] = useStateValue();
  return (
    <>
    
    <div className='checkout'>
        <div className="checkout__left">
        <img className='checkout__ad' src={checkoutad} alt="checkout_ad" />
       
            <div>
                <h2 className='checkout_title'>Your Shopping Cart</h2>
                {/* checkoutProduct*/}
                {basket.map(item => (
                  <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
                 {/* checkoutProduct*/} 
                  {/* checkoutProduct*/}
                   {/* checkoutProduct*/}
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