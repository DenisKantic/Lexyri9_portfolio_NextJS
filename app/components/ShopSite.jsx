import Image from "next/image"

export default function ShopSite(){
    return (
        <div className="w-[80%] mx-auto min-h-[100vh]">

        <h1 className="text-white text-2xl pt-20">My shop</h1>
        <div className="mt-4 border-t-2  w-full"></div>


                <h1 className="text-4xl text-white">Man's hoodie</h1>
            <div className="text-white w-[70%] bg-red-400 h-[50vh] flex flex-row"> {/* card item parent */}

                <div className="w-[50%]"> {/* left side image */}
                <Image src="/images/MOCKUP/Hoodie/grey.png"
                width={200} height={300} />
                </div>

                <div className="w-[40%] mx-auto bg-purple-400"> {/* right side options */}

                    <div>
                        <p>Please select the image position</p>
                        <select name="" id="" className="w-full h-[50px] bg-transparent border-2 border-white text-black outline-none cursor-pointer">
                            <option value="" className="h-[50px]">Front</option>
                            <option value="">Back</option>
                        </select>
                        <br />
                        <p className="pt-6">Color</p>
                        <select name="" id="" className="w-full h-[50px] bg-transparent border-2 border-white text-black outline-none cursor-pointer">
                            <option value="" className="h-[50px]">Front</option>
                            <option value="">Back</option>
                        </select>

                        <div className="flex flex-row justify-center place-items-center">

                            <div className="w-[50%]">
                            <p>Size</p>
                            <select name="" id="" className="w-[50%] bg-transparent border-2 border-white h-[50px]">
                                <option value="">S</option>
                            </select>
                            </div>

                            <p>Quantity</p>
                            <select name="" id="" className="w-[50%] bg-transparent border-2 border-white h-[50px]">
                                <option value="">1</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}