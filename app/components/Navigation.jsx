import { TbCoffee } from "react-icons/tb";
import Image from "next/image";


export default function Navigation() {
    return (
     <div className="w-[90%] mx-auto">
      <div className="flex justify-between items-center flex-row-reverse h-[8vh] pt-5 fixed w-[90%]"> 
        <div>
         <button className="bg-white rounded-xl px-5 py-3 flex items-center justify-center text-xl text-black">
            <TbCoffee className="mr-2" size={25}/>
            Buy me a coffee
            </button>
        </div> 

        <div>
         <ul className="flex justify-center items-center text-white">
            <Image src="/images/logo.webp" alt="lexiry_logo" width={50} height={50} 
            className="mr-10"/>
            <li className="pr-10 hover:cursor-pointer transition-all duration-200 ease-in-out group">
               <span className="p-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] 
               bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Home
               </span>
            </li>
            <li className="pr-10 hover:cursor-pointer transition-all duration-200 ease-in-out group">
               <span className="p-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] 
               bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                About me
               </span>
            </li>
            <li className="pr-10 hover:cursor-pointer transition-all duration-200 ease-in-out group">
               <span className="p-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] 
               bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Shop
               </span>
            </li>
            <li className="pr-10 hover:cursor-pointer transition-all duration-200 ease-in-out group">
               <span className="p-2 bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] 
               bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                Contact
               </span>
            </li>
            <li className="pr-10 hover:cursor-pointer transition-all duration-200 ease-in-out group">

            <h1 className='mr-3'>Language:</h1>
            </li>
         </ul>

        </div>

      </div>        
     </div>
    )
  }
  