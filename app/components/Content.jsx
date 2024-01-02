import Image from "next/image"

export default function Content(){
    return (
        <div className="w-[80%] mx-auto h-[80vh]">
            <h1 className="text-white text-2xl">Some of my content</h1>
            <div className="mt-4 border-t-2  w-full"></div>

            <div className="flex justify-center items-center">

            <div className="w-[50%] flex flex-row h-[60vh]"> {/* picture left side */}
                   <Image src="/images/leo2.jpg" alt="leo_picture" width={150} height={150} 
                   className='object-contain mx-auto h-[35vh] w-full mt-10' />
                   <Image src="/images/leo2.jpg" alt="leo_picture" width={150} height={150} 
                   className='object-contain mx-auto h-[35vh] w-full mt-[200px]' />

                </div>


                <div className="w-[50%] h-[50vh] flex justify-center flex-col"> {/*right side text */}
                    <div className="mx-auto flex flex-col justify-center items-center w-[80%]">
                        <h1 className="text-4xl text-white ">
                            " Self-confidence is the first <br /> secret of success "
                        </h1>

                        <div className='text-white w-[80%] mt-10 '>
                        Vjera u sebe i svoj rad vam donosi uspjeh. Svaki korak naprijed
                         koji napravite, napravite ga sa nadom i vjerujem da je to onaj pravi
                          korak i nikada nećete pasti! Moj životni moto je: " Ne volim da 
                          vjerujem, volim da se uvjerim! ".
                        </div>

                    </div>
                </div>

                
            </div>
        </div>
    )
}