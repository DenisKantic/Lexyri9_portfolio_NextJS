import Image from "next/image";

export default function ShopPreview(){

    return (
        <div className="w-[80%] mx-auto h-[80vh]">

        <h1 className="text-white text-2xl">My shop</h1>
        <div className="mt-4 border-t-2  w-full"></div>

        <div className="text-white pt-10 text-center text-2xl w-[70%] mx-auto">
            <h1 className="text-white">Take a look at my shop where you can find different styled t-shirts and many more.</h1>
            <p className="text-white">Buying one of my products, you support directly "RE-SET" non-profit organisation, which made all of this product</p>
        </div>
        
        
        </div>
    )
}