import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import  "./Shop.css"
const Shop = () => {
    const [data,setData] =useState([])
     useEffect(()=>{
    fetch('products.json')
    .then(res=>res.json())
    .then(data=>setData(data))
  },[])
const [product,setProduct] =useState([])
  const handleClick =(id)=>{
      localStorage.setItem("id",id)
   const newCard =[...product,id]
   setProduct(newCard)
  
}
localStorage.setItem(product,1)

    return (
        
        <div className='shop-container'>
            <div className="product-container">
            {
            data.map(item=><Product  handleClick ={handleClick} item ={item}></Product>)
             }
            </div>
            <div className="card-container">
                <Card product ={product}></Card>
            </div>
        </div>
    );
};

export default Shop;