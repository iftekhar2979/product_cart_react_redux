import { ADDTOCART, DECREASEQUANTITY, DELETEITEM, INCREASEQUANTITY } from "./actionTypes"

export const addToCart=(cartItem)=>{
    return {
        type:ADDTOCART,
        payload:cartItem
    }
}
export const increaseQuantity=(cartItem)=>{
    const {id,pricePerPics,quantity}=cartItem
    return {
        type:INCREASEQUANTITY,
        payload:{id,pricePerPics,quantity:quantity+1}
    }
}
export const decreaseQuantity=(cartItem)=>{
    const {id,pricePerPics,quantity}=cartItem
    return {
        type:DECREASEQUANTITY,
        payload:{id,pricePerPics,quantity:quantity-1}
    }
}
export const deleteCartItem=(id)=>{
    return {
        type:DELETEITEM,
        payload:id
    }
}