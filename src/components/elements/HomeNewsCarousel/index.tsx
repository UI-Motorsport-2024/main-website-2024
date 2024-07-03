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
            <div className="relative h-[92%] w-[90%] border-solid border-[2px] border-[#E6F25D] rounded-xl overflow-hidden" style={{filter: 'drop-shadow(0px 0.38875px 7.8875px rgba(255, 255, 255, 0.87))'}}>
                <Image
                    src="/dummy-image2.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

const HomeNewsCarousel = () => {
    return (
        <Carousel className="w-full h-full">  
            <CarouselContent className="h-[25vh] lg:h-[40vh]"> 
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

export default HomeNewsCarousel