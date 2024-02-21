"use client"
import Image from "next/image"
import { useState, useEffect, useRef } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Checkout from "../components/Checkout";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {motion, useInView, useAnimation} from 'framer-motion'
import 'bootstrap/dist/css/bootstrap.css'
import Carousel from 'react-bootstrap/Carousel';


    
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
        const [stickers, setStickers] = useState("Sticker 1");
        const [stickerOpen, isStickerOpen] = useState(false)
        const hodiePrice = 18;
        const tshirtPrice = 8;
        const longShirtPrice = 12;
        const perfumePrice = 6;
        const capPrice = 6;
        const stickerPrice = 6;

        const refTitle = useRef(null);
        const isTitleInView = useInView(refTitle, {once: true});
        const animationControls = useAnimation();
    
      
        useEffect(() => {
      
          if (isTitleInView) {
            animationControls.start(
            {
                x: 0,
                opacity: 1
            })
            console.log(isTitleInView)
        }
      }, [isTitleInView, animationControls]);
      
       
        
    return (
        <div className="w-[80%] mx-auto min-h-[100vh] pt-5">

        <motion.h1 className="text1 text-white xxs:pt-5 xxs:text-3xl md:text-5xl md:pt-20"
        initial={{opacity: 0, x:-200}}
        animate={{opacity:1, x:0}}
        transition={{duration: 0}}
        >
        Moj shop
        </motion.h1>
        <motion.div className="mt-4 h-[3px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-full mb-5"
            initial={{opacity: 0, x:-200}}
            animate={{opacity:1, x:0}}
            transition={{duration: 1}}></motion.div>


        <motion.div className="text2 text-white xxs:text-sm md:text-xl text-start break-normal mx-start pb-10 flex flex-col justify-start items-start
                         xxs:w-full"
                        initial={{opacity: 0, x:-400}}
                        animate={{opacity:1, x:0}}
                        transition={{duration: 0}}
                       >
<div className="break-normal">Kupovinom ovih proizvoda društveno ste odgovorni i direktno podržavate zapošljavanje osoba
sa invaliditetom.. Svi proizvodi su napravljeni od strane <span className="text-yellow-400 font-bold">INTRAG d.o.o za profesionalnu rehabilitaciju i zapošljavanje osoba sa invaliditetom.</span>
            </div>  <br />                    
            <h2>Dragi kupci,
            Želimo vam olakšati proces naručivanja naših proizvoda. Svoje omiljene proizvode
            možete naručiti na tri jednostavna načina:</h2>
            <br />
           <p className="text-red-700 font-bold xxs:text-xl sm:text-2xl">1. Paypal narudžba:</p>
           <br />

           <p className="text-justify break-normal">Želimo vas obavijestiti da ukoliko plaćate automatski PayPal aplikacijom će vam
                nakon odabranih proizvoda i uplate za iste stići potvrda narudžbe na vašu e-mail
                adresu, zajedno s informacijama o ukupnoj cijeni narudžbe i troškovima dostave.
                Cijena dostave zavisi od težine vaše narudžbe i države iz koje poručujete. Ukoliko
                vam ukupna cijena sa poštarinom ne bude odgovarala povrat novca se automatski
                izvršava na vaš PayPal račun sa kojeg ste izvršili uplatu kada odbijete narudžbu.
            </p>
            <br />

            <p className="text-red-700 font-bold xxs:text-xl sm:text-2xl">2. Narudžba putem e-mail:</p>
            <br />
            <p className="text-justify break-normal">Samo pošaljite e-mail na <span className="text-yellow-400 font-bold">orders@lexyri9.com</span>, navedite koje proizvode želite
            naručiti {"( proizvod, veličina, boja i natpis )"} i ostavite nam vaše kontakt informacije.</p>

            <br />
            <p className="text-red-700 font-bold xxs:text-xl sm:text-2xl">3. Narudžba putem Facebook stranice:</p>
            <br />
            <p className="text-justify break-normal">Posjetite našu Facebook stranicu <a className="text-yellow-400 font-bold" href="https://www.facebook.com/lexyri9webshop" target="_blank">Lexyri9 FB Shop</a> i pošaljite nam poruku s
popis           popisom proizvoda koje želite naručiti. Naš tim će odmah obraditi vašu narudžbu.</p>

            <p className="pt-3">U slučaju tehničkih problema prilikom kupovine putem paypal opcije, obratite se na mail: <br /> <span className="text-yellow-400 font-bold">support@lexyri9.com</span></p>
        </motion.div>

                
            <motion.h2 className="text-5xl text-white md:mb-[-50px] mt-5"
                initial={{opacity: 0, x:-200}}
                animate={{opacity: 1, x:0}}
                transition={{duration: 0.8}}>
                    Parfemi
                    </motion.h2>

            <div className="text-white w-full h-[50vh] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> 
            {/* card item parent */}

                <motion.div className="flex justify-center items-center flex-col
                xxs:w-full xxs:pt-10 md:pt-2 md:w-[50%]"
                initial={{opacity: 0, x:-200}}
                animate={{opacity: 1, x:0}}
                transition={{duration: 0.8}}
                > {/* left side image */}
                <Image 
                src="/images/perfume.webp" 
                alt="parfem parfemi lexyri9 shop" 
                unoptimized
                width={100} height={100} 
                className="w-auto flex justify-center items-center max-h-[50vh]"/>
                <p className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center p-3">
                    Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </motion.div>

               
                <motion.div className="mx-auto xxs:w-full md:text-sm lg:text-lg md:w-[45%] overflow-hidden"
                 initial={{opacity: 0, x:-400}}
                 animate={{opacity: 1, x:0}}
                 transition={{duration: 1}}> {/* right side options */}

                    <div className="text-justify break-normal">
                        <p className="text-white text-md pb-2">Opis: </p>
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

            <p className="mt-5 ">Količina: <br />20ml</p>

                        <div>
                        <p className="text-lg pt-5">Cijena</p>
                        <p className="text-4xl font-bold">6 &euro;</p>
                        <p className="font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">Promotivna cijena!!!</p>
                        </div>
                        <div className={perfumeOpen ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={perfumeOpen ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(perfumePrice),
                    perfume: perfume,
                    text: ""
                }} /> 
                  <button className="py-2 bg-white text-black w-full font-bold" onClick={()=>setIsPerfumOpen(false)}>ODUSTANI</button>
                  </div>
                    
                        <Button className={perfumeOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsPerfumOpen(true)}>
                        Naruči ovdje!</Button>
                     </div>
                    </div>
                 </motion.div>
            </div>

            {/* ********************************88 START *************************/}

            <motion.h2 className="text-5xl text-white md:mb-[-50px] mt-5"
                initial={{opacity: 0, x:-200}}
                animate={{opacity: 1, x:0}}
                transition={{duration: 0.8}}>
                    Naljepnice
                    </motion.h2>

            <div className="text-white w-full h-[50vh] flex h-auto items-center mt-10 overflow-hidden
            xxs:flex-col xxs:w-full
            md:flex-row"> 
            {/* card item parent */}

                <motion.div className="flex justify-center items-start flex-col mt-10 
                xxs:w-full xxs:pt-10 md:pt-2 md:w-[50%]"
                initial={{opacity: 0, x:-200}}
                animate={{opacity: 1, x:0}}
                transition={{duration: 0.8}}
                > {/* left side image */}
                <div
                className="w-full flex justify-start items-start h-[50vh]">
                   <Carousel className="w-full h-[50vh]">
                     <Carousel.Item className="w-full h-full">
                        <Image 
                        src="/images/sticker1.jpg"
                        height={100}
                        width={100}
                        className="w-full h-[50vh] relative object-cover"
                        alt="sticker1"
                        />
                        <p className="text-center text-xl pt-2">Sticker 1</p>
                     </Carousel.Item>
                     
                     <Carousel.Item className="w-full h-full overflow-hidden">
                        <Image 
                        src="/images/sticker2.jpg"
                        height={100}
                        width={100}
                        className="w-full h-[50vh] relative object-cover"
                        alt="sticker1"
                        />
                        <p className="text-center text-xl pt-2">Sticker 2</p>
                     </Carousel.Item>

                     <Carousel.Item className="w-full h-full overflow-hidden">
                        <Image 
                        src="/images/sticker3.jpg"
                        height={100}
                        width={100}
                        className="w-full h-[50vh] relative object-cover"
                        alt="sticker1"
                        />
                        <p className="text-center text-xl pt-2">Sticker 3</p>
                     </Carousel.Item>

                     <Carousel.Item className="w-full h-full overflow-hidden">
                        <Image 
                        src="/images/sticker4.jpg"
                        height={100}
                        width={100}
                        className="w-full h-[50vh] relative object-contain "
                        alt="sticker1"
                        />
                        <p className="text-center text-xl pt-2">Sticker 4</p>
                     </Carousel.Item>

                     <Carousel.Item className="w-full h-full overflow-hidden">
                        <Image 
                        src="/images/sticker5.jpg"
                        height={100}
                        width={100}
                        className="w-full h-[50vh] relative object-contain"
                        alt="sticker1"
                        />
                     </Carousel.Item>

                 </Carousel>
                </div>
                </motion.div>

               
                <motion.div className="mx-auto xxs:w-full md:text-sm lg:text-lg md:w-[40%] overflow-hidden"
                 initial={{opacity: 0, x:-400}}
                 animate={{opacity: 1, x:0}}
                 transition={{duration: 1}}> {/* right side options */}

                    <div className="text-justify break-normal">
                        <p className="text-white text-md pb-2">Opis: </p>
                        <div>
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        test
                        </span>

                        <p className="pt-6 pb-2">Naljepnice</p>
                    </div>

                        <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic"
                  className="flex flex-row justify-start items-center w-full">
                   {stickers}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                     <Dropdown.Item  onClick={()=>setStickers("Sticker 1")} >
                        Sticker 1
                     </Dropdown.Item>
                  <Dropdown.Item  onClick={()=>{setStickers("Sticker 2")}}>
                        Sticker 2 
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setStickers("Sticker 3")}}>
                        Sticker 3 
                     </Dropdown.Item>
                     <Dropdown.Item  onClick={()=>{setStickers("Sticker 4")}}>
                        Sticker 4
                     </Dropdown.Item>
                  </Dropdown.Menu>
            </Dropdown>

                        <div>
                        <p className="text-lg pt-5">Cijena</p>
                        <p className="text-4xl font-bold">6 &euro;</p>
                        <p className="font-bold bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent">Promotivna cijena!!!</p>
                        </div>
                        <div className={stickerOpen ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={stickerOpen ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(stickerPrice),
                    perfume: stickers,
                    text: ""
                }} /> 
                  <button className="py-2 bg-white text-black w-full font-bold" onClick={()=>isStickerOpen(false)}>ODUSTANI</button>
                  </div>
                    
                        <Button className={stickerOpen ? "hidden" : "flex items-center px-3"} onClick={()=>isStickerOpen(true)}>
                        Naruči ovdje!</Button>
                     </div>
                    </div>
                 </motion.div>
            </div>
                
                {/************************************************* END *************************** */}

            <motion.h3 className="text-5xl pt-20 pb-5 text-white"
            initial={{opacity: 0, x:-200}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 2}}>
                Unisex Dukserice
                </motion.h3>

            <div className="text-white w-[70%] h-[50vh] flex  items-center
                            xxs:flex-col xxs:w-full
                            md:flex-row h-auto"> 
                            {/* card item parent */}



                            {/* finish */}

                <motion.div className="flex justify-center items-center flex-col
                                xxs:w-full md:w-[50%]"
                                ref={refTitle}
                initial={{opacity: 0, x:-200}}
                animate={{opacity: 1, x:0}}
                transition={{duration: 0.8}}> {/* left side image */}
                <Image src="/images/MOCKUP/Hoodie/grey.webp" unoptimized alt="dukserice lexyri9 shop"
                width={100} height={100} className="flex w-auto justify-center items-center max-h-[60vh]"/>
                <p className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center p-4">
                    Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </motion.div>
                <motion.div className="mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"
                 initial={{opacity: 0, x:-400}}
                 animate={{opacity: 1, x:0}}
                 transition={{duration: 1}}> {/* right side options */}

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

                        <p className="pt-6 flex flex-col">Upiši svoj natpis po želji za print {"(Opcionalno)"} <span className="text-sm text-gray-400">*Max 12 karaktera</span> </p>
                        <Form.Control size="md" type="text"  placeholder="Upiši ovdje" maxLength="12" onChange={(e)=>setHodieText(e.target.value)}/>
                        
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
                                    <Dropdown.Item onClick={()=>{setSize("XL")}}>
                                        XL
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                                         </Dropdown>
                            </div>
                            
                              </div>

                        <div>
                        <p className="text-lg pt-10">Cijena</p>
                        <p className="text-4xl font-bold text-white">18 &euro;</p>
                        </div>
                    </div>
                    <div className={open ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={open ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(hodiePrice),
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
                </motion.div>
            </div>


            {/* ______________________________________________________________________________________ */}

            
            

            {/* long sleeve t-shirt item */}
            <motion.h4 className="text-5xl mt-[100px] text-white"
            initial={{opacity: 0, x:-200}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 0.8}}
            >Unisex Majice Dugih Rukava</motion.h4>
            <div className="text-white w-[70%] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Long_sleeve/green.webp" alt="majice dugih rukava lexyri9 shop" unoptimized
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                <p className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center p-4">
                    Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </div>
              
                    
                <motion.div className="mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"
                 initial={{opacity: 0, x:-400}}
                 animate={{opacity: 1, x:0}}
                 transition={{duration: 1}}> {/* right side options */}

                 
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

                        <p className="pt-6 flex flex-col">Upiši svoj natpis po želji za print {"(Opcionalno)"} <span className="text-sm text-gray-400">*Max 12 karaktera</span> </p>
                        <Form.Control size="md" type="text"  placeholder="Upiši ovdje" maxLength="12" onChange={(e)=>setLongSleveText(e.target.value)}/>
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
                                    <Dropdown.Item  onClick={()=>{setSize("XL")}}>
                                        XL
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                                         </Dropdown>
                            </div>
                            
                        </div>

                        <div>
                        <p className="text-lg pt-10">Cijena</p>
                        <p className="text-4xl font-bold">12 &euro; </p>
                        </div>
                        </div>
                        <div className={longSleeveOpen ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={longSleeveOpen ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(longShirtPrice),
                    color: color,
                    position: position,
                    text: longSleveText,
                    clothes: "Dugi rukav",
                    text: longSleveText,
                    size: size
                }} /> 
                  <button className="py-2 bg-white text-black w-full font-bold" onClick={()=>setIsLongSleeveOpen(false)}>ODUSTANI</button>
                  </div>

                        <Button className={longSleeveOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsLongSleeveOpen(true)}>Naruči ovdje!</Button>
                     </div>
                    </motion.div>
            </div>

           {/* t-shirt item */}

           <motion.h5 className="text-5xl mt-[100px]
           text-white"
           initial={{opacity: 0, x:-200}}
                animate={{opacity: 1, x:0}}
                transition={{duration: 0.8}}
                >Unisex T-Shirt</motion.h5>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center
            xxs:flex-col xxs:w-full
            md:flex-row"> {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]
                "> {/* left side image */}
                <Image src="/images/MOCKUP/T-shirt/RED.webp" unoptimized alt="t-shirt majice lexyri9 shop" priority={false}
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                <p className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center p-4">
                    Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </div>

                  <motion.div className="mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"
                   initial={{opacity: 0, x:-400}}
                   animate={{opacity: 1, x:0}}
                   transition={{duration: 1}}> {/* right side options */}

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

<p className="pt-6 flex flex-col">Upiši svoj natpis po želji za print {"(Opcionalno)"} <span className="text-sm text-gray-400">*Max 12 karaktera</span> </p>
<Form.Control size="md" type="text"  placeholder="Upiši ovdje" maxLength="12" onChange={(e)=>setTshirtText(e.target.value)}/>


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
                                    <Dropdown.Item onClick={()=>{setSize("XL")}}>
                                        XL
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                                         </Dropdown>
                            </div>
                            
                           
                        </div>

                        <div>
                        <p className="text-lg pt-10">Cijena</p>
                        <p className="text-4xl font-bold">8 &euro; </p>
                        </div>
                        </div>
                        <div className={isTshirtOpen ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={isTshirtOpen ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(tshirtPrice),
                    color: color,
                    position: position,
                    text: tshirtText,
                    clothes: "T-Shirt",
                    text: tshirtText,
                    size: size
                }} /> 
                  <button className="py-2 bg-white text-black w-full font-bold" onClick={()=>setIsTshirtOpen(false)}>ODUSTANI</button>
                  </div>
                    
                        <Button className={isTshirtOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsTshirtOpen(true)}>
                        Naruči ovdje!</Button>
                     </div>
                    </motion.div>
            </div>


            {/* man cap item */}

           <motion.h6 className="text-5xl text-white mt-[100px]"
           initial={{opacity: 0, x:-200}}
           animate={{opacity: 1, x:0}}
           transition={{duration: 0.8}}
           >Unisex Kape</motion.h6>
            <div className="text-white w-[70%] h-[50vh] flex h-auto items-center pb-5
            xxs:flex-col xxs:w-full
            md:flex-row h-auto"> {/* card item parent */}

                <div className="flex justify-center items-center flex-col
                xxs:w-full md:w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Cap/CAPBLACK.webp" unoptimized alt="kape lexyri9 shop"
                width={100} height={100} className="w-auto h-auto flex justify-center items-center max-h-[60vh]"/>
                <p className="bg-gradient-to-r from-amber-200 to-yellow-500 bg-clip-text text-transparent text-center p-4">
                    Napomena: Fotografija je ilustrativna i može se razlikovati</p>
                </div>

               
      <motion.div className="mx-auto xxs:w-full md:w-[45%] lg:max-w-[35%]"
       initial={{opacity: 0, x:-400}}
       animate={{opacity: 1, x:0}}
       transition={{duration: 1}}> {/* right side options */}

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
                        <p className="text-lg pt-10">Cijena</p>
                        <p className="text-4xl font-bold">6 &euro; </p>
                        </div>
                        <div className={isCapOpen ? "xxs:w-full pt-3" : "xxs:w-[50%] pt-3"}>
                       
                       <div className={isCapOpen ? "w-full" : "hidden"}>
                        <Checkout 
                    items={{ 
                    price:(capPrice),
                    color: color,
                    clothes: "Kapa",
                    text: ""
                }} /> 
                  <button className="py-2 bg-white text-black w-full font-bold" onClick={()=>setIsCapOpen(false)}>ODUSTANI</button>
                  </div>
                    
                        <Button className={isCapOpen ? "hidden" : "flex items-center px-3"} onClick={()=>setIsCapOpen(true)}>
                        Naruči ovdje!</Button>
                     </div>
                </div>
                    </motion.div>
                
            </div>



        </div>
        )
    }