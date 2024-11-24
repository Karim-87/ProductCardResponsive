import Image from "next/image"
function ProductCard() {

    return (
        <div className="flex flex-wrap justify-center gap-4 w-full p-4 mt-6 md:mt-8 lg:mt-12">
            <div className="flex flex-col items-center border border-green-600 py-2 px-10 shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-black 
         basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div>
                    <Image
                        src="/images.jfif"
                        alt="Perfume"
                        width={200}
                        height={200}
                    />
                </div>
                <div > <h1 className=" text-center py-2 px-2 font-semibold">Ladies Bag</h1></div>
                <div ><h1 className="text-center py-2 px-2">RS. 3500</h1></div>
                <div className="text-center">
                    <button className="py-2  bg-blue-600 px-4 rounded-md text-white" >Buy Now</button>
                </div>

            </div>

            <div className="flex flex-col items-center border border-green-600 py-2 px-10 shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-black 
         basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div>
                    <Image
                        src="/images.jfif"
                        alt="Perfume"
                        width={200}
                        height={200}
                    />
                </div>
                <div > <h1 className=" text-center py-2 px-2 font-semibold">Ladies Bag</h1></div>
                <div ><h1 className="text-center py-2 px-2">RS. 3500</h1></div>
                <div className="text-center">
                    <button className="py-2  bg-blue-600 px-4 rounded-md text-white" >Buy Now</button>
                </div>

            </div>
            <div className="flex flex-col items-center border border-green-600 py-2 px-10 shadow-sm shadow-slate-800 hover:shadow-md hover:shadow-black 
         basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div>
                    <Image
                        src="/images.jfif"
                        alt="Perfume"
                        width={200}
                        height={200}
                    />
                </div>
                <div > <h1 className=" text-center py-2 px-2 font-semibold">Ladies Bag</h1></div>
                <div ><h1 className="text-center py-2 px-2">RS. 3500</h1></div>
                <div className="text-center">
                    <button className="py-2  bg-blue-600 px-4 rounded-md text-white" >Buy Now</button>
                </div>

            </div>
        </div>
    )
}

export default ProductCard