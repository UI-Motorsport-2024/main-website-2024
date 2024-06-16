import React from "react";
import Image from 'next/image';

const AboutUsSection = () => {
    return(
        <div className="relative text-white py-12 md:h-[50vh] h-[25vh]">

            {/* checkered flag right */}
            <div className="absolute top-0 bottom-0 m-auto w-2/12 right-0 flex flex-col justify-center">
                <Image 
                    src='/checkered-flag.png'
                    alt=''
                    layout='responsive'
                    width={100}
                    height={100}
                />
            </div>

            {/* checkered flag right */}
            <div className="absolute top-0 bottom-0 m-auto w-2/12 left-0 flex flex-col justify-center">
                <Image 
                    src='/checkered-flag.png'
                    alt=''
                    layout='responsive'
                    width={100}
                    height={100}
                    style={{transform: 'scaleX(-1)'}}
                />
            </div>

            <div className="z-10 w-full h-full flex justify-center">
                <div className="flex justify-center algin-center items-center w-3/4 z-10 h-full bg-[#181818] rounded-2xl border-[#5D5555] border-solid border-[1px]">
                    <div className="flex w-11/12 h-[80%]">
                        {/* text + button */}
                        <div className="flex flex-col md:w-3/5 w-full justify-between">
                            <h1>About Us</h1>
                            <p>Hey! interested in us yet? hit the Button below to know more about what we do and stories behind us!!</p>
                            <button 
                            className="rounded-lg text-black py-2"
                            style={{background: 'linear-gradient(90.41deg, #C381C3 0%, #E9EE00 93%)'}}
                            >Our Team</button>
                        </div>

                        {/* image */}
                        <div className="w-2/5 relative ml-[20px] border-[#E6F25D] border-solid border-[1px] rounded-lg overflow-hidden md:block hidden" 
                            style={{filter:"drop-shadow(0px 1px 10px rgba(255, 255, 255, 0.47))"}}>
                            <Image 
                                src='/dummy-image.png'
                                alt=''
                                layout='fill'
                                objectFit='cover'
                            />  
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default AboutUsSection;


/* Clip path group */

