"use client"
import Image from "next/image"
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Checkout from "../components/Checkout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

    
    export default function Shop(){


        const [color,setColor] = useState("Siva");
        const [size,setSize] = useState("S");
        const [position,setPosition] = useState("Prednja");
        const [textHodie, setHodieText] = useState("");
        const [tshirtText, setTshirtText] = useState("");
        const [longSleveText, setLongSleveText] = useState("");
        
        const [open,setIsOpen] = useState(false);
        const [longSleeveOpen, setIsLongSleeveOpen] = useState(false);
        const [isCapOpen, setIsCapOpen] = useState(false);
        const [isTshirtOpen, setIsTshirtOpen] = useState(false);
        const [perfume, setPerfum] = useState("Unisex");
        const [perfumeOpen, setIsPerfumOpen] = useState(false);
        const hodiePrice = 18;
        const tshirtPrice = 8;
        const longShirtPrice = 12;
        const perfumePrice = 6;
        const shipping = 6;
        const capPrice = 6;
       
        
    return (
        <div className="w-[80%] mx-auto min-h-[100vh]">

        <h1 className="text-white text-5xl pt-20">Moj shop</h1>
        <div className="mt-4 border-t-2  w-full pb-20"></div>

                
            <h1 className="text-5xl text-white md:mb-[-50px]">Parfemi</h1>

            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> 
            {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/parfume.png" alt="perfum" unoptimized
                width={100} height={100} className="w-auto flex justify-center items-center max-h-[50vh]"/>
                <p className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center p-3">
                    Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </div>

               
                <div className="mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"> {/* right side options */}

                    <div className="text-justify break-normal">
                        <h1 className="text-white text-md pb-2">Opis: </h1>
                        <div>
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        UNISEX guess the smell:

                        Ovaj parfem je dizajniran za oba spola i karakterizira ga misteriozan miris 
                        koji potiče na igru pogađanja. Nudi jedinstvenu kombinaciju cvjetnih i drvenih nota 
                        koje stvaraju osvježavajući, ali intrigantan dojam.</span>
                        <br /> <br />
                        <span className="bg-clip-text text-transparent
                         bg-gradient-to-r from-fuchsia-500 to-cyan-500">WOMEN secret:
                        Predstavlja sofisticiranu i senzualnu mirisnu 
                        kompoziciju. Ovo je elegantan spoj cvjetnih i voćnih nota, stvarajući miris 
                        koji ističe ženstvenost i privlačnost.</span>

                        <br /> <br />
                        <span className="bg-gradient-to-r from-teal-400 to-yellow-200 bg-clip-text text-transparent">
                        MAN secret:
                        Parfem za muškarce izražava snažnu i samopouzdanu aromu. 
                        Sastoji se od drvenih, začinskih i citrusnih nota koje zajedno stvaraju 
                        muževan i privlačan miris, odgovarajući za svakodnevnu upotrebu. </span>
                        </div>

                        <p className="pt-6 pb-2">Parfem</p>

                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {perfume}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item  onClick={()=>setPerfum("Unisex")} >
                        Unisex
                     </Dropdown.Item>
                  <Dropdown.Item  onClick={()=>{setPerfum("Woman Secret")}}>
                        Woman Secret
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setPerfum("Men Secret")}}>
                        Men Secret
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

            <h1 className="mt-5 ">Sadržaj: <br />20ml</h1>

                        <div>
                        <h1 className="text-lg pt-5">Cijena</h1>
                        <p className="text-4xl font-bold">6 &euro;  <span className="text-sm text-gray-400">+ poštarina</span> </p>
                        <p className="font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">Promotivna cijena!!!</p>
                        </div>
                        <div className={perfumeOpen ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={perfumeOpen ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(perfumePrice+shipping),
                    perfume: perfume,
                }} /> 
                  <button className="py-2 bg-white text-black w-full font-bold" onClick={()=>setIsPerfumOpen(false)}>ODUSTANI</button>
                  </div>
                    
                        <Button className={perfumeOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsPerfumOpen(true)}>
                        Naruči ovdje!</Button>
                     </div>
                    </div>
                 </div>
            </div>

            <h1 className="text-5xl pt-20 pb-5 text-white">
                Unisex Dukserice</h1>

            <div className="text-white w-[70%] h-[50vh] flex  items-center
                            xxs:flex-col xxs:w-full
                            md:flex-row h-auto"> 
                            {/* card item parent */}



                            {/* finish */}

                <div className="flex justify-center items-center flex-col
                                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Hoodie/grey.png" unoptimized alt="hoddie"
                width={100} height={100} className="flex w-auto justify-center items-center max-h-[60vh]"/>
                <p className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center p-4">
                    Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </div>
                <div className="mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"> {/* right side options */}

                        <p className="pb-4 text-white">Izaberi stranu natpisa {"(naprijed ili nazad)"}</p>

                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {position}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item onClick={()=>setPosition("Prednja")} >
                        Prednja {"(natpis na prednjoj strani)"}
                     </Dropdown.Item>
                  <Dropdown.Item onClick={()=>{setPosition("Zadnja")}}>
                        Zadnja {"(natpis na leđima)"}
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        <p className="pt-6 flex flex-col">Upiši svoj natpis po želji {"(Opcionalno)"} <span className="text-sm text-gray-400">*Max 12 karaktera</span> </p>
                        <Form.Control size="md" type="text"  placeholder="Type here" maxLength="12" onChange={(e)=>setHodieText(e.target.value)}/>
                        
                        <p className="pt-4">Boja</p>
                        <div className="items-center justify-around">   
                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item onClick={()=>setColor("Plava")} > {/*crna crvena plava teget plava zelena siva */}
                        Plava
                     </Dropdown.Item>
                  <Dropdown.Item  onClick={()=>{setColor("Navy Plava")}}>
                        Navy Plava
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Crna")}}>
                        Crna
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Zelena")}}>
                        Zelena
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Siva")}}>
                        Siva
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Crvena")}}>
                        Crvena
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        <div className="flex flex-row justify-between items-center pt-10">

                            <div className="w-full pr-10">
                            <p>Veličina</p>
                           
                                        <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                className="flex flex-row justify-center items-center w-[50%]">
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
                            
                              </div>

                        <div>
                        <h1 className="text-lg pt-10">Cijena</h1>
                        <p className="text-4xl font-bold text-white">18 &euro; <span className="text-sm text-gray-400">+ poštarina</span></p>
                        </div>
                    </div>
                    <div className={open ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={open ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(hodiePrice+shipping),
                    color: color,
                    position: position,
                    clothes: "Dukserica",
                    text: textHodie,
                    size: size
                }} /> 
                  <button className="py-2 bg-white text-black w-full font-bold" onClick={()=>setIsOpen(false)}
                  >ODUSTANI</button>
                  </div>
                    
                        <Button className={open ? "hidden" : "flex items-center px-3"} onClick={()=>setIsOpen(true)}>
                        Naruči ovdje!</Button>
                     </div>
                </div>
            </div>

            {/* long sleeve t-shirt item */}
            <h1 className="text-5xl mt-[100px] text-white">Unisex Majice Dugih Rukava</h1>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Long_sleeve/green.png" alt="long sleeve" unoptimized
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                <p className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center p-4">
                    Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </div>
              
                    
                <div className="mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"> {/* right side options */}


                <p className="pt-6 flex flex-col">Upiši svoj natpis po želji {"(Opcionalno)"} <span className="text-sm text-gray-400">*Max 12 karaktera</span> </p>
                        <Form.Control size="md" type="text" placeholder="Type here" onChange={(e)=>setLongSleveText(e.target.value)}/>
                    <div>
                        <p className="pt-6 pb-2">Boja</p>

                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item onClick={()=>setColor("Plava")} > {/*crna, crvena, plava, teget plava, zelena,siva */}
                        Plava
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Navy Plava")}}>
                        Navy Plava
                     </Dropdown.Item>
                  <Dropdown.Item onClick={()=>{setColor("Crvena")}}>
                        Crvena
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Crna")}}>
                        Crna
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Zelena")}}>
                        Zelena
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Siva")}}>
                        Siva
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        <div className="flex flex-row justify-between place-items-center pt-10">

                            <div className="w-full pr-10">
                            <p>Veličina</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                className="flex flex-row justify-center items-center w-[50%]">
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
                            
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Cijena</h1>
                        <p className="text-4xl font-bold">12 &euro; <span className="text-sm text-gray-400">+poštarina</span> </p>
                        </div>
                        </div>
                        <div className={longSleeveOpen ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={longSleeveOpen ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(longShirtPrice+shipping),
                    color: color,
                    clothes: "Dugi rukav",
                    text: longSleveText,
                    size: size
                }} /> 
                  <button className="py-2 bg-white text-black w-full font-bold" onClick={()=>setIsLongSleeveOpen(false)}>ODUSTANI</button>
                  </div>

                        <Button className={longSleeveOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsLongSleeveOpen(true)}>Naruči ovdje!</Button>
                     </div>
                    </div>
            </div>

           {/* t-shirt item */}

           <h1 className="text-5xl mt-[100px]
           text-white">Unisex T-Shirt</h1>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]
                "> {/* left side image */}
                <Image src="/images/MOCKUP/T-shirt/RED.png" unoptimized alt="t-shirt"
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                <p className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center p-4">
                    Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </div>

                  <div className="mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"> {/* right side options */}

                    <p className="pt-6 flex flex-col">Upiši svoj natpis po želji {"(Opcionalno)"} <span className="text-sm text-gray-400">*Max 12 karaktera</span> </p>

                        <Form.Control size="md" type="text" placeholder="Type here" onChange={(e)=>setText(e.target.value)}/>


                        <p className="pt-6 pb-2">Boja</p>
                        <div className="items-center justify-around">   
                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                    {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item  onClick={()=>setColor("Plava")} > {/*crna, crvena, plava, teget plava, zelena, siva */}
                        Plava
                     </Dropdown.Item>
                     <Dropdown.Item onClick={()=>{setColor("Navy Plava")}}>
                        Navy Plava
                     </Dropdown.Item>
                  <Dropdown.Item  onClick={()=>{setColor("Crvena")}}>
                        Crvena
                     </Dropdown.Item>
                     <Dropdown.Item onClick={()=>{setColor("Zelena")}}>
                        Zelena
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Siva")}}>
                        Siva
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Crna")}}>
                        Crna
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        <div className="flex flex-row justify-between place-items-center pt-10">

                        <div className="w-full pr-10">
                            <p>Veličina</p>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic"
                                className="flex flex-row justify-center items-center w-[50%]">
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
                            
                           
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Cijena</h1>
                        <p className="text-4xl font-bold">8 &euro; <span className="text-sm text-gray-400">+poštarina</span> </p>
                        </div>
                        </div>
                        <div className={isTshirtOpen ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={isTshirtOpen ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(tshirtPrice+shipping),
                    color: color,
                    clothes: "T-Shirt",
                    text: tshirtText,
                    size: size
                }} /> 
                  <button className="py-2 bg-white text-black w-full font-bold" onClick={()=>setIsTshirtOpen(false)}>ODUSTANI</button>
                  </div>
                    
                        <Button className={isTshirtOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsTshirtOpen(true)}>
                        Naruči ovdje!</Button>
                     </div>
                    </div>
            </div>


            {/* man cap item */}

           <h1 className="text-5xl text-white mt-[100px]">Unisex Kape</h1>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center pb-5
            xxs:flex-col xxs:w-full
            md:flex-row h-auto"> {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Cap/CAPBLACK.png" unoptimized alt="cap"
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                <p className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center p-4">
                    Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </div>

               
      <div className="mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"> {/* right side options */}

                        <p className="pt-6 pb-2">Boja</p>
                        <div className="items-center justify-around">
                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                    {color}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item  onClick={()=>setColor("Plava")} > {/*bijeli , tamno plavi, plavi, crni ,crveni, tamno sivi, royal plavi */}
                        Plava
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Navy Plava")}}>
                        Navy Plava
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Royal Plava")}}>
                        Royal Plava
                     </Dropdown.Item>
                  <Dropdown.Item  onClick={()=>{setColor("Crvena")}}>
                        Crvena
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Zelena")}}>
                        Zelena
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Tamno Siva")}}>
                        Tamno Siva
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setColor("Bijela")}}>
                        Bijela
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full pt-3 justify-center items-center pr-10">
                            <p className="text-md text-gray-400">*Veličine su univerzalne</p>
                            </div>
                        
                        
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Cijena</h1>
                        <p className="text-4xl font-bold">6 &euro; <span className="text-sm text-gray-400">+poštarina</span> </p>
                        </div>
                        <div className={isCapOpen ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={isCapOpen ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(capPrice+shipping),
                    color: color,
                    clothes: "Kapa"
                }} /> 
                  <button className="py-2 bg-white text-black w-full font-bold" onClick={()=>setIsCapOpen(false)}>ODUSTANI</button>
                  </div>
                    
                        <Button className={isCapOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsCapOpen(true)}>
                        Naruči ovdje!</Button>
                     </div>
                </div>
                    </div>
                
            </div>



        </div>
        )
    }