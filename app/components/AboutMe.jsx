import Image from 'next/image';
import '../globals.css';

export default function AboutMe(){
    
    return (
        <div className="mx-auto w-[80%] 
                           xxs:h-auto md:h-auto lg:h-[50vh] xl:h-[60vh]"
        id='aboutMe'>
            <h1 className="text-4xl text-white">Who am I?</h1>
         <div className="mt-2 h-[3px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 xxs:w-full md:w-[50%]"></div>


            <div className="flex justify-between items-center xxs:flex-col md:flex-row">
                <div className="flex justify-start items-center flex-col
                                xxs:w-full xxs:h-auto 
                                md:w-full md:h-[30vh] lg:h-[40vh] lg:w-[70%]"> {/*left side text */}
                
                    <div className='text-white w-full
                    '>
                    <p className='
                    xxs:text-md xxs:mt-5 md:mt-2 lg:mt-10 
                    xxs:h-auto md:h-[40vh]
                    md:text-xl'>
                    Ja sam osoba koja je svoju takozvanu zaradu na tiktoku preusmjerila ka osobama kojima 
                    je svaka pomoć potrebna. Bavim se sa više različitih sportova, imam napisane dvije knjige, 
                    aktivno se bavim nogometom i ribolovom. 
                    <br /> <br />
                    Magistar sporta, fitness instruktor, majstor kineske 
                    borilačke vještine Kung Fu Wu Shu i u slobodno vrijeme se bavim TikTok-om gdje svu zaradu od 
                    prijenosa uživo doniram osobama kojima je to zaista potrebno
                    </p>
                    </div>
                </div>

                <div className="xxs:w-full md:w-[60%] xxs:h-auto md:hidden lg:flex lg:h-[50vh]  items-center
                                xxs:w-full xxs:mt-5"> {/* picture right side */}
                   <Image src="/images/leo.jpg" alt='leo picture'  width={200} height={200} 
                   className='object-contain mx-auto  h-[50vh] pb-5 float-right
                              xxs:h-auto xxs:w-auto
                              md:w-[80%]
                              lg:block lg:max-w-[80%]' />
                </div>
            </div>
        </div>
    )
}