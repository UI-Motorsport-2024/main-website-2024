import React from "react";
import Image from "next/image";

const VisMisModule = () => {
    return <main className="min-h-screen">

        <div className="relative w-full md:h-screen h-[45vh]">
            {/* hero bg */}
            <div className="absolute top-0 w-full h-full overflow-hidden">
                <Image
                    src="/VisMisbg.png"
                    alt="wavy"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            
            {/* VISMIS header-content */}
            <div className="absolute flex bottom-0 w-full md:h-[33%] h-1/4 justfiy-center items-center">
                <div className="relative h-full w-full">
                    <div className="absolute bottom-0 h-full w-full">
                        <Image
                            src="/vismis-bottom.svg"
                            alt="Wavy Decoration"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    <div className="relative flex justify-center items-center text-white z-[9] w-full h-full">
                        <div className=" w-2/3 text-center ">
                            UI motorsport adalah suatu ukm yang sangat
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute flex top-0 w-full md:h-[33%] h-1/4 justfiy-center items-center mt-[70px]">
                    <div className="absolute bottom-0 h-full w-full md:hidden">
                        <Image
                            src="/vismis-bottom.svg"
                            alt="Wavy Decoration"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                <div className="relative flex justify-center items-center text-white z-[9] w-full h-full">
                    <div className="flex flex-col w-2/3 text-center ">
                        <h1>UI MOTORSPORT</h1>
                        <p>about us</p>
                    </div>
                </div>

            </div>
        </div>



        {/* VISMIS main content */}
        <div className="relative w-full md:h-[120vh] h-[75vh]">
            {/* top decor */}
            <div className="absolute top-0 left-0 w-5/12 h-[4px] bg-gradient-to-r from-[#FEF500] to-transaparent z-10" />
            <div className="absolute top-0 right-0 w-5/12 h-[4px] bg-gradient-to-l from-[#FEF500] to-transaparent z-10" />

            {/* visi + misi */}
            <div className="relative flex flex-col absolute top-0 right-0 w-full h-full overflow-hidden">
                <div className="relative flex items-center w-full md:h-[38%] h-[60%] md:p-20 p-5" style={{background: 'linear-gradient(135.84deg, #4B4B4B 0%, #0E0E0E 24.27%, #0E0E0E 89.07%)'}}
                >
                    <div className="flex flex-col justify-center text-white w-4/5">
                        <h1 className="md:text-4xl">Visi</h1>
                        <p className="md:text-lg text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget elit at sapien efficitur laoreet nec et quam. Suspendisse leo magna, pretium eget dui a, congue tincidunt massa. Morbi magna nisi, eleifend ut suscipit a, rhoncus ut leo. Curabitur convallis sapien lacus, vel cursus metus </p>    
                    </div>
                    
                    <div className="absolute top-0 bottom-0 right-0 m-auto h-full w-1/6">
                        <Image
                            src="/visi-decor.svg"
                            alt="Wavy Decoration"
                            layout="responsive"  
                            width={100}
                            height={100}  
                        />
                    </div>

                    <div className="absolute right-[-5%] md:top-[60%] top-[75%] w-full">
                        <Image
                            src="/vismis-middle.svg"
                            alt="Wavy Decoration"
                            layout="responsive"  
                            width={100}
                            height={100}  
                        />
                    </div>
                </div>

                <div className="w-full h-[45%] text-white">
                    <div className="relative w-[52%] md:h-full h-1/2 rounded-r-xl overflow-hidden float-left md:mb-10 mb-2 md:mr-10 mr-2">
                        <Image
                            src="/OurTeam-bg.png"
                            alt="Wavy Decoration"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                
                    <h1 className="md:text-4xl pr-2 md:mt-[4%]">Misi</h1>
                    <p className="md:text-lg text-xs px-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget elit at sapien efficitur laoreet nec et quam. Suspendisse leo magna, pretium eget dui a, congue tincidunt massa. Morbi magna nisi, eleifend ut suscipit a, rhoncus ut leo. Curabitur convallis sapien lacus nisi, eleifend ut suscipit a, rhoncus ut leo. Curabitur convallis sapien lacus nisi, eleifend ut suscipit a, rhoncus ut leo. Curabitur convallis sapien lacusnisi, </p>
                </div>
            </div>
        </div>
        
        <div className="h-[10vh]">

        </div>
    </main>
}


export default VisMisModule


