import React from "react";
import Image from "next/image";
import Scroller from "../HorizontalAutoscroll";

const HomeDivider = () => {
    return (
        <div className="w-full mb-[12px]">
            <div className="flex flex-col w-full h-full">
                <div className="">
                    <Scroller />
                </div>
                <div className="w-full">
                        <Image
                            src="/cross-logo2.png"
                            alt=''
                            layout='responsive'
                            width={100}
                            height={100}
                        />
                </div>
            </div>
        </div>
    )
}

export default HomeDivider;