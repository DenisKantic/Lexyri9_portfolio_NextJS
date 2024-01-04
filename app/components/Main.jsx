import Image from "next/image"

export default function Main(){
    return (
        <div className="h-screen flex xxs:w-[90%] md:w-[80%] mx-auto scroll-smooth">
            <div className="flex justify-center xxs:flex-col md:flex-row items-center text-white h-full mt-3 mx-auto xxs:w-[95%] sm:w-full">

            <div className="xxs:w-[80%] flex flex-col justify-center items-center
                                xxs:w-full xxs:h-[40vh] sm:h-[30vh] lg:h-[30vh] xl:h-max-[40vh] md:w-[80%] lg:w-[80%] xl:max-w-[40%]"> {/* left side text */}

                    <div className="xxs:w-full xxs:justify-start xxs:items-center sm:w-[80%] lg:w-full h-[60vh]">
                    <p className="
                                 xxs:text-md xxs:text-center md:text-start md:text-xl">Ja sam Lexyri9,</p>
                    <h1 className="
                                  xxs:text-md xxs:pt-3 xxs:text-center xxs:w-full
                                  md:text-xl md:text-center
                                  lg:text-3xl lg:text-start
                                  xl:text-5xl z-10
                                  bg-clip-text text-transparent
                    bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                                    TikTok kreator sa 110+ hiljada vjernih
                    pratioca i 3M lajkova</h1>
                    <p className="mt-6
                                  xxs:text-sm xxs:text-justify xxs:text-sm md:text-start  font-bold
                                  xxs:w-[90%] xxs:mx-auto md:mx-0 md:w-full
                                  md:text-lg lg:text-xl">
                                    Trenutno sprovodim akciju pomaganja osobama sa invaliditetom. 
                                    Pridruži se mojoj zajednici i budi dio ove priče.
                                    Kupovinom proizvoda, pomažete da otvorimo više poslovnih prilika
                                    za zapošljavanje osoba sa invaliditetom.

                                    {/*
                                    I'm on a mission to help people with disabilities, 
                                    so join my community and be a part of the story.
                                    By buying products, you are helping me to hire more people with disabilities 
                                */} <br /></p>
                    </div>

                    <div className="flex justify-center items-center 
                                xxs:w-full xxs:h-[30vh] sm:absolute sm:right-0 sm:opacity-20 sm:h-auto xl:hidden"> {/*right side of the photo*/}
                    <Image src="/images/logo.webp" width={400} unoptimized height={400} alt="lexiry_logo" 
                        className="xxs:h-[30vh] w-auto object-contain sm:h-auto lg:h-[70vh]"/>
                </div>

                    <div className="flex
                                    xxs:w-full
                                    xxs:flex-row xxs:justify-center xxs:items-center xxs:pt-2 
                                    md:flex-row md:pt-8 sm:justify-around md:justify-between sm:w-[80%] lg:w-full z-3">
                        <a className="w-[110px] h-[120px] bg-green-400 rounded-lg cursor-pointer
                        bg-gradient-to-r from-[#001B61] to-[#001B61BF]
                        cursor-pointer flex justify-center items-center flex-col
                        xxs:w-[80px] xxs:h-[80px] 
                        sm:w-[100px] sm:h-[100px]
                        md:w-[110px] md:h-[120px]"
                        target="_blank"
                        href="https://www.instagram.com/lexyri9/">
                            <Image src="/images/insta.png" unoptimized alt="instagram_logo" width={60} height={60} 
                            className="mx-auto
                                        xxs:w-[30px] xxs:h-[30px]  xxs:m-0 
                                        md:m-3 md:w-[60px] md:h-[60px]"/>
                            <h1 className="text-xl text-center
                                            xxs:text-sm xxs:pt-2
                                            sm:text-md
                                            md:text-lg">@lexyri9</h1>
                        </a>

                        <a className="w-[110px] h-[120px] bg-green-400 rounded-lg ml-8 bg-gradient-to-r from-[#001B61] to-[#001B61BF]
                        flex justify-center items-center flex-col cursor-pointer
                        xxs:w-[80px] xxs:h-[80px]
                        sm:w-[100px] sm:h-[100px]
                        md:w-[110px] md:h-[120px]"
                        target="_blank"
                        href="https://www.tiktok.com/@lexyri9?_t=8ijTV2jh5IU&_r=1">
                            <Image src="/images/tiktok.png"  width={50} height={50} alt="tiktok_logo" unoptimized
                             className="mx-auto
                             xxs:w-[30px] xxs:h-[30px]  xxs:m-0 
                             md:m-3 md:w-[60px] md:h-[60px]"/>
                            <h1 className="text-xl text-center
                                            xxs:text-sm xxs:pt-2
                                            sm:text-md
                                            md:text-lg">@lexyri9</h1>
                        </a>

                        <a className="w-[110px] h-[120px] bg-green-400 rounded-lg ml-8 bg-gradient-to-r from-[#001B61] to-[#001B61BF]
                        flex justify-center items-center flex-col cursor-pointer
                        xxs:w-[80px] xxs:h-[80px]
                        sm:w-[100px] sm:h-[100px]
                        md:w-[110px] md:h-[120px]"
                        target="_blank"
                        href="https://www.youtube.com/@lexyri9">
                            <Image src="/images/youtube.png" unoptimized width={60} alt="youtube_logo"  height={60} 
                             className="mx-auto
                             xxs:w-[30px] xxs:h-[30px]  xxs:m-0 
                             md:m-3 md:w-[60px] md:h-[60px]"/>
                            <h1 className="text-xl text-center
                                            xxs:text-sm xxs:pt-2
                                            sm:text-md
                                            md:text-lg">@lexyri9</h1>
                        </a>
                    </div>

                    </div>



               
                <div className="flex justify-center items-center 
                                xxs:w-full xxs:h-[30vh] md:w-[60%] md:h-[20vh] xxs:hidden xl:flex lg:h-auto"> {/*right side of the photo*/}
                    <Image src="/images/logo.webp" width={400} unoptimized height={400} alt="lexiry_logo" 
                    className="xxs:h-[30vh] object-contain md:h-[70vh] md:w-full"/>
                </div>
                </div>

        </div>
    )
}