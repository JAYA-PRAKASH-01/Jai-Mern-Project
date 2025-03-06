import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({setshowlogin}) => {
    const [menu,setmenu]=useState("Home");
    const {getTotalAmount}=useContext(StoreContext);
  return (
    <div className='navbar' id='navbar'>
     <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> 
      <ul className="navbar-menu"> 
        <a href='#explore-menu'onClick ={()=>setmenu("Home")} className={menu==="Home"?"active":""}> Home | </a>
        <a href='#food-display' onClick={()=>setmenu("Menu")} className={menu==="Menu"?"active":""}> Menu | </a> 
        <a href='#app-download' onClick={()=>setmenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}> Mobile-App | </a> 
        <a href='#footer' onClick={()=>setmenu("Contact Us")} className={menu==="Contact Us"?"active":""}> Contact Us |</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
           <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalAmount()===0?<></>:"dot"}></div>
        </div>
        <button onClick={()=>setshowlogin(true)}>Log in </button> 
      </div>
    </div>
  )
}

export default Navbar