import Image from 'next/image';
import '../globals.css';

export default function AboutMe(){

    
        
    return (
        <div className="mx-auto w-[80%] 
                        h-auto  scroll-smooth"
        id='aboutMe' >
            <h1 className="text-5xl text-white pt-20">Ko sam ja?</h1>
         <div className="mt-4 h-[3px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 xxs:w-full md:w-[50%]"></div>


            <div className="flex justify-between items-center xxs:flex-col md:flex-row">
                <div className="flex justify-start items-center flex-col
                                xxs:w-full xxs:h-auto
                                md:w-full  mb-5 lg:w-[70%]"> {/*left side text */}
                
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
                </div>

                <div className="xxs:w-full md:w-[60%] xxs:h-auto md:hidden lg:flex   items-center
                             xxs:mt-5"> {/* picture right side */}
                   <Image src="/images/leo.jpg" alt='leo picture'  width={200} height={200} 
                   className='object-contain mx-auto pb-5 float-right
                              xxs:h-auto xxs:w-auto md:h-[45vh]
                              md:w-[80%]
                              lg:block lg:max-w-[80%]' />
                </div>
            </div>
        </div>
    )
}