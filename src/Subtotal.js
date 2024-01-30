import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';


function Subtotal() {
  const [{basket}, dispatch]= useStateValue();
    return (
        <div className='subtotal'>
           <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items) : <strong>{value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        {/* instead of lable and under input we had , but with a issue we were unale to display mesage along with the checkbox, so we tried using label
                        <input type="checkbox" /> */}
                    <label>
                    <input type="checkbox"  /> This order contains a gift
                    </label>
                    </small>
                    
                </>
            )}
            decimalScale={2}
           
             value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            lakhSeparator={true}
            prefix={"₹"}
            />
            <button>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal