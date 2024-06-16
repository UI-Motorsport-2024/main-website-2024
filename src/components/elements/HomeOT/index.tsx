import React from "react";
import Image from 'next/image';

const OurTeamSection = () => {
    return (
        <div className="relative my-12 lg:h-[90vh] h-[60vh]">
            {/* background image */}
            <Image src='/HomeOT-bg.png' alt='' layout='fill' objectFit='cover' quality={100} />

            {/* top fading rectangle */}
            <div className="absolute top-0 left-0 right-0 h-1/5 bg-gradient-to-b from-[#0E0E0E] to-transparent" />

            {/* bottom fading rectangle */}
            <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-b from-transparent to-[#0E0E0E]" />

            {/* sobek decor top right */}
            <div className="absolute top-0 right-0 lg:w-5/12 w-1/2">
                <Image
                    src="/HomeOT-decor.png"
                    alt=""
                    layout="responsive"
                    width={100}
                    height={100}
                />
            </div>

            {/* sobek decor bottom left */}
            <div className="absolute bottom-0 left-0 lg:w-5/12 w-1/2">
                <Image
                    src="/HomeOT-decor.png"
                    alt=""
                    layout="responsive"
                    width={100}
                    height={100}
                    style={{transform: "rotate(180deg)"}}
                />
            </div>

            {/* main content */}
            <div className="'absolute inset-0 flex flex-col justify-center items-center z-9 w-full h-full">
                <div className='relative w-[78%] h-[84%] bg-[#1D1D1D] border-solid border-[1px] border-[#5D5555] rounded-2xl'>
                </div>
            </div>
        </div>
    )
}

export default OurTeamSection