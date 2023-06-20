import { ADDTOCART, DECREASEQUANTITY, DELETEITEM, INCREASEQUANTITY,  } from "./actionTypes"

const intialState=[

]
const existProduct=(state,payload)=>state.some(product=>product.id===payload)
const cartReducer=(state=intialState,action)=>{
    switch(action.type){
        case ADDTOCART:
            const {id}=action.payload
            if(existProduct(state,id)){
                return state?.map(cartItem=>{
                    const {price}=action.payload
                    if(cartItem.id===id){
                        return {
                            ...cartItem,quantity:cartItem.quantity +1,
                            price:(cartItem.quantity+1)*price,
                        }
                  
                    }else {
                        return cartItem
                    }
                    
                })      
            }
            
            return  [...state,action.payload]
        case INCREASEQUANTITY:
            return state?.map(cartItem=>{
                const {id,pricePerPics,quantity}=action.payload
                if(cartItem.id===id){
                    return {
                        ...cartItem,quantity:quantity,
                        price:quantity*pricePerPics,
                        pricePerPics:pricePerPics  
                    }
                    
                }
                else {
                    return cartItem
                }
            }) 
        case DECREASEQUANTITY:
          
            return state?.map(cartItem=>{
                const {id,pricePerPics,quantity}=action.payload
                if(cartItem.id===id){
                    return {
                        ...cartItem,quantity:quantity,
                        price:quantity*pricePerPics,
                        pricePerPics:pricePerPics 
                    }
                    
                }
                else {
                    return cartItem
                }
            })   
        case DELETEITEM:
            return state?.filter(cartItem=>cartItem.id!==action.payload)
        default :
            return state


    }
}
export default cartReducer