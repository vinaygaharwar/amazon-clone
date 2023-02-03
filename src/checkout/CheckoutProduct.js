import React from 'react'
import { useStateValue } from '../contextApi/StateProvider'
import './checkoutproduct.css'
function CheckoutProduct({id,title,image,price,rating}) {
    const[{basket},dispatch]=useStateValue()
    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
  return (
    <div className='checkoutProduct'>
      <img className='checkoutProduct__image' src={image}/>
      <div className='checkoutProduct__info'>
        <p className='checkoutProduct__title'>{title}</p>
        <p className='checkoutProduct__price'>
            <small>₹</small>
            <strong>{price}</strong>
        </p>
        <div className='product__rating'>
                {
                Array(Math.ceil(rating)).fill().map((index)=>(<p key={index}>⭐</p>))
                // console.log(Array(Math.ceil(item.rating.rate)).fill().map((_)=>(<p>&</p>)))
                }
            </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
