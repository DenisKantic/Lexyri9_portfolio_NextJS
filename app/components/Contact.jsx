"use client"
import Image from "next/image"
import {motion,useInView,useAnimation} from 'framer-motion'
import { useEffect,useRef } from "react";


export default function Contact(){

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
    <div className="w-[80%] mx-auto xxs:h-auto mt-5 xxs:mb-10" id="contact">

            <motion.h1 className="text-white text-5xl overflow-hidden"
            ref={refTitle}
            initial={{opacity: 0, x:-200}}
            animate={animationControls}
            transition={{duration: 1}}
            >Kontakt</motion.h1>
            <div className="mt-4 h-[3px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-full"></div>

            <motion.div className="xxs:w-full md:w-[80%] lg:w-[80%] xl:w-[60%] text-white pt-10"
            initial={{opacity: 0, x:800}}
            animate={animationControls}
            transition={{duration: 1.3}}>
            <p className="text-3xl
            bg-clip-text text-transparent
            bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Spremni da napravimo magiju zajedno ?</p>

            <p className="text-lg mt-5 text-justify break-normal w-[80%]">Radujem se mogućnosti buduće saradnje! Za sve saradnje i 
            poslovne upite, slobodno me kontaktirajte putem e-maila  ili direktno putem navedenih socijalnih platformi. Hvala na 
            interesovanju!.</p>

            <div className="grid grid-cols-4 mt-4 w-[90%]">

            <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-[50%]"
                    href="mailto: collaboration@lexyri9.com" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full
                        flex flex-row items-center justify-center">
                            <Image src="/images/gmail.webp" alt="email lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>


            <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-[50%]"
                    href="https://www.instagram.com/lexyri9/" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full
                        flex flex-row items-center justify-center">
                            <Image src="/images/insta.webp" alt="instagram lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>

                    <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-[50%]"
                       href="https://www.tiktok.com/@lexyri9?_t=8ijTV2jh5IU&_r=1" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full flex 
                        flex-row items-center justify-center">
                            <Image src="/images/tiktok.webp" alt="tiktok lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>

                    <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-[50%]"
                    href="https://www.youtube.com/channel/UCznHaNy4Q_4DOdVx7EiCANA" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full flex 
                        flex-row items-center justify-center">
                            <Image src="/images/youtube.webp" alt="lexyri9 youtube" unoptimized width={30} height={30}/>
                        </div>
                    </a>

            </div>
            </motion.div>


    </div>

    )
}
