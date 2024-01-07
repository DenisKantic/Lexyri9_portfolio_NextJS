"use client"
import Image from "next/image"
import {motion,useAnimation,useInView} from 'framer-motion'
import { useEffect,useRef } from "react";

export default function Social(){

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
        <div className="w-[80%] mx-auto h-auto mb-5 scroll-smooth">

            <motion.h1 className="text-5xl text-white" ref={refTitle}
            initial={{opacity: 0, x:-200}}
            animate={animationControls}
            transition={{duration: 0.8}}>
                Nekoliko mojih sadržaja</motion.h1>


             <div className="mt-4 h-[3px] w-full text-transparent bg-text-clip
             bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ">

             </div>
                <motion.div className="flex justify-between items-center mt-10
                                xxs:flex-col sm:flex-row"
                                ref={refTitle}
                                initial={{opacity: 0, x:-900}}
                                animate={{opacity: 1, x:0}}
                                transition={{duration: 1.5}}
                               >

                    <div className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[20%]"
                  > {/*card item */}
            
                        <Image src="/images/mob1.png" alt="instagram lexyri9" unoptimized width={200} height={400}
                        className="h-auto w-full object-contain"/>

                        <a className="px-4 py-2 bg-white rounded-xl
                        flex flex-row items-center justify-center mt-5"
                        href="https://www.instagram.com/lexyri9/" target="_blank">
                            <Image src="/images/insta.png" alt="instagram lexyri9" unoptimized width={30} height={30}/>
                            <h1 className="ml-3 xxs:text-md sm:text-sm md:text-md">@lexyri9</h1>
                        </a>
                        <p className="text-white text-md mt-3 xxs:text-md sm:text-sm md:text-md">4000+ followers</p>
                    </div>

                    <div className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[20%]"> {/*card item */}
                        <Image src="/images/mob2.png" alt="tiktok lexyri9" unoptimized width={200} height={400}
                        className="h-auto w-full object-contain"/>

                        <a className="px-4 py-2 bg-white rounded-xl flex 
                        flex-row items-center justify-center mt-5"
                        href="https://www.tiktok.com/@lexyri9?_t=8ijTV2jh5IU&_r=1" target="_blank">
                            <Image src="/images/tiktok.png" alt="tiktok lexyri9" unoptimized width={30} height={30}/>
                            <h1 className="text-lg ml-3 xxs:text-md sm:text-sm md:text-md">@lexyri9</h1>
                        </a>
                        <p className="text-white  mt-3 text-center xxs:text-md sm:text-sm md:text-md">3M+ likes</p>
                    </div>

                    <div className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[20%]"> {/*card item */}
                        <Image src="/images/mob3.png" alt="youtube lexyri9" unoptimized width={200} height={400}
                        className="h-auto w-full object-contain"/>

                        <a className="px-4 py-2 bg-white rounded-xl flex 
                        flex-row items-center justify-center mt-5"
                        href="https://www.youtube.com/channel/UCznHaNy4Q_4DOdVx7EiCANA" target="_blank">
                            <Image src="/images/youtube.png" alt="lexyri9" unoptimized width={30} height={30}/>
                            <h1 className="text-lg ml-3 xxs:text-md sm:text-sm md:text-md">@lexyri9</h1>
                        </a>
                        <p className="text-white  mt-3 xxs:text-md sm:text-sm md:text-md">1000+ followers</p>
                    </div>

                </motion.div>
        </div>
    )
}