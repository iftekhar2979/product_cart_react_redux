import react, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Products from './Products';
import InputProduct from './InputProduct';
import { useSelector } from 'react-redux';
import AddProduct from './AddProduct';
import Cart from './Cart';

const Home = () => {
   const [show,setShow]=useState(true)
    

    return (
        <>
            <Navbar show={show} setShow={setShow}/>
            <main className="py-16">
               {show? <AddProduct/>:<Cart/>}
            </main>
        </>
    )
};

export default Home;