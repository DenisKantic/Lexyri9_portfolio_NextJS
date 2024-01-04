"use client"
import Image from "next/image"
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Checkout from "../components/Checkout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

    
    export default function Shop(){


        const [color,setColor] = useState("Gray");
        const [size,setSize] = useState("S");
        const [quantity,setQuantity] = useState(1);
        const [position,setPosition] = useState("Front");
        const [hodiePrice, setHodiePrice] = useState(18);
        const [tshirtPrice, setTshirtPrice] = useState(8);
        const [longShirtPrice, setLongShirtPrice] = useState(12);
        const [text, setText] = useState("");
        const [capPrice, setCapPrice] = useState(6);
        const [open,setIsOpen] = useState(false);
        const [longSleeveOpen, setIsLongSleeveOpen] = useState(false);
        const [isCapOpen, setIsCapOpen] = useState(false);
        const [isTshirtOpen, setIsTshirtOpen] = useState(false);
        const [perfume, setPerfum] = useState("Unisex");
        const [perfumeOpen, setIsPerfumOpen] = useState(false);
        const perfumePrice = 6;
        
    return (
        <div className="w-[80%] mx-auto min-h-[100vh]">

        <h1 className="text-white text-2xl pt-20">Moj shop</h1>
        <div className="mt-4 border-t-2  w-full pb-20"></div>


                <h1 className="text-4xl text-white pb-5">Parfemi</h1>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> 
            {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/parfume.png" alt="perfum" unoptimized
                width={100} height={100} className="w-auto flex justify-center items-center max-h-[50vh]"/>
                <p>Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </div>

                <div className={perfumeOpen ? "flex flex-col xss:w-full md:w-[40%]" : "hidden"}>
              
                        <Checkout
                    items={{ 
                    price:((perfumePrice*quantity)+12),
                    perfum: perfume,
                    quantity: quantity,
                }} /> 
                  <button className="px-3 py-2 bg-white text-black" onClick={()=>setIsPerfumOpen(false)}>CLOSE</button>
                    </div>
                <div className={perfumeOpen ? "hidden" : "mx-auto xxs:w-full md:w-[45%] lg:max-w-[50%]"}> {/* right side options */}

                    <div>
                        <h1 className="text-sm">Opis: <br />
                        UNISEX guess the smell:

                        Ovaj parfem je dizajniran za oba spola i karakterizira ga misteriozan miris 
                        koji potiče na igru pogađanja. Nudi jedinstvenu kombinaciju cvjetnih i drvenih nota 
                        koje stvaraju osvježavajući, ali intrigantan dojam.
                        <br /> <br />
                        WOMEN secret:
                        Predstavlja sofisticiranu i senzualnu mirisnu 
                        kompoziciju. Ovo je elegantan spoj cvjetnih i voćnih nota, stvarajući miris 
                        koji ističe ženstvenost i privlačnost.

                        <br /> <br />
                        MAN secret:
                        Parfem za muškarce izražava snažnu i samopouzdanu aromu. 
                        Sastoji se od drvenih, začinskih i citrusnih nota koje zajedno stvaraju 
                        muževan i privlačan miris, odgovarajući za svakodnevnu upotrebu.
                        </h1>
                        <p></p>


                        <p className="pt-6 pb-2">Parfem</p>

                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {perfume}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setPerfum("Unisex")} >
                        Unisex
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setPerfum("Woman Secret")}}>
                        Woman Secret
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setPerfum("Men Secret")}}>
                        Men Secret
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

            <h1 className="mt-5 ">Sadržaj <br />20ml</h1>

                        <div>
                        <h1 className="text-lg pt-5">Cijena</h1>
                        <p className="text-4xl font-bold">6 &euro;  <span className="text-sm text-gray-400">+ poštarina</span> </p>
                        <p className="font-bold">Promotivna cijena!!!</p>
                        </div>
                        <div className="xxs:w-[50%] md:w-[50%] pt-3">
                        <Button  className={perfumeOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsPerfumOpen(true)}>Naruči!</Button>
                     </div>
                    </div>
                </div>
            </div>

            <h1 className="text-4xl text-white pt-20 pb-5">Unisex Dukserice</h1>

            <div className="text-white w-[70%] h-[50vh] flex  items-center
                            xxs:flex-col xxs:w-full
                            md:flex-row h-auto"> 
                            {/* card item parent */}



                            {/* finish */}

                <div className="flex justify-center items-center flex-col
                                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Hoodie/grey.png" unoptimized alt="hoddie"
                width={100} height={100} className="flex w-auto justify-center items-center max-h-[60vh]"/>
                <p>Napomena: Fotografija je ilustrativna i može se razlikovati</p>
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
                        <p className="pb-4 text-white">Izaberi stranu natpisa {"(naprijed ili nazad)"}</p>

                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {position}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item onClick={()=>setPosition("Front")} >
                        Prednja {"(natpis na prednjoj strani)"}
                     </Dropdown.Item>
                  <Dropdown.Item onClick={()=>{setPosition("Back")}}>
                        Zadnja {"(natpis na leđima)"}
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        <p className="pt-6 flex flex-col">Upiši svoj natpis po želji {"(Opcionalno)"} <span className="text-sm text-gray-400">*Max 12 karaktera</span> </p>
                        <Form.Control size="md" type="text" placeholder="Type here" maxLength="12" onChange={(e)=>setText(e.target.value)}/>
                        
                        <p className="pt-4">Color</p>
                        <div className="items-center justify-around">   
                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setColor("Blue")} > {/*crna crvena plava teget plava zelena siva */}
                        Blue
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Navy Blue")}}>
                        Navy Blue
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Black")}}>
                        Black
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Green")}}>
                        Green
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Gray")}}>
                        Gray
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Red")}}>
                        Red
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        </div>

                        <div className="flex flex-row justify-between items-center pt-10">

                            <div className="w-full pr-10">
                            <p>Veličina</p>
                           
                                        <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                className="flex flex-row justify-center items-center w-full">
                                {size}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="text-center">
                                    <Dropdown.Item onClick={()=>setSize("S")} >
                                        S
                                    </Dropdown.Item>
                                <Dropdown.Item  onClick={()=>{setSize("M")}}>
                                        M
                                    </Dropdown.Item>
                                    <Dropdown.Item  onClick={()=>{setSize("L")}}>
                                        L
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>{setSize("L")}}>
                                        XL
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                                         </Dropdown>
                            </div>
                            
                            
                            <div className="w-full">
                            <p>Količina</p>
                            <Form.Control 
                            className="text-center"
                            size="md" type="number" 
                            required inputMode="numeric" 
                            placeholder="1" min="1" max="20" 
                            onChange={(e)=>setQuantity(e.target.value)}/>
                            {console.log(quantity+ "testing")}

                            {/* 
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

            */ }
                            </div>

                            
                              </div>

                        <div className={open ? "hidden" : "block"}>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold text-white">USD 30</p>
                        </div>
                    </div>
                    <div className="xxs:w-[50%] md:w-[50%] pt-3">
                        <Button className={open ? "hidden" : "flex items-center px-3"} onClick={()=>
                            {if(quantity!=0)
                            setIsOpen(true)
                        else {
                            alert("Please enter quantity number")
                        }}
                        }>Naruči!</Button>
                     </div>
                </div>
            </div>

            {/* long sleeve t-shirt item */}

            <h1 className="text-4xl text-white mt-[100px]">Unisex Majice Dugih Rukava</h1>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Long_sleeve/green.png" alt="long sleeve" unoptimized
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                <p>Napomena: Fotografija je ilustrativna i može se razlikovati</p>
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


                <p className="pt-6 flex flex-col">Upiši svoj natpis po želji {"(Opcionalno)"} <span className="text-sm text-gray-400">*Max 12 karaktera</span> </p>
                        <Form.Control size="md" type="text" placeholder="Type here" onChange={(e)=>setText(e.target.value)}/>
                    <div>
                        <p className="pt-6 pb-2">Color</p>

                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setColor("Blue")} > {/*crna, crvena, plava, teget plava, zelena,siva */}
                        Blue
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Navy Blue")}}>
                        Navy Blue
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Red")}}>
                        Red
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Black")}}>
                        Black
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Green")}}>
                        Green
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Gray")}}>
                        Gray
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        <div className="flex flex-row justify-between place-items-center pt-10">

                            <div className="w-full pr-10">
                            <p>Veličina</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                className="flex flex-row justify-center items-center w-full">
                                {size}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="text-center">
                                    <Dropdown.Item  onClick={()=>setSize("S")} >
                                        S
                                    </Dropdown.Item>
                                <Dropdown.Item  onClick={()=>{setSize("M")}}>
                                        M
                                    </Dropdown.Item>
                                    <Dropdown.Item  onClick={()=>{setSize("L")}}>
                                        L
                                    </Dropdown.Item>
                                    <Dropdown.Item  onClick={()=>{setSize("L")}}>
                                        XL
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                                         </Dropdown>
                            </div>
                            
                            <div className="w-full">
                            <p>Količina</p>
                            <Form.Control 
                            className="text-center"
                            size="md" type="number" 
                            required inputMode="numeric" 
                            placeholder="1" min="1" max="20" 
                            onChange={(e)=>setQuantity(e.target.value)}/>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Cijena</h1>
                        <p className="text-4xl font-bold">11 &euro; <span className="text-sm text-gray-400">+poštarina</span> </p>
                        </div>
                        <div className="xxs:w-[50%] md:w-[50%] pt-3">
                        <Button className={longSleeveOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsLongSleeveOpen(true)}>Naruči!</Button>
                     </div>
                    </div>
                </div>
            </div>

           {/* t-shirt item */}

           <h1 className="text-4xl text-white mt-[100px]">Unisex T-Shirt</h1>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]
                "> {/* left side image */}
                <Image src="./images/MOCKUP/T-shirt/WHITE.png" unoptimized alt="t-shirt"
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                <p>Napomena: Fotografija je ilustrativna i može se razlikovati</p>
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

                    <p className="pt-6 flex flex-col">Upiši svoj natpis po želji {"(Opcionalno)"} <span className="text-sm text-gray-400">*Max 12 karaktera</span> </p>

                        <Form.Control size="md" type="text" placeholder="Type here" onChange={(e)=>setText(e.target.value)}/>


                        <p className="pt-6 pb-2">Color</p>
                        <div className="items-center justify-around">   
                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                    {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item href="#/action-1" onClick={()=>setColor("Blue")} > {/*crna, crvena, plava, teget plava, zelena, siva */}
                        Blue
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Navy Blue")}}>
                        Navy Blue
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
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Black")}}>
                        Black
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        </div>

                        <div className="flex flex-row justify-between place-items-center pt-10">

                        <div className="w-full pr-10">
                            <p>Veličina</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                className="flex flex-row justify-center items-center w-full">
                                {size}
                                </Dropdown.Toggle>

                                <Dropdown.Menu className="text-center">
                                    <Dropdown.Item  onClick={()=>setSize("S")} >
                                        S
                                    </Dropdown.Item>
                                <Dropdown.Item onClick={()=>{setSize("M")}}>
                                        M
                                    </Dropdown.Item>
                                    <Dropdown.Item  onClick={()=>{setSize("L")}}>
                                        L
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={()=>{setSize("L")}}>
                                        XL
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                                         </Dropdown>
                            </div>
                            
                            <div className="w-full">
                            <p>Količina</p>
                            <Form.Control 
                            className="text-center"
                            size="md" type="number" 
                            required inputMode="numeric" 
                            placeholder="1" min="1" max="20" 
                            onChange={(e)=>setQuantity(e.target.value)}/>
                            </div>
                           
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Cijena</h1>
                        <p className="text-4xl font-bold">8 &euro; <span className="text-sm text-gray-400">+poštarina</span> </p>
                        </div>
                        <div className="xxs:w-[50%] md:w-[50%] pt-3">
                        <Button className={isTshirtOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsTshirtOpen(true)}>Naruči!</Button>
                     </div>
                    </div>


                    
                </div>

                
            </div>


            {/* man cap item */}

           <h1 className="text-4xl text-white mt-[100px]">Unisex Kape</h1>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center pb-5
            xxs:flex-col xxs:w-full
            md:flex-row h-auto"> {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Cap/CAPBLACK.png" unoptimized alt="cap"
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                <p>Napomena: Fotografija je ilustrativna i može se razlikovati</p>
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
                     <Dropdown.Item href="#/action-1" onClick={()=>setColor("Blue")} > {/*bijeli , tamno plavi, plavi, crni ,crveni, tamno sivi, royal plavi */}
                        Blue
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Dark Blue")}}>
                        Dark Blue
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Royal Blue")}}>
                        Royal Blue
                     </Dropdown.Item>
                  <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Red")}}>
                        Red
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Green")}}>
                        Green
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("Gray")}}>
                        Dark Gray
                     </Dropdown.Item>
                     <Dropdown.Item href="#/action-2" onClick={()=>{setColor("White")}}>
                        White
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        </div>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full pt-3 justify-center items-center pr-10">
                            <p className="text-md text-gray-400">*Veličine su univerzalne</p>
                            </div>
                        
                            
                            <div className="w-full">
                            <p>Količina</p>
                            <Form.Control 
                            className="text-center"
                            size="md" type="number" 
                            required inputMode="numeric" 
                            placeholder="1" min="1"
                            onChange={(e)=>setQuantity(e.target.value)}/>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Cijena</h1>
                        <p className="text-4xl font-bold">6 &euro; <span className="text-sm text-gray-400">+poštarina</span> </p>
                        </div>
                        <div className="xxs:w-[50%] md:w-[50%] pt-3">
                        <Button className={isCapOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsCapOpen(true)}>Naruči!</Button>

                     </div>
                    </div>


                    
                </div>

                
            </div>



        </div>
        )
    }