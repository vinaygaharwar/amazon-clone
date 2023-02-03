import React, { useEffect, useState } from 'react'
import Product from '../product/Product'
import './home.css'
function Home() {
    const [productDetails,setProductDetails]=useState([])
    
    useEffect(() => {
        fetchData();
      },[])
    // let url='https://fakestoreapi.com/products/1'   
    const fetchData =async()=>{
       const response= await fetch('https://fakestoreapi.com/products');
        const jsonData=await response.json();
        const data1=[jsonData[0],jsonData[1]]
        console.log(data1)
        setProductDetails(jsonData)
                }
            
    // console.log(productDetails.title)
  return (
    <div className='home'>
      <img className='home__image' src='https://m.media-amazon.com/images/I/71usv3CIbTL._SX3000_.jpg' alt=''/>
      <div className='home__row'>
        <Product productDetails={productDetails} />
      </div>
        {/* <Product productDetails={productDetails} /> */}
    </div>
  )
}

export default Home
