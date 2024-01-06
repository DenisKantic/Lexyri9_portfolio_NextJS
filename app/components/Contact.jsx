import Image from "next/image"
export default function Contact(){

    return (
    <div className="w-[80%] mx-auto xxs:h-auto mt-5 xxs:mb-10 scroll-smooth" id="contact">

            <h1 className="text-white text-5xl">Kontakt</h1>
            <div className="mt-4 h-[3px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-full"></div>

            <div className="xxs:w-full md:w-[80%] lg:w-[80%] xl:w-[60%] text-white pt-10">
            <p className="text-3xl
            bg-clip-text text-transparent
            bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">Spremni da napravimo magiju zajedno ?</p>

            <p className="text-lg mt-5 text-justify break-normal w-[80%]">Radujem se mogućnosti buduće saradnje! Za sve saradnje i poslovne upite, slobodno me kontaktirajte putem e-maila  ili direktno putem navedenih socijalnih platformi. Hvala na interesovanju!.</p>

            <div className="grid grid-cols-4 mt-4 w-[90%]">

            <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-[50%]"
                    href="mailto: collaboration@lexyri9.com" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full
                        flex flex-row items-center justify-center">
                            <Image src="/images/gmail.png" alt="instagram lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>


            <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-[50%]"
                    href="https://www.instagram.com/lexyri9/" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full
                        flex flex-row items-center justify-center">
                            <Image src="/images/insta.png" alt="instagram lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>

                    <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-[50%]"
                       href="https://www.tiktok.com/@lexyri9?_t=8ijTV2jh5IU&_r=1" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full flex 
                        flex-row items-center justify-center">
                            <Image src="/images/tiktok.png" alt="tiktok lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>

                    <a className="flex flex-col items-center justify-center xxs:w-[80%] sm:w-[45%] md:w-[30%] lg:w-[50%]"
                    href="https://www.youtube.com/channel/UCznHaNy4Q_4DOdVx7EiCANA" target="_blank"> {/*card item */}
                        <div className="xxs:px-2 xxs:py-2 md:px-3 md:py-3 bg-white rounded-full flex 
                        flex-row items-center justify-center">
                            <Image src="/images/youtube.png" alt="lexyri9" unoptimized width={30} height={30}/>
                        </div>
                    </a>

            </div>
            </div>


    </div>

    )
}
