"use client";
import { TbCoffee } from "react-icons/tb";
import {AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineInfoCircle, AiOutlineShoppingCart, AiOutlinePhone} from 'react-icons/ai'
import { HiLanguage } from "react-icons/hi2";
import Image from "next/image";
import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Link from "next/link";




export default function Navigation() {

   const [nav,setNav] = useState(false);
   const [lang,setLang] = useState('EN');

    return (
     <div className="w-[90%] mx-auto">
      <div className="flex h-[8vh] fixed w-[90%]  
                     xxs:items-start xxs:justify-start xxs:pt-3
                     md:flex-row-reverse md:justify-between md:items-center md:pt-5">


        <div>
            <Button variant="primary" href="https://www.paypal.com/paypalme/lexyri"
            target="_blank" rel="noopener noreferrer"
            className="bg-white rounded-xl flex items-center justify-center text-black
                           xxs:hidden 
                           md:flex md:w-[180px] md:h-[50px] md:text-sm md:text-md
                           lg:text-lg lg:w-[220px]">
               Buy me a coffee
               <TbCoffee className="ml-2" size={25}/>
               </Button>
        </div> 

        <ul className='xxs:hidden md:flex justify-start items-center text-white'>
            <Image src="/images/logo.webp" alt="lexiry_logo" width={50} height={50} 
            className="mr-10"/>
            <li className="hover:cursor-pointer transition-all duration-200 ease-in-out group
                           md:pr-2 lg:pr-10">
               <span className="p-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] 
               bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                <Link href="/">Home</Link>
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
               <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-center items-center">
                   {lang}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1"  
                     onClick={()=>setLang('EN')}
                     className="flex justify-start items-center">
                        <Image width={20} height={20} className="mr-2" src="/images/US_logo.png" alt="us_logo" />
                        EN
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setLang("BA")}
                  className="flex justify-start items-center">
                  <Image width={20} height={20} className="mr-2" src="/images/bhs_logo.png" alt="ba_logo"/>
                     BA
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>
         </ul>
   
         <div className="md:hidden xxs:flex xxs:w-full  xxs:mx-auto xxs:justify-center">

            <div className="flex justify-between items-center w-[90%]">
            <Image src="/images/logo.webp" alt="lexiry_logo" width={35} height={35} />
            <AiOutlineMenu className='cursor-pointer md:hidden text-white flex ml-3' size={30} onClick={()=> setNav(!nav)}></AiOutlineMenu>
            <Button variant="link"
             href="https://www.paypal.com/paypalme/lexyri"
             target="_blank" rel="noopener noreferrer">
               <TbCoffee className="text-white" size={30} />
            </Button>
            </div>

            <div className={ nav ? 'bg-black/80 w-full fixed h-screen z-10 top-0 left-0 duration-200' : 'flex'}>
            <div className={nav ? 'flex justify-center items-center text-white' : 'fixed left-[-100%] w-0 top-0 duration-300 bg-purple-400'}>
            <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' 
                        onClick={()=> setNav(!nav)}  size={30}></AiOutlineClose> 


               <ul className={ nav ? 'flex flex-col items-start justify-center p-5 text-black text-lg mt-[50px] bg-white text-black w-full h-[40vh]' : 'hidden'}>
                  <li className='mr-2 flex items-center py-2'>
                  <HiLanguage size={22} className='mr-5' />
                  <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-center items-center text-black">
                  {lang}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1"  
                     onClick={()=>setLang('EN')}
                     className="flex justify-start items-center">
                        <Image width={20} height={20} className="mr-2" src="/images/US_logo.png" alt="us_logo" />
                        EN
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>setLang("BA")}
                  className="flex justify-start items-center">
                  <Image width={20} height={20} className="mr-2" src="/images/bhs_logo.png" alt="ba_logo"/>
                     BA
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>
                  </li>
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
  