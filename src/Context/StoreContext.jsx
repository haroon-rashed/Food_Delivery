import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext =  createContext(null);

const StoreContextProvider = (props) =>{
   
     const [cartItem, setCartItem] = useState({});

     const addToCart = (itemId) =>{
        if(!cartItem[itemId]){
            setCartItem((prev)=>({...prev, [itemId]:1}))
        }else{
            setCartItem(((prev)=>({...prev, [itemId]:prev[itemId]+1})))
        }
    }
    
    const removeFromCart = (itemId) =>{
         setCartItem(((prev)=>({...prev, [itemId]:prev[itemId]-1})))
        
     }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(let item in cartItem){
          if(cartItem[item]>0){
            let itemInfo = food_list.find((product)=>product._id === item)
            totalAmount += itemInfo.price * cartItem[item]
          }
        }
        return totalAmount;
    }

    //  useEffect(()=>{
    //      console.log(cartItem)
    //  },[cartItem])

    const contextVlue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
    }
    return (
        <StoreContext.Provider value={contextVlue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider;