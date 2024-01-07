"use client"
import Image from "next/image";
import Link from "next/link";
import {motion, useInView, useAnimation} from 'framer-motion'
import { useEffect,useRef } from "react";

export default function ShopPreview(){

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
        <div className="w-[80%] mx-auto xxs:h-auto mb-5 mt-5" ref={refTitle}>

        <motion.h1 className="text-white pt-5 xxs:text-3xl sm:text-5xl" 
        ref={refTitle}
        initial={{opacity: 0, x:-200}}
            animate={animationControls}
            transition={{duration: 1}}
        >Moj web shop</motion.h1>
        <motion.div 
        className="mt-4 h-[3px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-full"
        initial={{opacity: 0, x:-400}}
            animate={animationControls}
            transition={{duration: 0.8}}
        ></motion.div>


        <motion.div 
        className="text-white pt-10 text-xl w-[50%]
                        xxs:w-full md:w-[90%] lg:w-[80%] text-justify"
                        initial={{opacity: 0, x:-600}}
            animate={animationControls}
            transition={{duration: 1}}
                        >
            <p className="text-white">Kupovinom ovih proizvoda podržavate rad osoba sa invaliditetom i pomažete im da se uključe u društvo. 
            Također doprinosite stvaranju radnih mjesta i poboljšanju kvalitete života osoba s invaliditetom.
             Podstičete senzibilaciju o potrebama i sposobnostima osoba sa invaliditetom.</p> <br />

            <div className="">Svi proizvodi su napravljeni od strane <span className="text-yellow-400">INTRAG d.o.o za profesionalnu rehabilitaciju i zapošljavanje osoba sa invaliditetom.</span>
            <h2 className="py-3 break-normal">Njihove proizvode možete posjetiti na sljedećem linku: </h2>
            <a href="https://www.facebook.com/Intraggiftshop" target="_blank" className="text-md text-red text-gray-800 rounded-xl px-2 py-2 bg-white xxs:mt-3 hover:font-bold">INTRAG d.o.o</a>
            </div>
        
        </motion.div>

        <div className="pt-10 flex justify-between items-center w-full 
                        xxs:flex-col sm:flex-row">
            <motion.div className="flex justify-center items-center flex-col
                            w-[30%] h-auto xxs:w-full md:w-[30%] xxs:mt-5 lg:mt-0 "
                            initial={{opacity: 0, x:-400}}
            animate={animationControls}
            transition={{duration: 1.5}}> {/* card item */}
                <Image src="/images/perfume.png" alt="perfume" unoptimized width={100} height={100}
                className="object-contain xxs:h-auto md:h-[300px] w-auto"
                />
                <p className="text-white text-center w-[50%]">Parfemi: Unisex, Men Secret, Woman Secret</p>
            </motion.div>

            <motion.div className="xxs:mt-5 lg:mt-0 h-auto xxs:h-auto xxs:w-full md:w-[30%] md:h-[300px]
                             flex justify-center items-center flex-col"
                             initial={{opacity: 0, x:-600}}
            animate={animationControls}
            transition={{duration: 1.5}}
            > {/* card item */}
                <Image src="/images/MOCKUP/T-shirt/RED.webp" alt="T-shirt red" unoptimized width={200} height={200}
                className="object-center h-auto w-auto"
                />
                <p className="text-white text-center w-[50%]">Unisex T-Shirt u svim bojama i veličinama</p>

            </motion.div>

            <motion.div className="h-auto xxs:w-full md:w-[30%] xxs:h-auto md:h-[300px] xxs:mt-5 lg:mt-0 flex flex-col justify-center items-center"
            initial={{opacity: 0, x:-800}}
            animate={animationControls}
            transition={{duration: 1.5}}> {/* card item */}
                <Image src="/images/MOCKUP/Long_sleeve/green.webp" alt="long sleeve" unoptimized width={200} height={200}
                className="object-center h-auto w-auto"
                />
              <p className="text-white text-center w-[50%]">Unisex majice dugih rukava u svim bojama i veličinama</p>
            </motion.div>


            
        </div>
            <p className="text-white text-center text-xl mt-5">Pogledaj i ostale proizvode</p>

            <div className="w-full flex justify-center items-center pt-10">
                <Link href="/shop" className="flex justify-center items-center px-4 py-2 rounded-xl text-md bg-white hover:font-bold hover:text-lg">Moj shop</Link>
            </div>
        </div>
    )
}