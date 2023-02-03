import React from 'react'
import { getBasketTotal } from '../contextApi/reducer'
import { useStateValue } from '../contextApi/StateProvider'
import './subtotal.css'
function Subtotal() {
    const[{basket}]=useStateValue()
  return (
    <div className='subtotal'>
        <p>Subtotal ({basket.length} items):<strong>{`₹ ${getBasketTotal(basket).toLocaleString("en-US")}`}</strong></p>
        <small className='subtotal_gift'>
            <input type='checkbox'/>This Order Contains a gift
        </small>
      <button>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal
