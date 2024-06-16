import React from 'react'
import Image from 'next/image'

const Hero = () => {

    return (
        <div className='relative w-full overflow-hidden lg:h-screen md:h-[75vh] min-[480px]:h-[65vh] h-[40vh]'>
            <Image src='/hero-bg.png' alt='' layout='fill' objectFit='cover' quality={100} />
            
            {/* top fading rectangle */}
            <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#0E0E0E] to-transparent" />

            {/* bottom fading rectangle */}
            <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-b from-transparent to-[#0E0E0E]" />

            {/* right decoration */}
            <div className="absolute top-0 bottom-0 m-auto w-1/2 right-0 flex flex-col justify-center md:pt-0 pt-[30px]">
                <Image
                    src="/hero-decor.png"
                    alt="Wavy Decoration"
                    layout="responsive"
                    width={100}
                    height={100}    
                />
            </div>

            {/* left decoration */}
            <div className="absolute top-0 bottom-0 m-auto w-1/2 left-0 flex flex-col justify-center md:pt-0 pt-[30px]">
                <Image
                    src="/hero-decor.png"
                    alt="Wavy Decoration"
                    layout="responsive"
                    width={100}
                    height={100}
                    style={{transform: 'scaleX(-1)'}}
                />
            </div>

            <div className='absolute inset-0 flex flex-col justify-center items-center z-9 w-full pt-[80px]'>
                <div className='relative w-3/4'>
                    <Image
                        src="Hero.svg"
                        alt=""
                        layout="responsive"
                        width={100}
                        height={100}
                    />
                </div>
                <h1 className='text-white font-extrabold lg:text-4xl md:text-2xl min-[380px]:text-lg'>
                    Mission: WinWinWin
                </h1>
            </div>

            

        </div>
    )
}

export default Hero
