import Image from "next/image"

export default function Main(){
    return (
        <div className="h-screen xxs:w-[90%] md:w-[80%] mx-auto">
            <div className="flex justify-center items-center text-white h-full">
                <div className="w-[50%] xxs:w-[90%] flex flex-col
                                xxs:w-full xxs:h-[70vh]"> {/* left side text */}
                    <div className="xxs:w-full xxs:justify-start xxs:items-center">
                    <p className="
                                 xxs:text-md xxs:text-center">I am Lexyri9,</p>
                    <h1 className="
                                  xxs:text-lg xxs:pt-3 xxs:text-center xxs:w-full">TikTok creator with
                    fanbase of 100+ thousand
                    followers and 3M likes</h1>
                    <p className="pt-6
                                  xxs:text-md xxs:text-center xxs:text-sm">Join my community and be a part of the story</p>
                    </div>

                    <div className="w-[50] h-screen flex justify-center items-center 
                                xxs:w-full xxs:h-[30vh]"> {/*right side of the photo*/}
                    <Image src="/images/logo.webp" width={400} unoptimized height={400} alt="lexiry_logo" 
                    className="xxs:h-[30vh] w-auto object-contain"/>
                </div>

                    <div className="flex
                                    xxs:flex-row xxs:justify-center xxs:items-center xxs:pt-2
                                    md:flex-row md:pt-8">
                        <a className="w-[110px] h-[120px] bg-green-400 rounded-lg 
                        bg-gradient-to-r from-[#001B61] to-[#001B61BF]
                        cursor-pointer flex justify-center items-center flex-col
                        xxs:w-[80px] xxs:h-[80px]"
                        href="https://www.instagram.com">
                            <Image src="/images/insta.png" unoptimized alt="instagram_logo" width={60} height={60} 
                            className="mx-auto
                                        xxs:w-[30px] xxs:h-[30px]  xxs:m-0 
                                        md:m-3"/>
                            <h1 className="text-xl text-center
                                            xxs:text-sm xxs:pt-2">@lexyri9</h1>
                        </a>

                        <a className="w-[110px] h-[120px] bg-green-400 rounded-lg ml-8 bg-gradient-to-r from-[#001B61] to-[#001B61BF]
                        flex justify-center items-center flex-col
                        xxs:w-[80px] xxs:h-[80px]">
                            <Image src="/images/tiktok.png"  width={50} height={50} alt="tiktok_logo" unoptimized
                             className="mx-auto
                             xxs:w-[30px] xxs:h-[30px]  xxs:m-0 
                             md:m-3"/>
                            <h1 className="text-xl text-center
                                            xxs:text-sm xxs:pt-2">@lexyri9</h1>
                        </a>

                        <a className="w-[110px] h-[120px] bg-green-400 rounded-lg ml-8 bg-gradient-to-r from-[#001B61] to-[#001B61BF]
                        flex justify-center items-center flex-col
                        xxs:w-[80px] xxs:h-[80px]">
                            <Image src="/images/youtube.png" unoptimized width={60} alt="youtube_logo"  height={60} 
                             className="mx-auto
                             xxs:w-[30px] xxs:h-[30px]  xxs:m-0 
                             md:m-3"/>
                            <h1 className="text-xl text-center
                                            xxs:text-sm xxs:pt-2">@lexyri9</h1>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}