import { TbCoffee } from "react-icons/tb";
import Image from "next/image";


export default function Navigation() {
    return (
     <div className="w-[90%] mx-auto flex justify-between items-center flex-row-reverse h-[8vh] pt-5">

        <div>
         <button className="bg-white rounded-xl px-5 py-3 flex items-center justify-center text-xl text-black">
            <TbCoffee className="mr-2" size={25}/>
            Buy me a coffee
            </button>
        </div> 

        <div>
         <ul className="flex justify-center items-center text-white">
            <Image src="/images/logo.webp" alt="test" width={50} height={50} 
            className="mr-10"/>
            <li className="pr-10">Home</li>
            <li className="pr-10">About me</li>
            <li className="pr-10">Shop</li>
            <li className="pr-10">Contact</li>
            <li className="pr-10">Dropdown</li>
         </ul>
        </div>

        
     </div>
    )
  }
  