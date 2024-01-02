import Image from "next/image";
import Link from "next/link";

export default function ShopPreview(){

    return (
        <div className="w-[80%] mx-auto h-[100vh]">

        <h1 className="text-white text-2xl">My shop</h1>
        <div className="mt-4 border-t-2  w-full"></div>

        <div className="text-white pt-10 text-xl w-[50%]">
            <h1 className="text-white">Take a look at my shop where you can find different styled <br /> t-shirts and choose your favorite one.</h1>
            <p className="text-white pt-5">U mom web shopu svakako možete pronaći za sebe nešto što mu odgovara. Svaki kupljeni artikal
             izravno utječe na poboljšanje rada osoba s invaliditetom, pa tako i vašom kupovinom bilo kojeg proizvoda omogućujete da se još jedna osoba 
            zaposli i uljepšate joj život tako da će se osjećati bitno i odgovorno u današnjem svijetu koji je grub prema 
            njima. Hvala vam na doprinosu.</p>
        </div>

        <div className="pt-10 flex flex-row justify-between items-center">
            <div className="h-[450px] w-[350px] border-2 rounded-3xl flex justify-center items-center"> {/* card item */}
                <Image src="/images/MOCKUP/Hoodie/grey.png" alt="hoodie_grey" unoptimized width={200} height={200}
                className="object-center h-auto w-auto"
                />
            </div>

            <div className="h-[450px] w-[350px] border-2 rounded-3xl flex justify-center items-center"> {/* card item */}
                <Image src="/images/MOCKUP/T-shirt/WHITE.png" alt="T-shirt blue" unoptimized width={200} height={200}
                className="object-contain h-auto w-auto"
                />
            </div>

            <div className="h-[450px] w-[350px] border-2 rounded-3xl flex justify-center items-center"> {/* card item */}
                <Image src="/images/MOCKUP/Long_sleeve/green.png" alt="long sleeve green" unoptimized width={200} height={200}
                className="object-contain h-auto w-auto"
                />
            </div>

            
        </div>

            <div className="w-full flex justify-center items-center pt-10">
                <Link href="/shop" className="h-[60px] flex justify-center items-center w-[220px] bg-white rounded-xl text-md">Let's shop</Link>
            </div>
        </div>
    )
}