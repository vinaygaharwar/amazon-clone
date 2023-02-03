import React, { useState } from 'react'
import { useStateValue } from '../contextApi/StateProvider'
import './product.css'
function Product({productDetails}) {
    // const [title,setTitle]=useState('')
    const [{basket},dispatch]=useStateValue()
    
  return (
    <div className='container'>
     {productDetails.map((item)=>{
            return (
            <div className='product' key={item.id}>
              <div className='product__info'>
            <p>{item.title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{item.price}</strong>
            </p>
            <div className='product__rating'>
                {
                Array(Math.ceil(item.rating.rate)).fill().map((index)=>(<p key={index}>⭐</p>))
                // console.log(Array(Math.ceil(item.rating.rate)).fill().map((_)=>(<p>&</p>)))
                }
            </div>
            </div>
            <img src={item.image} alt=''/>
            <button onClick={()=>dispatch({type:'ADD_TO_BASKET',item})}>Add To Basket</button>
            </div>
            )
        })}
    </div>
  )
}

export default Product
