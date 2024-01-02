import Image from "next/image"

export default function Social(){
    return (
        <div className="w-[80%] mx-auto
                        xxs:h-auto lg:h-[80vh]">

            <h1 className="text-4xl text-white
            ">Some of my content</h1>
             <div className="mt-4 h-[3px] w-full
             bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 ">

             </div>
                <div className="flex justify-between items-center mt-10
                                xxs:flex-col lg:flex-row">

                    <div className="flex flex-col items-center justify-center"> {/*card item */}
                        <Image src="/images/mob1.png" alt="instagram lexyri9" unoptimized width={200} height={400}
                        className="h-[50vh] w-full object-contain"/>

                        <div className="w-[70%] h-[50px] bg-white rounded-xl 
                        flex flex-row items-center justify-center mt-5">
                            <Image src="/images/insta.png" alt="instagram lexyri9" unoptimized width={30} height={30}/>
                            <h1 className="text-lg ml-3">@lexyri9</h1>
                        </div>
                        <p className="text-white text-md mt-3">4000+ followers</p>
                    </div>

                    <div className="flex flex-col items-center justify-center"> {/*card item */}
                        <Image src="/images/mob2.png" alt="tiktok lexyri9" unoptimized width={200} height={400}
                        className="h-[50vh] w-full object-contain"/>

                        <div className="w-[70%] h-[50px] bg-white rounded-xl flex 
                        flex-row items-center justify-center mt-5">
                            <Image src="/images/tiktok.png" alt="tiktok lexyri9" unoptimized width={30} height={30}/>
                            <h1 className="text-lg ml-3">@lexyri9</h1>
                        </div>
                        <p className="text-white text-md mt-3">The most watched video</p>
                    </div>

                    <div className="flex flex-col items-center justify-center"> {/*card item */}
                        <Image src="/images/mob3.png" alt="youtube lexyri9" unoptimized width={200} height={400}
                        className="h-[50vh] w-full object-contain"/>

                        <div className="w-[70%] h-[50px] bg-white rounded-xl flex 
                        flex-row items-center justify-center mt-5">
                            <Image src="/images/youtube.png" alt="lexyri9" unoptimized width={30} height={30}/>
                            <h1 className="text-lg ml-3">@lexyri9</h1>
                        </div>
                        <p className="text-white text-md mt-3">900+ followers</p>
                    </div>

                </div>
        </div>
    )
}