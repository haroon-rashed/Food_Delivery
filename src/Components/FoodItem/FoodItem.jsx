import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import "./FoodItem.css";
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({_id , name , price ,description, image}) => {

    const {cartItem, addToCart, removeFromCart}  = useContext(StoreContext)
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-img" />
        {!cartItem[_id]
        ? <img  className="add" onClick={()=>addToCart(_id)}  src={assets.add_icon_white}/> : <div className='food-item-counter'>
        <img onClick={()=>removeFromCart(_id)} src={assets.remove_icon_red}/>
        <p>{cartItem[_id]}</p>
        <img onClick={()=>addToCart(_id)} src={assets.add_icon_green}/>
        </div>

        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
