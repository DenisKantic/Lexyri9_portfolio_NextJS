import Image from "next/image"

export default function Main(){
    return (
        <div className="h-screen w-[80%] mx-auto">
            <div className="flex justify-center items-center text-white h-full">
                <div className="w-[50%] xxs:w-[90%] flex flex-col"> {/* left side text */}
                    <div className="">
                    <p className="text-xl xxs:text-lg">I am Lexyri9,</p>
                    <h1 className="text-5xl pt-8 xxs:text-2xl">TikTok creator with <br /> 
                    fanbase of 100+ thousand <br />
                    followers and 3M likes</h1>
                    <p className="pt-6 text-lg xxs:text-md">Join my community and be a part of the story</p>
                    </div>

                    <div className="flex flex-row pt-8">
                        <a className="w-[110px] h-[120px] bg-green-400 rounded-lg 
                        bg-gradient-to-r from-[#001B61] to-[#001B61BF]
                        cursor-pointer"
                        href="https://www.instagram.com">
                            <Image src="/images/insta.png" unoptimized alt="instagram_logo" width={60} height={60} className="mx-auto m-3"/>
                            <h1 className="text-xl text-center">@lexyri9</h1>
                        </a>

                        <a className="w-[110px] h-[120px] bg-green-400 rounded-lg ml-8 bg-gradient-to-r from-[#001B61] to-[#001B61BF]">
                            <Image src="/images/tiktok.png"  width={50} height={50} alt="tiktok_logo" unoptimized className="mx-auto m-3"/>
                            <h1 className="text-xl text-center">@lexyri9</h1>
                        </a>

                        <a className="w-[110px] h-[120px] bg-green-400 rounded-lg ml-8 bg-gradient-to-r from-[#001B61] to-[#001B61BF]">
                            <Image src="/images/youtube.png" unoptimized width={60} alt="youtube_logo"  height={60} className="mx-auto m-3"/>
                            <h1 className="text-xl text-center">@lexyri9</h1>
                        </a>
                    </div>
                </div>

                <div className="w-[50] h-screen flex justify-center items-center"> {/*right side of the photo*/}
                    <Image src="/images/logo.webp" width={400} unoptimized height={400} alt="lexiry_logo" className="h-[80vh] w-full object-contain"/>
                </div>
            </div>
        </div>
    )
}