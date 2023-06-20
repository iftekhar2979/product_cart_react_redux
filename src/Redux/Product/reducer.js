import { ADDPRODUCT, INCREASE_QUANTITY_DECREASE, INCREASE_QUANTITY_WHEN_DELETED, QUANITITYREDUCE, REDUCE_QUANTITY_INCREASE } from "./actionTypes";

const intialState = [

]
const productReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            const { id, productObj } = action.payload
            return [...state, { id: id, ...productObj }]
        case QUANITITYREDUCE:
            return state?.map(product => {
                if (product.id === action.payload) {
                    return { ...product, quantity: product.quantity - 1 }
                }
                return product
            })
        case REDUCE_QUANTITY_INCREASE:
            return state?.map(product => {
                const { id } = action.payload
                if (product.id === id) {
                    return { ...product, quantity: product.quantity - 1 }
                }
                return product
            })
        case INCREASE_QUANTITY_DECREASE:
            return state?.map(product => {
                const { id } = action.payload
                if (product.id === id) {
                    return { ...product, quantity: product.quantity + 1 }
                }
                return product
            })
        case INCREASE_QUANTITY_WHEN_DELETED:
            return state?.map(product => {
                const { id, quantity } = action.payload
                if (product.id === id) {
                    return { ...product, quantity:product.quantity+quantity}
                }
                return product
            })
        default:
            return state
    }
}
export default productReducer