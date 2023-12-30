"use client"
import Image from "next/image"
import { useState } from "react";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { NavItem, PageItem } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';




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

        const [hodie,setHodie] = useState("Gray");

        const [price,setPrice] = useState(20);
        const [size,setSize] = useState("S");
        const [number,setNumber] = useState(2);
        const [position,setPosition] = useState("Front");

        console.log(hodie);
        console.log(size);
        console.log(number);
        console.log(price);
        
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

                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {position}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setPosition("Front")} >
                        Front
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setPosition("Back")}}>
                        Back
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>
                        
                        <br />
                        <p className="pt-6">Color</p>
                        <div className="items-center justify-around">   
                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {hodie}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setHodie("Blue Hoodie")} >
                        Blue
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setHodie("Red Hoodie")}}>
                        Red
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setHodie("Green Hoodie")}}>
                        Green
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setHodie("Gray hoodie")}}>
                        Gray
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setHodie("White hoodie")}}>
                        White
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        </div>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full">
                            <p>Size</p>
                           
                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center text-center w-[90%]">
                   {size}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setSize("S")} >
                        S
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setSize("M")}}>
                        M
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <select name="" id="" className="w-full text-center bg-transparent border-[1px] rounded-md
                             border-white h-[50px]">
                                <option value="" onClick={()=>setNumber(1)}>1</option>
                                <option value="" onClick={()=>setNumber(2)}>2</option>
                            </select>
                            </div>

                            
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 20,00</p>
                        </div>
                    </div>
                    <PaypalCheckoutButton product={{description: hodie, price: (price*number)}} />
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

                        <PaypalCheckoutButton product={{description: NavItem, price: PageItem}} />
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

                            <div className="w-full pb-2">
                            <p>*Sizes are universal</p>
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