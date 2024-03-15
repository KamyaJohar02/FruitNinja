import React from 'react'
import fruitnin from  '../assets/fruitnin.png'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';

const Header = () => {
const[showMenu, setShowMenu] = useState(false);
 const handleShowMenu = ()=>{
  setShowMenu(!showMenu);
 }

  return (
    <header className='fixed shadow-md w-full h-16 px-2 md:px-4 z-50'>
    
 {/* {desktop} */}
 <div className='flex items-center h-full justify-between'>
    <Link to={""}>
 <div className='h-40'>
  <img src={fruitnin} alt='logo' className='h-full' />
  </div>
  </Link>
   <div className='flex items-center gap-4 md:gap-7'>
   <nav className='flex gap-4 md:gap-6 text-base md:text-lg'>
    <Link to={""} className='text-green-500 text-lg hover:bg-yellow-300 active:bg-yellow-400 focus:outline-none focus:ring focus:ring-green-500 focus:bg-green-500 focus:text-yellow-300'> Home</Link>
    <Link to={"Menu"} className='text-green-600 text-lg  hover:bg-yellow-300 active:bg-yellow-400 focus:outline-none focus:ring focus:ring-green-500 focus:bg-green-500 focus:text-yellow-300'>Menu</Link>
    <Link to={"About"} className='text-green-500 text-lg  hover:bg-yellow-300 active:bg-yellow-400 focus:outline-none focus:ring focus:ring-green-500 focus:bg-green-500 focus:text-yellow-300'>About</Link>
    <Link to={"Contact"} className='text-green-600 text-lg  hover:bg-yellow-300 active:bg-yellow-400 focus:outline-none focus:ring focus:ring-green-500 focus:bg-green-500 focus:text-yellow-300'>Contact</Link>
   </nav>
   
  
   <div className='text-2xl text-green-600 relative'>
   <FaShoppingCart />
   <div className='absolute -right-1 -top-2 m-0 p-0 h-4 w-4 text-center  text-sm bg-yellow-300 rounded-full'>1</div>
   </div>
   <div onClick={handleShowMenu} className='text-xl text-green-600 cursor-pointer'>
    <div className='border-2 border-solid border-green-600 p-1 rounded-full bg-yellow-300'>
   <FaUser />
   </div>
   {
    showMenu && (
    <div className='absolute right-2 bg-yellow-300 py-2 px-2 shadow dropshadow-md border-2 border-yellow-400'>
    <p className='whitespace-nowrap text-md border-yellow-400  hover:bg-yellow-400'>New product</p>
    <p className='whitespace-nowrap text-md border-yellow-400  hover:bg-yellow-400'>Login</p>
   </div>
   )}
   
   </div>
  
  <div>
    </div>
 
 
 
  </div>

 

    


 </div>
 {/* {mobile} */}
 </header>

   
  )
}

export default Header