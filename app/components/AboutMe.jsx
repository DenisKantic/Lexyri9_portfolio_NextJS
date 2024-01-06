"use client"
import Image from 'next/image';
import '../globals.css';
import {motion,useAnimation, useInView} from 'framer-motion'
import { useEffect,useRef } from 'react';

export default function AboutMe(){

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
        <div className="mx-auto w-[80%] 
                        h-auto  scroll-smooth pt-10" 
        id='aboutMe' >
            <motion.h1 className="text-5xl text-white pt-20 overflow-y-hidden" ref={refTitle}
             initial={{opacity: 0, x:-200}}
             animate={animationControls}
             transition={{duration: 0.25, ease: 'easeInOut', delay: 0.60}} 
            >Ko sam ja?</motion.h1>
         <motion.div className="mt-4 h-[3px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 xxs:w-full md:w-[50%]" ref={refTitle}
          initial={{opacity: 0, x:-200}}
          animate={{opacity: 1, x:0}}
          transition={{type: "Tween", delay: 0.4}}
         ></motion.div>


            <motion.div className="flex justify-between items-center xxs:flex-col md:flex-row" ref={refTitle}
             initial={{opacity: 0, x:-400}}
             animate={{opacity: 1, x:0}}
             transition={{duration: 0.8}}>
                <motion.div className="flex justify-start items-center flex-col
                                xxs:w-full xxs:h-auto
                                md:w-full  mb-5 lg:w-[70%]"
                                ref={refTitle}
                                initial={{opacity: 0, x:-200}}
             animate={animationControls}
             transition={{duration: 0.8}}> {/*left side text */}
                
                    <div className='text-white w-full
                    '>
                    <p className='
                    xxs:text-md xxs:mt-5 md:mt-2 lg:mt-10
                    xxs:h-auto md:h-auto
                    md:text-xl'>
                    Ja sam osoba koja je svoju takozvanu zaradu na tiktoku preusmjerila ka osobama kojima 
                    je svaka pomoć potrebna. Bavim se sa više različitih sportova, imam napisane dvije knjige, 
                    aktivno se bavim nogometom i ribolovom. 
                    <br /> <br />
                    Magistar sporta, fitness instruktor, majstor kineske 
                    borilačke vještine Kung Fu Wu Shu i u slobodno vrijeme se bavim TikTok-om gdje svu zaradu od 
                    prijenosa uživo doniram osobama kojima je to zaista potrebno.
                    </p>
                    </div>
                </motion.div>

                <motion.div className="xxs:w-full md:w-[60%] xxs:h-auto md:hidden lg:flex   items-center 
                             xxs:mt-5" ref={refTitle}
                             initial={{opacity: 0, x:-400}}
                             animate={animationControls}
                             transition={{type: "Tween", delay: 0.4}}
                            > {/* picture right side */}
                   <Image src="/images/leo.jpg" alt='leo picture'  width={200} height={200} 
                   className='object-contain mx-auto pb-5 float-right
                              xxs:h-auto xxs:w-auto md:h-[45vh]
                              md:w-[80%]
                              lg:block lg:max-w-[80%]' />
                </motion.div>
            </motion.div>
        </div>
    )
}