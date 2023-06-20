import react from 'react';
import InputProduct from './InputProduct';
import Products from './Products';
import { useSelector } from 'react-redux';

const AddProduct = () => {
    const products=useSelector(state=>state.product)
    return (
        <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
            {products.length===0  && <h1 className='font-bold h2'>No Produce Added! --Please Add Produce</h1>}
           {products?.map(singleProduct=><Products key={singleProduct.id} singleProduct={singleProduct}/>) }
        </div>
        <div>
            <InputProduct/>
        </div>
    </div>
    )
};
export default AddProduct;