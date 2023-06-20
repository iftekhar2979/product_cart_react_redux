import react from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { HiShoppingCart } from "react-icons/hi";
import logo from '../../src/assets/images/logo.png'
const Navbar = ({show,setShow}) => {
  const cartLength=useSelector(state=>state.cart)
    return (
        <nav className="bg-[#171C2A] py-4">
    <div className="navBar">
      <a href="index.html">
        <img src={logo} alt="LWS" className="max-w-[140px]" />
      </a>

      <div className="flex gap-4">
        <a  className={`navHome cursor-pointer ${show && 'font-bold'}`} id="lws-home"  onClick={()=>setShow(true)}> Home </a>
        <a  className="navCart cursor-pointer" id="lws-cart" onClick={()=>setShow(false)}>
        <HiShoppingCart/>
          <span id="lws-totalCart">{cartLength.length}</span>
        </a>
      </div>
    </div>
    </nav>
    )
};

export default Navbar;