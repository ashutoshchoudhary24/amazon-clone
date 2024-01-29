import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'


function Subtotal() {
 
    return (
        <div className='subtotal'>
           <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal (0 items) : <strong>0</strong>
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
           
             value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal