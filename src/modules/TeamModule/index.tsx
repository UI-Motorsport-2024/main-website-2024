import React from "react";
import Image from "next/image";
import OurTeam from "@/components/elements/OurTeam";

const TeamModule = () => {
    return <main className="relative md:h-[170vh] min-h-screen">
        {/* background */}
        <Image src='/OurTeam-bg.png' alt='' layout='fill' objectFit='cover' quality={100} />

        {/* top rectangle fading */}
        <div className="absolute top-0 left-0 right-0 h-1/3  bg-gradient-to-b from-black to-transparent" />

        {/* bottom rectangle fading */}
        <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-b from-transparent to-black" />

        {/* right rectangle fading */}
        <div className="absolute top-0 right-0 h-full w-1/12 bg-gradient-to-r from-transparent to-[#0E0E0E] opacity-80" />

        {/* left rectangle fading */}
        <div className="absolute top-0 left-0 h-full w-1/12 bg-gradient-to-r from-[#0E0E0E] to-transparent opacity-80" />


        {/* main content */}
        <div className="absolute flex flex-col top-0 left-0 w-full h-full">
            <div className="h-1/6 w-full">

            </div>
            <div className="relative flex justify-center items-center h-5/6 w-full">
                <div className="absolute top-5 w-11/12">
                    <Image
                        src="/OurTeam-t-decor.svg"
                        alt="Wavy Decoration"
                        layout="responsive"
                        width={100}
                        height={100}    
                    />
                </div>

                <OurTeam />

                <div className="absolute bottom-0 w-11/12">
                    <Image
                        src="/OurTeam-b-decor.svg"
                        alt="Wavy Decoration"
                        layout="responsive"
                        width={100}
                        height={100}    
                    />
                </div>
            </div>
        </div>

    </main>
}

export default TeamModule