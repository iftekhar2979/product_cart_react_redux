import react, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/Product/actions';

function create_UUID(){
    var dt = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (dt + Math.random()*16)%16 | 0;
        dt = Math.floor(dt/16);
        return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });
    return uuid;
}
const InputProduct = () => {
    const [details,setDetails]=useState({
        productName:'',
        category:'',
        imageURL:'',
        price:0,
        quantity:0
    })
    const dispatch=useDispatch()
    const handleChange=(event)=>{
    
        setDetails((existingDetails)=>{
          return {...existingDetails,[event.target.name]:event.target.value}
        })
      }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form=e.target
        const {productName,category,imageURL,price,quantity}=details
        const newObj={productName,category,imageURL,price:parseFloat(price),quantity:parseFloat(quantity),pricePerPics:parseFloat(price)}
        dispatch(addProduct(newObj,create_UUID()))
        form.reset()
        setDetails('')
       
      
    }
    return (
        <div className="formContainer">
            <h4 className="formTitle">Add New Product</h4>
            <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label htmlFor="lws-inputName">Product Name</label>
                    <input className="addProductInput" id="lws-inputName" onChange={handleChange} name='productName' type="text" required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lws-inputCategory">Category</label>
                    <input className="addProductInput" id="lws-inputCategory" onChange={handleChange} name='category' type="text" required />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lws-inputImage">Image Url</label>
                    <input className="addProductInput" id="lws-inputImage" onChange={handleChange} name='imageURL' type="text" required />
                </div>
                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label htmlFor="ws-inputPrice">Price</label>
                        <input className="addProductInput" type="number" onChange={handleChange} name='price' id="lws-inputPrice" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="lws-inputQuantity">Quantity</label>
                        <input className="addProductInput" type="number" onChange={handleChange} name='quantity'  id="lws-inputQuantity" required />
                    </div>
                </div>
                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
            </form>
        </div>
    )
};

export default InputProduct;