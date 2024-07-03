import React from "react";
import Image from 'next/image';
import HomeNewsCarousel from "../HomeNewsCarousel";
import HomeOTCarousel from "../HomeOTCarousel";

const OurTeamSection = () => {
    return (
        <div className="relative mb-12 lg:h-[90vh] h-[60vh]">
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
                <div className='relative flex flex-col items-center w-[78%] h-[84%] bg-[#1D1D1D] border-solid border-[2px] border-[#5D5555] rounded-2xl'>

                    <div className="flex flex-col justify-center w-full h-1/4 text-center text-center text-white">
                        <h1 className="md:text-3xl text-lg">Our Team !!!</h1>
                        <h1 className="md:text-xl text-sm md:py-4 py-3">Can&apos;t wait to meet our team yet?</h1>
                        <p className="md:text-[12px] text-[8px]">Hit “our team” button to see the whole team</p>
                    
                    </div>

                    <div className="md:mt-4 mt-1 md:w-3/4 w-[65%] h-3/5">
                        <HomeOTCarousel />
                    </div>
                    
                    <div className="h-[10%] pt-2 md:1/4 w-1/2">
                        <button 
                            className="rounded-lg md:text-lg text-sm font-bold text-black h-full w-full"
                            style={{background: 'linear-gradient(90.41deg, #C381C3 0%, #E9EE00 93%)'}}
                        >About Us</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OurTeamSection