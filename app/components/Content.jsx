import Image from "next/image"

export default function Content(){
    return (
        <div className="w-[80%] mx-auto h-[40vh]">
            <div className="mt-4 border-t-2  w-full"></div>


            <div className="flex w-full items-center 
                            xxs:flex-col xxs:justify-center md:justify-between xxs:h-auto xxs:mt-5
                            md:flex-row md:h-[30vh]">
            <h1 className="text-4xl
                    bg-clip-text text-transparent
                    bg-gradient-to-r from-green-300 via-blue-500 to-purple-600
                    xxs:text-xl
                    md:text-4xl">
                            " Self-confidence is the first <br /> secret of success "
                        </h1>

                        <div className='text-white
                        xxs:text-sm xxs:mt-5 xxs:text-justify xxs:w-full
                        md:w-[60%] md:mt-[200px] md:text-xl'>
                        Vjera u sebe i svoj rad vam donosi uspjeh. Svaki korak naprijed
                         koji napravite, napravite ga sa nadom i vjerujem da je to onaj pravi
                          korak i nikada nećete pasti! Moj životni moto je: " Ne volim da 
                          vjerujem, volim da se uvjerim! ".
                        </div>
                        </div>

        </div>
    )
}