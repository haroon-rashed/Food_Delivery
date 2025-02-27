import React, { useContext } from 'react'
import "./Cart.css";
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const {cartItem, food_list, removeFromCart, getTotalCartAmount} = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item, index)=>{
          if(cartItem[item._id]>0){
            return(
             <>
             <div key={index} className='cart-items-title cart-items-item'>
              <img src={item.image}/>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>${item.price * cartItem[item._id]}</p>
                  <p  onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
              </div>
              <hr/>
             </>
            )
          }
        })}
        <div className='cart-bottom'>
          <div className='cart-total'>
            <div>
              <div className='cart-total-detail'>
                <p>Sub Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr/>
              <div className='cart-total-detail'>
                <p>Delivery Charge</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr/>
              <div className='cart-total-detail'>
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
            </div>
              <button onClick={()=>navigate("/order")}>PROCEDE TO CHECKOUT</button>
          </div>
          <div className='cart-promocode'>
            <p>If you have a promo code , Enter here</p>
            <div className='promocode-input'>
              <input type='text' placeholder='Enter Promocode..'/>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
