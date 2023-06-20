import react from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { quantityReduce } from '../Redux/Product/actions';
import { addToCart,  } from '../Redux/Cart/actions';

const Products = ({singleProduct}) => {
  
  const dispatch=useDispatch()
  const {productName,category,quantity,price,imageURL,id}=singleProduct
  const handleAddToCart=(cartItem)=>{
    const cartValues={...cartItem,quantity:1}
    dispatch(addToCart(cartValues))
    dispatch(quantityReduce(cartItem.id))

  }
  return (
    <>
      <div className="lws-productCard">
        <img className="lws-productImage" src={imageURL} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{productName}</h4>
          <p className="lws-productCategory">{category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">BDT <span className="lws-price">{price}</span></p>
            <p className="productQuantity">QTY <span className="lws-quantity">{quantity}</span></p>
          </div>
          <button className={`lws-btnAddToCart`} disabled={quantity<=0?true:false} onClick={()=>handleAddToCart(singleProduct)}>Add To Cart</button>
        </div>
      </div>
    </>
  )
};

export default Products;