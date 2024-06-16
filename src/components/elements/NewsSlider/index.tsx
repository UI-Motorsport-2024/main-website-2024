import React from "react";
import Image from "next/image";


const Box = () => {
    return (
        <div className="relative h-full">
            <div className="flex-none lg:w-[400px] w-[300px] h-[95%] bg-[#424242] rounded-xl border-solid border-[1px] border-[#9F9F9F] overflow-hidden">
                <div className="flex flex-col w-full h-full">

                    <div className="relative h-3/4 w-full">
                        <Image 
                        src="/news-dummy.png"
                        alt=""
                        layout="fill" 
                        objectFit="cover"
                        />
                    </div>

                    <div className="h-1/4 px-5 flex justify-between items-center text-white border-solid border-yellow-500 border-t-[1px]">
                        <h1>Buka Bersama UIMS</h1>
                        <p className="text-xs">12/12/2004</p>
                    </div>
                </div>

            </div>

        </div>
        
    );
};


const HomeSlider = () => {
    return (
        <div className="flex flex-col justify-center w-full h-full  overflow-hidden">
            <div className="flex w-full h-[84%] overflow-x-auto px-8 custom-scrollbar">
                <div className="relative flex space-x-10 h-full">
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                    <Box></Box>
                </div>

            </div>
            
        </div>

    )
}

export default HomeSlider