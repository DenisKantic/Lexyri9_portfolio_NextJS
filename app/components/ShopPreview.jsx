import Image from "next/image";
import Link from "next/link";

export default function ShopPreview(){

    return (
        <div className="w-[80%] mx-auto xxs:h-auto mb-5 mt-5">

        <h1 className="text-white text-2xl">Moj web shop</h1>
        <div className="mt-4 border-t-2  w-full"></div>

        <div className="text-white pt-10 text-xl w-[50%]
                        xxs:w-full md:w-[90%] lg:w-[80%] text-justify">
            <p className="text-white">U mom web shopu svakako možete pronaći za sebe nešto što mu odgovara. Svaki kupljeni artikal
             izravno utječe na poboljšanje rada osoba s invaliditetom, pa tako i vašom kupovinom bilo kojeg proizvoda omogućujete da se još jedna osoba 
            zaposli i uljepšate joj život tako da će se osjećati bitno i odgovorno u današnjem svijetu koji je grub prema 
            njima. Hvala vam na doprinosu.</p> <br />

            <div className="text-red">Svi proizvodi su napravljeni od strane <a href="https://www.facebook.com/Intraggiftshop" target="_blank" className="text-md text-red">INTRAG</a> d.o.o za profesionalnu rehabilitaciju i zapošljavanje osoba sa invaliditetom </div>
        
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
            <h1 className="text-white text-center text-lg mt-5">Pogledaj i ostale proizvode</h1>

            <div className="w-full flex justify-center items-center pt-10">
                <Link href="/shop" className="flex justify-center items-center px-5 py-3 hover:bg-green-400 bg-white rounded-xl text-md">Moj shop</Link>
            </div>
        </div>
    )
}