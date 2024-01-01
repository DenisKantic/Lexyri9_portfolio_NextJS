import Image from 'next/image';
import '../globals.css';

export default function AboutMe(){
    return (
        <div className="mx-auto w-[80%] h-[60vh] overflow-hidden">
            <div className="flex justify-center items-center">
                <div className="w-[40%] h-[50vh] flex justify-center flex-col"> {/*left side text */}
                    <h1 className="text-4xl text-white">Who am I?</h1>
                    <div className="mt-2 border-t-2  w-[80%]"></div>

                    <div className='text-white w-[80%] mt-10'>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Unde eum hic error, ratione 
                        dignissimos perferendis quas veritatis voluptate atque aspernatur eius assumenda illum, expedita modi. Tempora exercitationem iure quidem
                         repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim earum, quas veniam est aperiam officia.
                    </div>
                </div>

                <div className="w-[60%]"> {/* picture right side */}
                   <Image src="/images/leo2.jpg" alt='leo picture'  width={200} height={200} className='object-contain mx-auto h-[40vh] w-full' />
                   <p className='text-white text-xl'>add different picture</p>
                </div>
            </div>
        </div>
    )
}