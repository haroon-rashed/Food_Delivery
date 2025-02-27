import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import "./FoodItem.css";

const FoodItem = ({_id , name , price ,description, image}) => {
    const [itemCounter, setItemCounter] = useState(0);
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-img" />
        {!itemCounter
        ? <img  className="add" onClick={()=>setItemCounter(prev=>prev+1)}  src={assets.add_icon_white}/> : <div className='food-item-counter'>
        <img onClick={()=>setItemCounter(prev=>prev-1)} src={assets.remove_icon_red}/>
        <p>{itemCounter}</p>
        <img onClick={()=>setItemCounter(prev=>prev+1)} src={assets.add_icon_green}/>
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
