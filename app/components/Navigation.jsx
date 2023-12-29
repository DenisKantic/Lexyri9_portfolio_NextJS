"use client";
import { TbCoffee } from "react-icons/tb";
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlinePhone} from 'react-icons/ai'
import Image from "next/image";
import React, { useState } from "react";


export default function Navigation() {

   const [nav,setNav] = useState(false);

    return (
     <div className="w-[90%] mx-auto">
      <div className="flex h-[8vh] pt-5 fixed w-[90%] 
                     xxs:items-start xxs:justify-start md:flex-row-reverse md:justify-between md:items-center">


        <div>
         <a className="bg-white rounded-xl px-5 py-3 flex items-center justify-center text-black
                           xxs:hidden 
                           md:flex md:px-3 md:py-1 md:text-sm md:text-xl
                           lg:px-5 lg:py-3 lg:text-xl"
                           href="https://www.paypal.com/paypalme/lexyri"
                           target="_blank" rel="noopener noreferrer">
            <TbCoffee className="mr-2" size={25}/>
            Buy me a coffee
            </a>
        </div> 

        <ul className='xxs:hidden md:flex justify-start items-center text-white'>
            <Image src="/images/logo.webp" alt="lexiry_logo" width={50} height={50} 
            className="mr-10"/>
            <li className="hover:cursor-pointer transition-all duration-200 ease-in-out group
                           md:pr-2 lg:pr-10">
               <span className="p-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] 
               bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Home
               </span>
            </li>
            <li className="hover:cursor-pointer transition-all duration-200 ease-in-out group
                           md:pr-2 lg:pr-10">
               <span className="p-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] 
               bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                About me
               </span>
            </li>
            <li className="hover:cursor-pointer transition-all duration-200 ease-in-out group
                           md:pr-2 lg:pr-10">
               <span className="p-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] 
               bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Shop
               </span>
            </li>
            <li className="hover:cursor-pointer transition-all duration-200 ease-in-out group
                           md:pr-2 lg:pr-10">
               <span className="p-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] 
               bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Contact
               </span>
            </li>
            <li className="hover:cursor-pointer transition-all duration-200 ease-in-out group
                           md:pr-2 lg:pr-10">

            <h1 className='mr-3'>Language:</h1>
            </li>
         </ul>
   
         <div className="md:hidden xxs:flex">
            <AiOutlineMenu className='mr-2 cursor-pointer md:hidden text-white flex' size={30} onClick={()=> setNav(!nav)}></AiOutlineMenu>
            <h1 className="text-2xl text-white">Lexyri9</h1>
            <div className={ nav ? 'bg-black/80 w-full fixed h-screen z-10 top-0 left-0 duration-200' : 'flex'}>
            <div className={nav ? 'flex justify-center items-center text-white' : 'fixed left-[-100%] w-0 top-0 duration-300 bg-purple-400'}>
            <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' 
                        onClick={()=> setNav(!nav)}  size={30}></AiOutlineClose> 


               <ul className={ nav ? 'flex flex-col items-start justify-center p-5 text-black text-lg mt-[50px] bg-white text-black w-full h-[40vh]' : 'hidden'}>
                  <li className='mr-2 flex items-center py-2'><AiOutlineHome size={22} className='mr-5'/><a href="#home" onClick={()=> setNav(!nav)}>HOME</a></li>
                  <li className='mr-2 flex items-center py-2'><AiOutlineInfoCircle size={22} className='mr-5' /><a href="#aboutUs" onClick={()=> setNav(!nav)}>ABOUT ME</a></li>
                  <li className='mr-2 flex items-center py-2'><AiOutlineShoppingCart size={22} className='mr-5' /><a href="#products" onClick={()=> setNav(!nav)}>SHOP</a></li>
                  <li className='mr-2 flex items-center py-2'><AiOutlinePhone  size={22} className='mr-5'/><a href="#contact" onClick={()=> setNav(!nav)}>CONTACT</a></li>
               </ul>

         </div>


        </div>
        </div>

      </div>        
     </div>
    )
  }
  