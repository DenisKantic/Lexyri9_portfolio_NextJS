import Image from "next/image"

export default function Social(){
    return (
        <div className="h-[80vh] w-[80%] mx-auto">

            <h1 className="text-4xl text-white">My social media</h1>
             <div className="mt-4 border-t-2  w-full"></div>
                <div className="flex justify-between items-center flex-row mt-10">

                    <div className="flex flex-col items-center justify-center"> {/*card item */}
                        <Image src="/images/mob1.png" unoptimized width={200} height={400}
                        className="h-[50vh] w-full object-contain"/>

                        <div className="w-full h-[50px] bg-white rounded-xl 
                        flex flex-row items-center justify-center mt-5">
                            <Image src="/images/insta.png" unoptimized width={30} height={30}/>
                            <h1 className="text-lg ml-3">@lexyri9</h1>
                        </div>
                        <p className="text-white text-md mt-3">4000+ followers</p>
                    </div>

                    <div className="flex flex-col items-center justify-center"> {/*card item */}
                        <Image src="/images/mob3.png" unoptimized width={200} height={400}
                        className="h-[50vh] w-full object-contain"/>

                        <div className="w-full h-[50px] bg-white rounded-xl flex 
                        flex-row items-center justify-center mt-5">
                            <Image src="/images/tiktok.png" unoptimized width={30} height={30}/>
                            <h1 className="text-lg ml-3">@lexyri9</h1>
                        </div>
                        <p className="text-white text-md mt-3">The most watched video</p>
                    </div>

                    <div className="flex flex-col items-center justify-center"> {/*card item */}
                        <Image src="/images/mob2.png" unoptimized width={200} height={400}
                        className="h-[50vh] w-full object-contain"/>

                        <div className="w-full h-[50px] bg-white rounded-xl flex 
                        flex-row items-center justify-center mt-5">
                            <Image src="/images/youtube.png" unoptimized width={30} height={30}/>
                            <h1 className="text-lg ml-3">@lexyri9</h1>
                        </div>
                        <p className="text-white text-md mt-3">900+ followers</p>
                    </div>

                </div>
        </div>
    )
}