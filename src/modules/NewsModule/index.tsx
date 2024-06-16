import React from "react";
import Image from "next/image";
import HomeHeader from "@/components/elements/NewsHeader";
import HomeSlider from "@/components/elements/NewsSlider";
import NewsDetail from "@/components/elements/NewsDetail";

const NewsModule = () => {
    return <main className="relative min-h-screen">

        {/* top bg decor */}
        <div className="absolute top-5 w-full">
            <Image
                    src="/sobek-news.png"
                    alt="Wavy Decoration"
                    layout="responsive"
                    width={100}
                    height={100}    
                />
        </div>

        {/* bottom bg decor for responsiveness */}
        <div className="absolute bottom-[-7%] w-full sm:hidden block">
            <Image
                    src="/sobek-news.png"
                    alt="Wavy Decoration"
                    layout="responsive"
                    width={100}
                    height={100}    
                    style={{transform: 'scaleY(-1)'}}  
                />
        </div>


        <div className="absolute top-0 left-0 justify-center items-center flex flex-col w-full h-full">

            <div className="flex items-center w-4/5 h-[65%]">
                <HomeHeader />
            </div>

            <div className="flex flex-col w-10/12 h-[35%]">
                <h1 className="text-white text-xl">News</h1>
                <div className="h-full w-full">
                    <HomeSlider />
                </div>
            </div>
            
        </div>

        <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full hidden">
            <NewsDetail />
        </div>
    </main>
}

export default NewsModule

