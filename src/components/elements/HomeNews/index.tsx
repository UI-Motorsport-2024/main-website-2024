import React from "react";
import Image from 'next/image';
import './styles.css';
import HomeNewsCarousel from "../HomeNewsCarousel";

const Box = () => {
    return (
        <div className="relative h-full">
            <div className="flex-none opacity-50 border-solid lg:w-[300px] w-[200px] h-3/4 border-white border-[2px] rounded-xl">
                <div className="bg-[#D3D3D3] opacity-10 w-full h-full"></div>
            </div>

            {/* ball marker */}
            <div className="absolute bottom-0 left-0 right-0 mx-auto lg:w-[40px] w-[20px] lg:h-[40px] h-[20px] z-[10] rounded-full" style={{
                background: 'linear-gradient(93.47deg, #E7A82D 16.03%, #EEC532 83.84%)',
                boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.15)'
            }} />
        </div>
        
    );
};

const HomeNews = () => {
    return(
        <div className='relative w-full overflow-hidden lg:h-[105vh] h-[65vh]'>
            <Image src='/HomeNews-bg.png' alt='' layout='fill' objectFit='cover' quality={100} />

            {/* top fading rectangle */}
            <div className="absolute top-[-5px] left-0 right-0 h-1/4 bg-gradient-to-b from-[#0E0E0E] to-transparent" />

            {/* bottom fading rectangle */}
            <div className="absolute bottom-[-5px] left-0 right-0 h-1/4 bg-gradient-to-b from-transparent to-[#0E0E0E]" />
            

            {/* bottom decor */}
            <div className="absolute bottom-0 flex justify-center w-full">
                <div className="w-4/5">
                <Image
                        src="/bottom-home-news-decor.png"
                        alt="Wavy Decoration"
                        layout="responsive"
                        width={100}
                        height={100}    
                    />
                </div>

            </div>

            {/* Main content */}
            <div className="relative inset-0 flex flex-col justify-between items-center z-9 w-full h-full pt-4">

                {/* top part */}
                <div className="flex w-full h-[40%] justify-between items-center">
                    <div className="w-2/12">
                        <Image
                            src="/arrows.png"
                            alt="Wavy Decoration"
                            layout="responsive"
                            width={100}
                            height={100}    
                        />
                    </div>
                    
                    {/* events slider */}
                    <div className="flex flex-col justify-center items-center w-9/12 h-[90%] bg-[#2B2B3A] rounded-lg bg-opacity-50 overflow-hidden">
                        <div className="flex w-full h-[84%] pb-[8px] overflow-x-auto px-8 custom-scrollbar">
                            <div className="relative flex space-x-10 h-full">
                                <Box></Box>
                                <Box></Box>
                                <Box></Box>
                                <Box></Box>
                                <Box></Box>
                                <Box></Box>
                                <Box></Box>
                                <Box></Box>
                                <div className="absolute lg:bottom-[11px] bottom-[6px] z-[5] w-full lg:h-[15px] h-[8px] bg-[#0D0E17] bg-opacity-100 rounded-[12px]" style={{margin: "0"}} />
                            </div>

                        </div>
                        
                    </div>

                    <div className="w-2/12">
                        <Image
                            src="/arrows.png"
                            alt="Wavy Decoration"
                            layout="responsive"
                            width={100}
                            height={100}  
                            style={{transform: 'scaleX(-1)'}}  
                        />
                    </div>
                    
                </div>

                {/* carousel */}
                <div className="md:w-3/4 w-4/5 h-[60%]">
                    <div className="w-full h-[80%] p-6">
                        <HomeNewsCarousel />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default HomeNews;
 


// filter: drop-shadow(0px 5.38875px 53.8875px rgba(255, 255, 255, 0.47));
