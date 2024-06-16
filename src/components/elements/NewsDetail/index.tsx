import React from "react";
import Image from "next/image";
import './styles.css';

const NewsDetail = () => {
    return (
        <div className="flex justify-center items-center md:w-[70%] w-[90%] md:h-3/4 h-[85%] mt-[80px] bg-[#1D1D1D] rounded-2xl border-solid border-[3px] border-[#5D5555]">
            <div className="w-[92%] md:h-[87%] h-[95%] bg-[#424242] rounded-2xl border-white border-solid border-[2px] min-[900px]:p-5 overflow-y-auto custom-scrollbar">
                <div className="relative min-[900px]:mb-4 min-[900px]:ml-4 min-[900px]:w-1/2 w-full min-[900px]:h-3/5 h-1/2 p2 min-[900px]:float-right border-solid border-white min-[900px]:border-2 border-b-2 min-[900px]:rounded-xl ">
                    <div className="relative h-full w-full rounded-xl overflow-hidden">
                    <Image 
                        src="/news-dummy.png"
                        alt=""
                        layout="fill" 
                        objectFit="cover"
                    />
                    </div>
                    <div className="text-xs absolute right-0 bottom-[-8%]">
                        12/12/2004
                    </div>
                </div>
                <h1 className="text-white text-xl mb-3 min-[900px]:p-0 px-5">Buka Bersama UIMOTORSPORT</h1>
                <p className="text-white min-[900px]:p-0 px-5 pb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec leo at lectus tincidunt porttitor id pulvinar diam. Duis ultrices felis ut odio ullamcorper, ac placerat enim molestie. Fusce sapien arcu, lacinia sed ex in, faucibus ornare augue. Vivamus ac justo ut nisi tincidunt auctor. Etiam sit amet dolor ut sem suscipit posuere a eget est. Duis vestibulum felis ante, et volutpat risus pulvinar eget. Proin condimentum lorem sit amet nisl viverra ornare. Phasellus lobortis dolor id iaculis congue. Etiam consectetur purus sit amet ligula auctor lobortis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec leo at lectus tincidunt porttitor id pulvinar diam. Duis ultrices felis ut odio ullamcorper, ac placerat enim molestie. Fusce sapien arcu, lacinia sed ex in, faucibus ornare augue. Vivamus ac justo ut nisi tincidunt auctor. Etiam sit amet dolor ut sem suscipit posuere a eget est. Duis vestibulum felis ante, et volutpat risus pulvinar eget. Proin condimentum lorem sit amet nisl viverra ornare. Phasellus lobortis dolor id iaculis congue. Etiam consectetur purus sit amet ligula auctor lobortis.
                Quisque eu neque id nulla tempor pharetra a eu metus. Suspendisse in felis nec lectus pretium condimentum non id nisi. Cras odio ipsum, dictum eget tincidunt vel, vulputate vel nunc. In hac habitasse platea dictumst. Praesent fermentum condimentum porttitor. Duis commodo sapien ante, vel pellentesque lorem pretium vel. Ut sed pretium nisi, non lobortis leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras viverra neque et erat ornare, sed interdum augue eleifend. Nullam viverra diam a purus lobortis ultricies. Integer in laoreet sem, sodales lacinia orci.
                Quisque eu neque id nulla tempor pharetra a eu metus. Suspendisse in felis nec lectus pretium condimentum non id nisi. Cras odio ipsum, dictum eget tincidunt vel, vulputate vel nunc. In hac habitasse platea dictumst. Praesent fermentum condimentum porttitor. Duis commodo sapien ante, vel pellentesque lorem pretium vel. Ut sed pretium nisi, non lobortis leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras viverra neque et erat ornare, sed interdum augue eleifend. Nullam viverra diam a purus lobortis ultricies. Integer in laoreet sem, sodales lacinia orci.

                </p>

            </div>
        </div>
    )
}

export default NewsDetail;