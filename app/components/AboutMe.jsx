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
            <motion.h1 className="xxs:text-4xl sm:text-5xl text-white pt-20 overflow-y-hidden" ref={refTitle}
             initial={{opacity: 0, x:-200}}
             animate={animationControls}
             transition={{duration: 0.25, ease: 'easeInOut', delay: 0.60}} 
            >Ko sam ja?</motion.h1>
         <motion.div className="mt-4 h-[3px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 xxs:w-full xl:w-[55%]" ref={refTitle}
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
                                md:w-full  mb-5 xl:w-[70%]"
                                ref={refTitle}
                                initial={{opacity: 0, x:-200}}
             animate={animationControls}
             transition={{duration: 0.8}}> {/*left side text */}
                
                    <div className='text-white w-full'>
                    <p className='
                    xxs:text-md xxs:mt-5 md:mt-2 lg:mt-10
                    xxs:h-auto md:h-auto
                    md:text-md text-justify break-normal'>
                    Ja sam strastveni pojedinac koji je usmjerio svoj put ka nesebičnom dijeljenju 
                    svojih resursa. Kroz aktivno učešće na TikToku, gdje sam stvorio svoj kanal, ne 
                    samo da sam stekao podršku i praćenje, već sam i transformisao svoju takozvanu zaradu
                     u sredstvo pomoći onima kojima je to najpotrebnije. 
                    <br /> <br />
                    Pored toga, moj život obuhvataju raznovrsne sportske aktivnosti. Nisam samo 
                    pasionirani igrač nogometa, već se takođe posvećujem ribolovu, pronalazeći mir 
                    i zadovoljstvo u prirodi.

                    <br /> <br />
                    Moj obrazovni put obuhvata titula magistra u oblasti sporta, kao i ulogu fitness 
                    instruktora. Takođe sam majstor kineske borilačke vještine Kung Fu Wu Shu, gdje sam 
                    usavršio svoje vještine i principe samopouzdanja.

                    <br /> <br />
                    Pored toga, napisao sam i izdao dvije knjige koje odražavaju moju duboku misao, pogled na život i ljude oko sebe. 
                    Kroz sve ove aktivnosti, moj cilj je donijeti pozitivne promjene u životima drugih ljudi, pružajući podršku i 
                    pomoć onima kojima je to najpotrebnije. Moja misija je ujediniti ljude da se pomažu međusobno kako bih doprinjeo 
                    boljem svijetu oko nas.
                    </p>
                    </div>
                </motion.div>

                <motion.div className="xxs:w-full xl:w-[60%] xxs:h-auto md:hidden xl:flex   items-center 
                             xxs:mt-5" ref={refTitle}
                             initial={{opacity: 0, x:-400}}
                             animate={animationControls}
                             transition={{type: "Tween", delay: 0.4}}
                            > {/* picture right side */}
                   <Image src="/images/leo.webp" alt='lexyri9 image' priority={false}  width={200} height={200} 
                   className='object-contain mx-auto pb-5 float-right
                              xxs:h-auto xxs:w-auto md:h-[45vh]
                              md:w-[80%]
                              lg:block lg:max-w-[80%]' />
                </motion.div>
            </motion.div>
        </div>
    )
}