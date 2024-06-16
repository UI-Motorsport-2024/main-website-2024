import React from "react";
import Image from "next/image";
import './styles.css';

const HomeHeader = () => {
    return(
        <div className="flex md:flex-row flex-col w-full h-3/5 mt-[80px] bg-[#424242] rounded-xl border-solid border-[1px] border-[#9F9F9F] overflow-hidden">
            <div className="flex flex-col h-full w-1/3 border-solid border-r-[1px] border-[#9F9F9F] md:block hidden overflow-y-auto custom-scrollbar">
                <div className="pt-2 px-5 flex justify-between items-center text-white">
                    <h1>Buka Bersama UIMS</h1>
                    <p className="text-xs">12/12/2004</p>
                </div>
                <div className="pt-2 px-5 text-white">
                    <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse augue erat, porta tincidunt varius in, scelerisque vel felis. Morbi vitae sagittis velit, id blandit leo. Curabitur convallis ligula sed velit sagittis, vitae ultrices orci interdum. Aliquam sollicitudin nec tellus et tincidunt. Aliquam erat volutpat. Suspendisse eget scelerisque eros, ut imperdiet mauris. Donec aliquet, felis sed volutpat condimentum, quam lectus consequat libero, cursus varius ex felis semper metus. Nullam eu tellus scelerisque, dapibus ipsum at, finibus tortor. Etiam molestie hendrerit enim, vel tempor dui accumsan sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce gravida justo sed lectus vehicula, efficitur mattis diam fringilla. Mauris eget aliquet sem.

Suspendisse libero tortor, sagittis eu tempus eget, ullamcorper vitae orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam posuere hendrerit nisl sed fringilla. Duis a elit posuere, sagittis velit fringilla, sagittis lacus. Fusce vitae laoreet ante. Pellentesque vehicula sapien quis mi scelerisque feugiat vitae non justo. Vivamus facilisis orci tellus, eu posuere risus faucibus et. Cras dignissim finibus nunc. Suspendisse potenti.
                    </p>
                </div>
            </div>
            
            <div className="relative h-full w-full">
                <Image 
                src="/news-dummy.png"
                alt=""
                layout="fill" 
                objectFit="cover"
                />
            </div>

            <div className="flex flex-col overflow-y-auto custom-scrollbar h-2/3 w-full border-solid border-t-[1px] border-[#9F9F9F] md:hidden block">
                <div className="pt-2 px-3 flex justify-between items-center text-white">
                    <h1>Buka Bersama UIMS</h1>
                    <p className="text-xm">12/12/2004</p>
                </div>

                <div className="pt-2 px-5 text-white">
                    <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse augue erat, porta tincidunt varius in, scelerisque vel felis. Morbi vitae sagittis velit, id blandit leo. Curabitur convallis ligula sed velit sagittis, vitae ultrices orci interdum. Aliquam sollicitudin nec tellus et tincidunt. Aliquam erat volutpat. Suspendisse eget scelerisque eros, ut imperdiet mauris. Donec aliquet, felis sed volutpat condimentum, quam lectus consequat libero, cursus varius ex felis semper metus. Nullam eu tellus scelerisque, dapibus ipsum at, finibus tortor. Etiam molestie hendrerit enim, vel tempor dui accumsan sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce gravida justo sed lectus vehicula, efficitur mattis diam fringilla. Mauris eget aliquet sem.

Suspendisse libero tortor, sagittis eu tempus eget, ullamcorper vitae orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam posuere hendrerit nisl sed fringilla. Duis a elit posuere, sagittis velit fringilla, sagittis lacus. Fusce vitae laoreet ante. Pellentesque vehicula sapien quis mi scelerisque feugiat vitae non justo. Vivamus facilisis orci tellus, eu posuere risus faucibus et. Cras dignissim finibus nunc. Suspendisse potenti.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader