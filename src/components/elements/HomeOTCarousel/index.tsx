import React from "react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


const Item = () => {
    return (
        <div className="flex justify-center items-center h-full w-full">
            <div className="relative h-[92%] w-[90%] border-solid border-[2px] border-[#E6F25D] rounded-xl overflow-hidden" style={{filter: 'drop-shadow(0px 0.38875px 4.8875px rgba(255, 255, 255, 0.87))'}}>
                <Image
                    src="/dummy-team.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />

                <div className="absolute bottom-2 left-0 text-center w-full mx-auto text-white">
                    Kinan
                </div>
            </div>
        </div>
    );
};

const HomeOTCarousel = () => {
    return (
        <Carousel className="w-full h-full">  
            <CarouselContent className="h-[30vh] lg:h-[40vh]"> 
                <CarouselItem className="md:basis-1/2"><Item /></CarouselItem>
                <CarouselItem className="md:basis-1/2"><Item /></CarouselItem>
                <CarouselItem className="md:basis-1/2"><Item /></CarouselItem>
                <CarouselItem className="md:basis-1/2"><Item /></CarouselItem>
                <CarouselItem className="md:basis-1/2"><Item /></CarouselItem>
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
        </Carousel>
    )
}

export default HomeOTCarousel