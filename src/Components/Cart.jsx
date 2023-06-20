import react from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import BillSection from './BillSection';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItem=useSelector(state=>state.cart)
    const subTotal=cartItem.reduce((acc,cur)=>acc+cur.price,0)
    return (
        <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {cartItem.length===0 && 'No Cart Remaining...'}
                  {cartItem.map(singleCartProduct=><CartItem key={singleCartProduct.id} singleCartProduct={singleCartProduct}/>)}  
                    </div>
                    <div>
                    <BillSection subTotal={subTotal}/>
                    </div>
            </div>
        </div>
    )
};

export default Cart;