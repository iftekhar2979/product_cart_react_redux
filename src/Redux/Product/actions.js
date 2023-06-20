import { ADDPRODUCT, INCREASE_QUANTITY_DECREASE, INCREASE_QUANTITY_WHEN_DELETED, QUANITITYREDUCE, REDUCE_QUANTITY_INCREASE } from "./actionTypes"

export const addProduct = (productObj, id) => {
    return {
        type: ADDPRODUCT,
        payload: {
            id, productObj
        }
    }
}
export const quantityReduce = (id) => {
    return {
        type: QUANITITYREDUCE,
        payload: id
    }
}
export const reduceQuantityIncrease = (id, quantity) => {
    return {
        type: REDUCE_QUANTITY_INCREASE,
        payload: { id, quantity }

    }
}
export const increaseQuantityDecrease = (id, quantity) => {
    return {
        type: INCREASE_QUANTITY_DECREASE,
        payload: { id, quantity }

    }
}
export const increaseQuantityWhenDeleted=(id,quantity,)=>{
    return {
        type: INCREASE_QUANTITY_WHEN_DELETED,
        payload: { id, quantity}

    }
}