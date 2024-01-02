import Image from "next/image"

export default function Main(){
    return (
        <div className="h-screen xxs:w-[90%] md:w-[80%] mx-auto">
            <div className="flex justify-center xxs:flex-col md:flex-row items-center text-white h-full">

            <div className="xxs:w-[80%] flex flex-col justify-center
                                xxs:w-full xxs:h-[40vh] md:h-[70vh] md:w-[55%]"> {/* left side text */}

                    <div className="xxs:w-full xxs:justify-start xxs:items-center md:w-[95%]">
                    <p className="
                                 xxs:text-md xxs:text-center md:text-start md:text-xl">I am Lexyri9,</p>
                    <h1 className="
                                  xxs:text-lg xxs:pt-3 xxs:text-center xxs:w-full
                                  md:text-xl md:text-start
                                  lg:text-3xl
                                  xl:text-5xl
                                  bg-clip-text text-transparent
                    bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                                    TikTok creator with 
                    fanbase of 110+ thousand 
                    followers and 3M likes</h1>
                    <p className="mt-6
                                  xxs:text-md xxs:text-center xxs:text-sm md:text-start font-bold
                                  xxs:w-[80%] xxs:mx-auto md:mx-0
                                  sm:w-[50%] md:w-[80%] lg:w-full
                                  md:text-xl">
                                    I'm on a mission to help people with disabilities, 
                                    so join my community and be a part of the story.
                                    By buying products, you are helping me to hire more people with disabilities <br /></p>
                                    <p className="pt-2 text-md">Scroll down below to see how to help</p>
                    </div>

                    <div className="flex justify-center items-center 
                                xxs:w-full xxs:h-[30vh] md:w-[60%] md:h-[70vh] md:hidden"> {/*right side of the photo*/}
                    <Image src="/images/logo.webp" width={400} unoptimized height={400} alt="lexiry_logo" 
                    className="xxs:h-[30vh] w-auto object-contain md:h-[70vh]"/>
                </div>

                    <div className="flex
                                    xxs:flex-row xxs:justify-center xxs:items-center xxs:pt-2 
                                    md:flex-row md:pt-8 md:justify-start md:w-[80%]
                                    md:justify-between">
                        <a className="w-[110px] h-[120px] bg-green-400 rounded-lg cursor-pointer
                        bg-gradient-to-r from-[#001B61] to-[#001B61BF]
                        cursor-pointer flex justify-center items-center flex-col
                        xxs:w-[80px] xxs:h-[80px] 
                        sm:w-[100px] sm:h-[100px]
                        md:w-[110px] md:h-[120px]"
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
                        href="tiktok.com/@lexyri9?lang=en">
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
                                xxs:w-full xxs:h-[30vh] md:w-[70%] md:h-[70vh] xxs:hidden md:flex
                                md:w-[80%]"> {/*right side of the photo*/}
                    <Image src="/images/logo.webp" width={400} unoptimized height={400} alt="lexiry_logo" 
                    className="xxs:h-[30vh] object-contain md:h-[70vh] md:w-full"/>
                </div>
                </div>

        </div>
    )
}