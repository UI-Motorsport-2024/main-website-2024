import React from "react";
import Image from 'next/image';

const HomeInfo = () => {
    return(
        <div className="relative w-full overflow-hidden lg:h-[130vh] md:h-[90vh] h-[75vh] ">

            {/* left tyre track decor */}
            <div className="absolute top-[5%] left-0 w-1/3 flex flex-col justify-center">
                <Image
                    src="/tyre-track.png"
                    alt="Wavy Decoration"
                    layout="responsive"
                    width={100}
                    height={100}    
                    style={{transform: 'scaleX(-1)'}}
                />
            </div>

            {/* right tyre track decor */}
            <div className="absolute top-[30%] right-0 w-1/3 flex flex-col justify-center">
                <Image
                    src="/tyre-track.png"
                    alt="Wavy Decoration"
                    layout="responsive"
                    width={100}
                    height={100}    
                />
            </div>
            
            {/* bottom left decor */}
            <div className="absolute lg:bottom-[-220px] md:bottom-[-180px] bottom-[-150px] left-0 w-5/12 flex flex-col justify-center">
                <Image
                    src="/HomeInfo-bottom-decor.png"
                    alt="Wavy Decoration"
                    layout="responsive"
                    width={100}
                    height={100}    
                />
            </div>

            {/* bottom right decor */}
            <div className="absolute lg:bottom-[-220px] md:bottom-[-180px] bottom-[-150px] right-0 w-5/12 flex flex-col justify-center">
                <Image
                    src="/HomeInfo-bottom-decor.png"
                    alt="Wavy Decoration"
                    layout="responsive"
                    width={100}
                    height={100}    
                    style={{transform: 'scaleX(-1)'}}
                />
            </div>

            {/* left lightsaber */}
            
            
            {/* right lightsaber */}


            {/* main content */}


        </div>
    )
}

export default HomeInfo;