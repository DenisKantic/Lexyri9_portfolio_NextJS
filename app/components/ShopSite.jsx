"use client"
import Image from "next/image"
import { useState } from "react";
import PaypalCheckoutButton from "./PaypalCheckoutButton";
import Dropdown from 'react-bootstrap/Dropdown';
import Checkout from "./Checkout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

    
    export default function ShopSite(){


        const [color,setColor] = useState("Gray");
        const [size,setSize] = useState("S");
        const [quantity,setQuantity] = useState(1);
        const [position,setPosition] = useState("Front");
        const [hodiePrice, setHodiePrice] = useState(0.01);
        const [tshirtPrice, setTshirtPrice] = useState(0.01);
        const [longShirtPrice, setLongShirtPrice] = useState(0.01);
        const [text, setText] = useState("");
        const [capPrice, setCapPrice] = useState(0.01);
        const [open,setIsOpen] = useState(false);
        const [longSleeveOpen, setIsLongSleeveOpen] = useState(false);
        const [isCapOpen, setIsCapOpen] = useState(false);
        const [isTshirtOpen, setIsTshirtOpen] = useState(false);

        
    return (
        <div className="w-[80%] mx-auto min-h-[100vh]">

        <h1 className="text-white text-2xl pt-20">My shop</h1>
        <div className="mt-4 border-t-2  w-full pb-20"></div>


                <h1 className="text-4xl text-white">Man's hoodie</h1>
            <div className="text-white w-[70%] h-[50vh] flex  items-center
                            xxs:flex-col xxs:w-full
                            md:flex-row h-auto"> 
                            {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Hoodie/grey.png" unoptimized alt="hoddie"
                width={100} height={100} className="flex w-auto justify-center items-center max-h-[60vh]"/>
                <p>Warning: Picture is ilustration and colors can vary a little</p>
                </div>


                <div className={open ? "flex flex-col xss:w-full md:w-[40%]" : "hidden"}>
              
                        <Checkout
                    items={{ 
                    price:(hodiePrice*quantity),
                    position:position,
                    color: color,
                    quantity: quantity,
                    text: text,
                    size: size,
                    clothes: "dukserica"
                }} /> 
                  <button className="px-3 py-2 bg-white text-black" onClick={()=>setIsOpen(false)}>CLOSE</button>
                    </div>
                <div className={open ? "hidden" : "mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"}> {/* right side options */}

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

                        <p className="pt-6 flex flex-col">Write your custom sign {"(Optional)"} <span className="text-sm text-gray-400">*Max 12 characters</span> </p>
                        <Form.Control size="md" type="text" placeholder="Type here" maxLength="12" onChange={(e)=>setText(e.target.value)}/>
                        
                        <p className="pt-4">Color</p>
                        <div className="items-center justify-around">   
                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setColor("Blue")} >
                        Blue
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Red")}}>
                        Red
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Green")}}>
                        Green
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Gray")}}>
                        Gray
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("White")}}>
                        White
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        </div>

                        <div className="flex flex-row justify-between items-center pt-10">

                            <div className="w-full pr-10">
                            <p>Size</p>
                           
                                        <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                className="flex flex-row justify-center items-center w-full">
                                {size}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="text-center">
                                    <Dropdown.Item href="#/action-1" onClick={()=>setSize("S")} >
                                        S
                                    </Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={()=>{setSize("M")}}>
                                        M
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" onClick={()=>{setSize("L")}}>
                                        L
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                                         </Dropdown>
                            </div>
                            
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="w-full">
                   {quantity}
                  </Dropdown.Toggle>
                            <Dropdown.Menu className="text-center">
                                <Dropdown.Item onClick={()=>setQuantity(1)}>
                                    1
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(2)}>
                                    2
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(3)}>
                                    3
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(4)}>
                                    4
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(5)}>
                                    5
                                </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            </div>

                            
                              </div>

                        <div className={open ? "hidden" : "block"}>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 0,01 </p>
                        </div>
                    </div>
                    <div className="xxs:w-[50%] md:w-[50%] pt-3">
                        <Button className={open ? "hidden" : "h-[40px] p-2"} onClick={()=>setIsOpen(true)}>Order right now!</Button>
                     </div>
                </div>
            </div>

            {/* long sleeve t-shirt item */}

            <h1 className="text-4xl text-white mt-[100px]">Man's Long Sleeve Shirt</h1>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> {/* card item parent */}

                <div className="flex justify-center items-center
                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Long_sleeve/green.png" alt="long sleeve" unoptimized
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                </div>

                <div className={longSleeveOpen ? "flex flex-col xss:w-full md:w-[40%]" : "hidden"}>
              
                        <Checkout
                    items={{ 
                    price:(longShirtPrice*quantity),
                    color: color,
                    clothes: "Dugi rukav",
                    text: text,
                    quantity: quantity,
                    size: size
                }} /> 
                  <button className="px-3 py-2 bg-white text-black" onClick={()=>setIsLongSleeveOpen(false)}>CLOSE</button>
                    </div>
                <div className={longSleeveOpen ? "hidden" : "mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"}> {/* right side options */}


                <p className="pt-6">Write your custom logo</p>
                        <Form.Control size="md" type="text" placeholder="Type here" onChange={(e)=>setText(e.target.value)}/>
                    <div>
                        <p className="pt-6 pb-2">Color</p>

                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setColor("Blue")} >
                        Blue
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Red")}}>
                        Red
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Green")}}>
                        Green
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Gray")}}>
                        Gray
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("White")}}>
                        White
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        <div className="flex flex-row justify-between place-items-center pt-10">

                            <div className="w-full pr-10">
                            <p>Size</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                className="flex flex-row justify-center items-center w-full">
                                {size}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="text-center">
                                    <Dropdown.Item href="#/action-1" onClick={()=>setSize("S")} >
                                        S
                                    </Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={()=>{setSize("M")}}>
                                        M
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" onClick={()=>{setSize("L")}}>
                                        L
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                                         </Dropdown>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="w-full">
                   {quantity}
                  </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>setQuantity(1)}>
                                    1
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(2)}>
                                    2
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(3)}>
                                    3
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(4)}>
                                    4
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(5)}>
                                    5
                                </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 0.01</p>
                        </div>
                        <div className="xxs:w-[50%] md:w-[50%] pt-3">
                        <Button className={longSleeveOpen ? "hidden" : "h-[40px] p-2"} onClick={()=>setIsLongSleeveOpen(true)}>Order right now!</Button>
                     </div>
                    </div>
                </div>
            </div>

           {/* t-shirt item */}

           <h1 className="text-4xl text-white mt-[100px]">Man's T-Shirt</h1>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> {/* card item parent */}

                <div className="flex justify-center items-center
                xxs:w-full md:w-[50%]
                "> {/* left side image */}
                <Image src="./images/MOCKUP/T-shirt/WHITE.png" unoptimized alt="t-shirt"
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                </div>

                <div className={isTshirtOpen ? "flex flex-col xss:w-full md:w-[40%]" : "hidden"}>
              
              <Checkout
          items={{ 
          price:(tshirtPrice*quantity),
          color: color,
          text: text,
          clothes: "t-shirt",
          quantity: quantity,
          size: size
      }} /> 
        <button className="px-3 py-2 bg-white text-black" onClick={()=>setIsTshirtOpen(false)}>CLOSE</button>
          </div>
      <div className={isTshirtOpen ? "hidden" : "mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"}> {/* right side options */}
                    <div>

                    <p className="pt-6">Write your custom logo</p>
                        <Form.Control size="md" type="text" placeholder="Type here" onChange={(e)=>setText(e.target.value)}/>


                        <p className="pt-6 pb-2">Color</p>
                        <div className="items-center justify-around">   
                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                    {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setColor("Blue")} >
                        Blue
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Red")}}>
                        Red
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Green")}}>
                        Green
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Gray")}}>
                        Gray
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("White")}}>
                        White
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        </div>

                        <div className="flex flex-row justify-between place-items-center pt-10">

                        <div className="w-full pr-10">
                            <p>Size</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                className="flex flex-row justify-center items-center w-full">
                                {size}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="text-center">
                                    <Dropdown.Item href="#/action-1" onClick={()=>setSize("S")} >
                                        S
                                    </Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={()=>{setSize("M")}}>
                                        M
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#/action-2" onClick={()=>{setSize("L")}}>
                                        L
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                                         </Dropdown>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="w-full">
                   {quantity}
                  </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>setQuantity(1)}>
                                    1
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(2)}>
                                    2
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(3)}>
                                    3
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(4)}>
                                    4
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(5)}>
                                    5
                                </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            </div>
                           
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 0.01</p>
                        </div>
                        <div className="xxs:w-[50%] md:w-[50%] pt-3">
                        <Button className={isTshirtOpen ? "hidden" : "h-[40px] p-2"} onClick={()=>setIsTshirtOpen(true)}>Order right now!</Button>
                     </div>
                    </div>


                    
                </div>

                
            </div>


            {/* man cap item */}

           <h1 className="text-4xl text-white mt-[100px]">Man's Cap</h1>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center pb-5
            xxs:flex-col xxs:w-full
            md:flex-row h-auto"> {/* card item parent */}

                <div className="flex justify-center items-center
                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Cap/CAPBLACK.png" unoptimized alt="cap"
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                </div>

                <div className={isCapOpen ? "flex flex-col xss:w-full md:w-[40%]" : "hidden"}>
              
              <Checkout
          items={{ 
          price:(capPrice*quantity),
          color: color,
          clothes: "Kapa",
          quantity: quantity
      }} /> 
        <button className="px-3 py-2 bg-white text-black" onClick={()=>setIsCapOpen(false)}>CLOSE</button>
          </div>
      <div className={isCapOpen ? "hidden" : "mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"}> {/* right side options */}

                    <div>
                        <p className="pt-6 pb-2">Color</p>
                        <div className="items-center justify-around">
                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                    {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setColor("Blue")} >
                        Blue
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Red")}}>
                        Red
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Green")}}>
                        Green
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Gray")}}>
                        Gray
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("White")}}>
                        White
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        </div>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full pt-3 justify-center items-center pr-10">
                            <p className="text-xl text-gray-400">*Sizes are universal</p>
                            </div>
                        
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="w-full">
                   {quantity}
                  </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={()=>setQuantity(1)}>
                                    1
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(2)}>
                                    2
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(3)}>
                                    3
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(4)}>
                                    4
                                </Dropdown.Item>
                                <Dropdown.Item onClick={()=>setQuantity(5)}>
                                    5
                                </Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 0.01</p>
                        </div>
                        <div className="xxs:w-[50%] md:w-[50%] pt-3">
                        <Button className={isCapOpen ? "hidden" : "h-[40px] p-2"} onClick={()=>setIsCapOpen(true)}>Order right now!</Button>

                     </div>
                    </div>


                    
                </div>

                
            </div>



        </div>
        )
    }