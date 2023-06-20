import react, { useState } from 'react';
import PropTypes from 'prop-types';
import { HiTrash,HiPlusSm ,HiMinusSm} from "react-icons/hi";
import { decreaseQuantity, deleteCartItem, increaseQuantity } from '../Redux/Cart/actions';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantityDecrease, increaseQuantityWhenDeleted, reduceQuantityIncrease } from '../Redux/Product/actions';
const CartItem = ({singleCartProduct}) => {
  const product=useSelector(state=>state.product)

  const dispatch=useDispatch()
  
  let {productName,category,pricePerPics,price,quantity,imageURL,id}=singleCartProduct
  const findProduct=product.find(item=>item.id===id)

     const handleIncreaseQuantity=(cartItem)=>{   
     dispatch(increaseQuantity(cartItem))
     dispatch(reduceQuantityIncrease(id,quantity))
     }
     const handleDecreaseQuantity=(cartItem)=>{
        dispatch(decreaseQuantity(cartItem))
        dispatch(increaseQuantityDecrease(id,quantity))
     }
     const handleRemove=(id,quantity)=>{
       dispatch(increaseQuantityWhenDeleted(id,quantity))
      dispatch(deleteCartItem(id))
     }
    return (
        <div className="cartCard">
        <div className="flex items-center col-span-6 space-x-6">

          <img className="lws-cartImage" src={imageURL} alt="product" />
   
          <div className="space-y-2">
            <h4 className="lws-cartName">{productName}</h4>
            <p className="lws-cartCategory">{category}</p>
            <p>BDT <span className="lws-cartPrice">{quantity===1?price:pricePerPics}</span></p>
          </div>
        </div>
        <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
    
          <div className="flex items-center space-x-4" >
            <button className="lws-incrementQuantity" disabled={quantity===0&& true} onClick={()=>handleDecreaseQuantity(singleCartProduct)}>
              <HiMinusSm/>
            </button>
            <span className="lws-cartQuantity">{quantity}</span>
            <button className="lws-decrementQuantity" disabled={(findProduct.quantity===0) && true} onClick={()=>handleIncreaseQuantity(singleCartProduct)}>
           <HiPlusSm/>
            </button>
          </div>
       
          <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{price}</span></p>
        </div>
        
        <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
          <button className="lws-removeFromCart" onClick={()=>handleRemove(id,quantity)}>
            <HiTrash/>
          </button>
        </div>
      </div>
    )
};

export default CartItem;