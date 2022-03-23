import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    console.log(props)
    const{handleClick} =props
    
    const {id,img,price,ratings,name} =props.item;
    // console.log(arr)
    return (
        <div className='product'>
            
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h4>Price $ {price}</h4>
            <h5>rating {ratings}</h5>
            <button onClick={()=>handleClick(props.item)} className='btn'>
                <p>Add TO Card</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;