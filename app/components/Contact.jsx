import Image from "next/image"
export default function Contact(){

    return (
    <div className="w-[80%] mx-auto xxs:h-auto mt-5 xxs:mb-10 scroll-smooth" id="contact">

            <h1 className="text-white text-2xl">Kontakt</h1>
            <div className="mt-4 border-t-2  w-full"></div>

            <div className="xxs:w-full lg:w-[50%] text-white pt-10">
            <h1>"Spremni da napravimo kolaboraciju i kreiramo magiju zajedno? "</h1>

            <p>Možeš me kontaktirati na navedeni mail ispod ili na jednoj od socijalnih platformi.</p>

            <div className="flex flex-row justify-start items-center">

            <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[20%]"
                    href="mailto: denis.kantic18@gmail.com" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full
                        flex flex-row items-center justify-center mt-5">
                            <Image src="/images/insta.png" alt="instagram lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>


            <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[20%]"
                    href="https://www.instagram.com/lexyri9/" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full
                        flex flex-row items-center justify-center mt-5">
                            <Image src="/images/insta.png" alt="instagram lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>

                    <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[20%]"
                       href="https://www.tiktok.com/@lexyri9?_t=8ijTV2jh5IU&_r=1" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full flex 
                        flex-row items-center justify-center mt-5">
                            <Image src="/images/tiktok.png" alt="tiktok lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>

                    <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[20%]"
                    href="https://www.youtube.com/channel/UCznHaNy4Q_4DOdVx7EiCANA" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full flex 
                        flex-row items-center justify-center mt-5">
                            <Image src="/images/youtube.png" alt="lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>

            </div>
            </div>


    </div>

    )
}
