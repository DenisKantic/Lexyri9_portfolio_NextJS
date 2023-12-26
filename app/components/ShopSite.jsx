"use client"
import Image from "next/image"
import { useState } from "react";


    {/* importing all hoodies color*/}

    const white = require('../../public/images/MOCKUP/Hoodie/white.png');
    const blue = require('../../public/images/MOCKUP/Hoodie/blue.png');
    const green = require('../../public/images/MOCKUP/Hoodie/green.png');
    const red = require('../../public/images/MOCKUP/Hoodie/red.png');
    const grey = require('../../public/images/MOCKUP/Hoodie/grey.png');
    const hodies = {white,blue,green,red,grey};

    {/* importing all t-shirts */ }
    const blackT = require('../../public/images/MOCKUP/T-shirt/BLACK.png');
    const greenT = require('../../public/images/MOCKUP/T-shirt/GREEN.png');
    const blueT = require('../../public/images/MOCKUP/T-shirt/NAVY.png');
    const redT = require('../../public/images/MOCKUP/T-shirt/RED.png');
    const whiteT = require('../../public/images/MOCKUP/T-shirt/WHITE.png');
    const tShirts = {blackT,greenT,blueT,redT,whiteT}

    {/* importing all caps */}
    const greenCap = require('../../public/images/MOCKUP/Cap/CAPGREEN.png')
    const blackCap = require('../../public/images/MOCKUP/Cap/CAPBLACK.png')
    const redCap = require('../../public/images/MOCKUP/Cap/CAPRED.png')
    const whiteCap = require('../../public/images/MOCKUP/Cap/CAPWHITE.png')
    const blueCap = require('../../public/images/MOCKUP/Cap/CAPBLUE.png')
    const navyCap = require('../../public/images/MOCKUP/Cap/MILITARYCAP.png')
    const caps = {greenCap,blackCap,redCap, whiteCap, blueCap, navyCap};
    
    
    
    export default function ShopSite(){

        const [selected,setSelected] = useState(hodies.grey);
        const [selectedT,setSelectedT] = useState(tShirts.whiteT);
        const [selectedCap, setSelectedCap] = useState(caps.blackCap)

        
    return (
        <div className="w-[80%] mx-auto min-h-[100vh]">

        <h1 className="text-white text-2xl pt-20">My shop</h1>
        <div className="mt-4 border-t-2  w-full pb-20"></div>


                <h1 className="text-4xl text-white">Man's hoodie</h1>
            <div className="text-white w-[70%] h-[50vh] flex flex-row items-center"> {/* card item parent */}

                <div className="w-[45%] flex justify-center items-center"> {/* left side image */}
                <Image src={selected} unoptimized alt="hoddie"
                width={100} height={100} className="w-auto h-auto flex justify-center items-center"/>
                </div>

                <div className="w-[40%] mx-auto"> {/* right side options */}

                    <div>
                        <p className="pb-4 text-white">Please select the image position</p>
                        <select name="" id="" className="w-full h-[50px] p-2 bg-transparent border-[1px] rounded-md border-white text-white outline-none cursor-pointer">
                            <option value="" className="h-[50px]">Front</option>
                            <option value="">Back</option>
                        </select>
                        <br />
                        <p className="pt-6">Color</p>
                        <div className="items-center justify-around">
                            <button className="h-[40px] w-[80px] bg-blue-400 text-black" onClick={()=>setSelected(hodies.blue)}>Blue</button>
                            <button className="h-[40px] w-[80px] bg-red-500 text-black" onClick={()=>setSelected(hodies.red)}>Red</button>
                            <button className="h-[40px] w-[80px] bg-green-500 text-black" onClick={()=>setSelected(hodies.green)}>Green</button>
                            <button className="h-[40px] w-[80px] bg-gray-500 text-black" onClick={()=>setSelected(hodies.grey)}>Gray</button>
                            <button className="h-[40px] w-[80px] bg-white text-black" onClick={()=>setSelected(hodies.white)}>White</button>

                        </div>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full">
                            <p>Size</p>
                            <select name="" id="" className="w-[90%] bg-transparent text-center border-[1px] rounded-md border-white h-[50px]">
                                <option value="">S</option>
                            </select>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <select name="" id="" className="w-full text-center bg-transparent border-[1px] rounded-md
                             border-white h-[50px]">
                                <option value="">1</option>
                            </select>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 20,00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* long sleeve t-shirt item */}

            <h1 className="text-4xl text-white mt-[100px]">Man's Long Sleeve Shirt</h1>
            <div className="text-white w-[70%] h-[50vh] flex flex-row items-center"> {/* card item parent */}

                <div className="w-[45%] flex justify-center items-center"> {/* left side image */}
                <Image src="/images/MOCKUP/Long_sleeve/green.png" alt="long sleeve" unoptimized
                width={100} height={100} className="w-auto h-auto flex justify-center items-center"/>
                </div>

                <div className="w-[40%] mx-auto"> {/* right side options */}

                    <div>
                        <p className="pt-6 pb-2">Color</p>
                        <div className="items-center justify-around">
                            <button className="h-[40px] w-[80px] bg-blue-400 text-black" onClick={()=>setSelected(hodies.blue)}>Blue</button>
                            <button className="h-[40px] w-[80px] bg-red-500 text-black" onClick={()=>setSelected(hodies.red)}>Red</button>
                            <button className="h-[40px] w-[80px] bg-green-500 text-black" onClick={()=>setSelected(hodies.green)}>Green</button>
                            <button className="h-[40px] w-[80px] bg-gray-500 text-black" onClick={()=>setSelected(hodies.grey)}>Gray</button>
                            <button className="h-[40px] w-[80px] bg-white text-black" onClick={()=>setSelected(hodies.white)}>White</button>

                        </div>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full">
                            <p>Size</p>
                            <select name="" id="" className="w-[90%] bg-transparent text-center border-[1px] rounded-md border-white h-[50px]">
                                <option value="">S</option>
                            </select>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <select name="" id="" className="w-full text-center bg-transparent border-[1px] rounded-md
                             border-white h-[50px]">
                                <option value="">1</option>
                            </select>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 20,00</p>
                        </div>
                    </div>
                </div>
            </div>

           {/* t-shirt item */}

           <h1 className="text-4xl text-white mt-[100px]">Man's T-Shirt</h1>
            <div className="text-white w-[70%] h-[50vh] flex flex-row items-center"> {/* card item parent */}

                <div className="w-[45%] flex justify-center items-center"> {/* left side image */}
                <Image src={selectedT} unoptimized alt="t-shirt"
                width={100} height={100} className="w-auto h-auto flex justify-center items-center"/>
                </div>

                <div className="w-[40%] mx-auto"> {/* right side options */}

                    <div>
                        <p className="pt-6 pb-2">Color</p>
                        <div className="items-center justify-around">
                            <button className="h-[40px] w-[80px] bg-blue-400 text-black" onClick={()=>setSelectedT(tShirts.blackT)}>Black</button>
                            <button className="h-[40px] w-[80px] bg-red-500 text-black" onClick={()=>setSelectedT(tShirts.redT)}>Red</button>
                            <button className="h-[40px] w-[80px] bg-green-500 text-black" onClick={()=>setSelectedT(tShirts.greenT)}>Green</button>
                            <button className="h-[40px] w-[80px] bg-gray-500 text-black" onClick={()=>setSelectedT(tShirts.blueT)}>Blue</button>
                            <button className="h-[40px] w-[80px] bg-white text-black" onClick={()=>setSelectedT(tShirts.whiteT)}>White</button>

                        </div>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full">
                            <p>Size</p>
                            <select name="" id="" className="w-[90%] bg-transparent text-center border-[1px] rounded-md border-white h-[50px]">
                                <option value="">S</option>
                            </select>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <select name="" id="" className="w-full text-center bg-transparent border-[1px] rounded-md
                             border-white h-[50px]">
                                <option value="">1</option>
                            </select>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 20,00</p>
                        </div>
                    </div>


                    
                </div>

                
            </div>


            {/* man cap item */}

           <h1 className="text-4xl text-white mt-[100px]">Man's Cap</h1>
            <div className="text-white w-[70%] h-[50vh] flex flex-row items-center"> {/* card item parent */}

                <div className="w-[45%] flex justify-center items-center"> {/* left side image */}
                <Image src={selectedCap} unoptimized alt="cap"
                width={100} height={100} className="w-auto h-auto flex justify-center items-center"/>
                </div>

                <div className="w-[40%] mx-auto"> {/* right side options */}

                    <div>
                        <p className="pt-6 pb-2">Color</p>
                        <div className="items-center justify-around">
                            <button className="h-[40px] w-[80px] bg-blue-400 text-black" onClick={()=>setSelectedCap(caps.blueCap)}>Blue</button>
                            <button className="h-[40px] w-[80px] bg-red-500 text-black" onClick={()=>setSelectedCap(caps.redCap)}>Red</button>
                            <button className="h-[40px] w-[80px] bg-green-500 text-black" onClick={()=>setSelectedCap(caps.greenCap)}>Green</button>
                            <button className="h-[40px] w-[80px] bg-gray-500 text-black" onClick={()=>setSelectedCap(caps.whiteCap)}>White</button>
                            <button className="h-[40px] w-[80px] bg-white text-black" onClick={()=>setSelectedCap(caps.navyCap)}>Military</button>
                            <button className="h-[40px] w-[80px] bg-white text-black" onClick={()=>setSelectedCap(caps.blackCap)}>Black</button>


                        </div>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full">
                            <p>Size</p>
                            <select name="" id="" className="w-[90%] bg-transparent text-center border-[1px] rounded-md border-white h-[50px]">
                                <option value="">S</option>
                            </select>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <select name="" id="" className="w-full text-center bg-transparent border-[1px] rounded-md
                             border-white h-[50px]">
                                <option value="">1</option>
                            </select>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 20,00</p>
                        </div>
                    </div>


                    
                </div>

                
            </div>



        </div>
        )
    }