import Image from "next/image";
import Link from "next/link";

export default function ShopPreview(){

    return (
        <div className="w-[80%] mx-auto xxs:h-auto mb-5 mt-5">

        <h1 className="text-white text-5xl pt-5">Moj web shop</h1>
        <div className="mt-4 h-[3px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-full"></div>


        <div className="text-white pt-10 text-xl w-[50%]
                        xxs:w-full md:w-[90%] lg:w-[80%] text-justify">
            <p className="text-white">Kupovinom ovih proizvoda podržavate rad osoba sa invaliditetom i pomažete im da se uključe u društvo. 
            Također doprinosite stvaranju radnih mjesta i poboljšanju kvalitete života osoba s invaliditetom.
             Podstičete senzibilaciju o potrebama i sposobnostima osoba sa invaliditetom.</p> <br />

            <div className="">Svi proizvodi su napravljeni od strane <span className="text-yellow-400">INTRAG d.o.o za profesionalnu rehabilitaciju i zapošljavanje osoba sa invaliditetom.</span>
            <h2 className="py-3 break-normal">Njihove proizvode možete posjetiti na sljedećem linku: </h2>
            <a href="https://www.facebook.com/Intraggiftshop" target="_blank" className="text-md text-red text-gray-800 rounded-xl px-2 py-2 bg-white xxs:mt-3">INTRAG d.o.o</a>
            </div>
        
        </div>

        <div className="pt-10 flex justify-between items-center w-full 
                        xxs:flex-col sm:flex-row">
            <div className="flex justify-center items-center flex-col
                            w-[30%] h-auto xxs:w-full md:w-[30%] xxs:mt-5 lg:mt-0 "> {/* card item */}
                <Image src="/images/parfume.png" alt="hoodie_grey" unoptimized width={100} height={100}
                className="object-contain xxs:h-auto md:h-[300px] w-auto"
                />
                <p className="text-white text-center w-[50%]">Parfemi: Unisex, Men Secret, Woman Secret</p>
            </div>

            <div className="xxs:mt-5 lg:mt-0 h-auto xxs:h-auto xxs:w-full md:w-[30%] md:h-[300px]
                             flex justify-center items-center flex-col"> {/* card item */}
                <Image src="/images/MOCKUP/T-shirt/RED.png" alt="T-shirt blue" unoptimized width={200} height={200}
                className="object-center h-auto w-auto"
                />
                <p className="text-white text-center w-[50%]">Unisex T-Shirt u svim bojama i veličinama</p>

            </div>

            <div className="h-auto xxs:w-full md:w-[30%] xxs:h-auto md:h-[300px] xxs:mt-5 lg:mt-0 flex flex-col justify-center items-center"> {/* card item */}
                <Image src="/images/MOCKUP/Long_sleeve/green.png" alt="long sleeve green" unoptimized width={200} height={200}
                className="object-center h-auto w-auto"
                />
              <p className="text-white text-center w-[50%]">Unisex majice dugih rukava u svim bojama i veličinama</p>
            </div>


            
        </div>
            <h1 className="text-white text-center text-xl mt-5">Pogledaj i ostale proizvode</h1>

            <div className="w-full flex justify-center items-center pt-10">
                <Link href="/shop" className="flex justify-center items-center px-5 py-3 rounded-xl text-md bg-white hover:text-red-400 hover:font-bold">Moj shop</Link>
            </div>
        </div>
    )
}