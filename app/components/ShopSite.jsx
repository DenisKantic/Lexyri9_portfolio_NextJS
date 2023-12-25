import Image from "next/image"

export default function ShopSite(){
    return (
        <div className="w-[80%] mx-auto min-h-[100vh]">

        <h1 className="text-white text-2xl pt-20">My shop</h1>
        <div className="mt-4 border-t-2  w-full pb-20"></div>


                <h1 className="text-4xl text-white">Man's hoodie</h1>
            <div className="text-white w-[70%] h-[50vh] flex flex-row items-center"> {/* card item parent */}

                <div className="w-[45%] flex justify-center items-center"> {/* left side image */}
                <Image src="/images/MOCKUP/Hoodie/grey.png" unoptimized
                width={100} height={100} className="w-auto h-auto flex justify-center items-center"/>
                </div>

                <div className="w-[40%] mx-auto"> {/* right side options */}

                    <div>
                        <p className="pb-4 text-white">Please select the image position</p>
                        <select name="" id="" className="w-full h-[50px] p-2 bg-transparent border-[1px] rounded-md border-white text-white outline-none cursor-pointer">
                            <option value="" className="h-[50px]">Front</option>
                            <option value="">Back</option>
                        </select>
                        <br />
                        <p className="pt-6">Color</p>
                        <select name="" id="" className="w-full p-2 h-[50px] bg-transparent border-[1px] rounded-md border-white text-white outline-none cursor-pointer">
                            <option value="" className="h-[50px]">Front</option>
                            <option value="">Back</option>
                        </select>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full">
                            <p>Size</p>
                            <select name="" id="" className="w-[90%] bg-transparent text-center border-[1px] rounded-md border-white h-[50px]">
                                <option value="">S</option>
                            </select>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <select name="" id="" className="w-full text-center bg-transparent border-[1px] rounded-md
                             border-white h-[50px]">
                                <option value="">1</option>
                            </select>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 20,00</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* long sleeve t-shirt item */}

            <h1 className="text-4xl text-white mt-[100px]">Man's Long Sleeve Shirt</h1>
            <div className="text-white w-[70%] h-[50vh] flex flex-row items-center"> {/* card item parent */}

                <div className="w-[45%] flex justify-center items-center"> {/* left side image */}
                <Image src="/images/MOCKUP/Long_sleeve/green.png" unoptimized
                width={100} height={100} className="w-auto h-auto flex justify-center items-center"/>
                </div>

                <div className="w-[40%] mx-auto"> {/* right side options */}

                    <div>
                        <p className="pt-6 pb-2">Color</p>
                        <select name="" id="" className="w-full p-2 h-[50px] bg-transparent border-[1px] rounded-md border-white text-white outline-none cursor-pointer">
                            <option value="" className="h-[50px]">Front</option>
                            <option value="">Back</option>
                        </select>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full">
                            <p>Size</p>
                            <select name="" id="" className="w-[90%] bg-transparent text-center border-[1px] rounded-md border-white h-[50px]">
                                <option value="">S</option>
                            </select>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <select name="" id="" className="w-full text-center bg-transparent border-[1px] rounded-md
                             border-white h-[50px]">
                                <option value="">1</option>
                            </select>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 20,00</p>
                        </div>
                    </div>
                </div>
            </div>

           {/* t-shirt item */}

           <h1 className="text-4xl text-white mt-[100px]">Man's T-Shirt</h1>
            <div className="text-white w-[70%] h-[50vh] flex flex-row items-center"> {/* card item parent */}

                <div className="w-[45%] flex justify-center items-center"> {/* left side image */}
                <Image src="/images/MOCKUP/T-shirt/WHITE.png" unoptimized
                width={100} height={100} className="w-auto h-auto flex justify-center items-center"/>
                </div>

                <div className="w-[40%] mx-auto"> {/* right side options */}

                    <div>
                        <p className="pt-6 pb-2">Color</p>
                        <select name="" id="" className="w-full p-2 h-[50px] bg-transparent border-[1px] rounded-md border-white text-white outline-none cursor-pointer">
                            <option value="" className="h-[50px]">Front</option>
                            <option value="">Back</option>
                        </select>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full">
                            <p>Size</p>
                            <select name="" id="" className="w-[90%] bg-transparent text-center border-[1px] rounded-md border-white h-[50px]">
                                <option value="">S</option>
                            </select>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <select name="" id="" className="w-full text-center bg-transparent border-[1px] rounded-md
                             border-white h-[50px]">
                                <option value="">1</option>
                            </select>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 20,00</p>
                        </div>
                    </div>


                    
                </div>

                
            </div>


            {/* man cap item */}

           <h1 className="text-4xl text-white mt-[100px]">Man's Cap</h1>
            <div className="text-white w-[70%] h-[50vh] flex flex-row items-center"> {/* card item parent */}

                <div className="w-[45%] flex justify-center items-center"> {/* left side image */}
                <Image src="/images/MOCKUP/Cap/CAP_BLACK.png" unoptimized
                width={100} height={100} className="w-auto h-auto flex justify-center items-center"/>
                </div>

                <div className="w-[40%] mx-auto"> {/* right side options */}

                    <div>
                        <p className="pt-6 pb-2">Color</p>
                        <select name="" id="" className="w-full p-2 h-[50px] bg-transparent border-[1px] rounded-md border-white text-white outline-none cursor-pointer">
                            <option value="" className="h-[50px]">Front</option>
                            <option value="">Back</option>
                        </select>

                        <div className="flex flex-row justify-center place-items-center pt-10">

                            <div className="w-full">
                            <p>Size</p>
                            <select name="" id="" className="w-[90%] bg-transparent text-center border-[1px] rounded-md border-white h-[50px]">
                                <option value="">S</option>
                            </select>
                            </div>
                            
                            <div className="w-full">
                            <p>Quantity</p>
                            <select name="" id="" className="w-full text-center bg-transparent border-[1px] rounded-md
                             border-white h-[50px]">
                                <option value="">1</option>
                            </select>
                            </div>
                        </div>

                        <div>
                        <h1 className="text-lg pt-10">Price</h1>
                        <p className="text-4xl font-bold">USD 20,00</p>
                        </div>
                    </div>


                    
                </div>

                
            </div>



        </div>
    )
}