import React, { useContext } from 'react'
import "./PlaceOrder.css";
import { StoreContext } from '../../Context/StoreContext';

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className='multi-field'>
          <input type='text' placeholder='First Name' required/>
          <input type='text' placeholder='Last Name' required/>
        </div>
        <input type='email' placeholder='Email Address'/>
        <input type='text' placeholder='Street'/>
        <div className='multi-field'>
          <input type='text' placeholder='City' required/>
          <input type='text' placeholder='State' required/>
        </div>
        <div className='multi-field'>
          <input type='text' placeholder='Zip Code' required/>
          <input type='text' placeholder='Country' required/>
        </div>
          <input type='number' placeholder='Phone' required/>
      </div>
      <div className='place-order-right'>
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
              <button>PROCEDE TO AMOUNT</button>
          </div>
      </div>
    </form>
  )
}

export default PlaceOrder
