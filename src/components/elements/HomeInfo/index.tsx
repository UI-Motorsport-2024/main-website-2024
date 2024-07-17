import React from 'react'
import Image from 'next/image'

const HomeInfo = () => {
  return (
    <div className="relative w-full overflow-hidden lg:h-[130vh] md:h-[90vh] h-[75vh]">
      {/* left tyre track decor */}
      <div className="absolute top-[5%] left-0 w-1/3 flex flex-col justify-center">
        <Image
          src="/tyre-track.png"
          alt="Wavy Decoration"
          layout="responsive"
          width={100}
          height={100}
          style={{ transform: 'scaleX(-1)' }}
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
          style={{ transform: 'scaleX(-1)' }}
        />
      </div>

      {/* main content */}
      <div className="absolute w-full h-full z-10 flex justify-center items-center">
        {/* left lightsaber */}
        <Image src="/lightsaber.png" alt="" width={96} height={793} />

        <div className="w-[1050px] bg-[#1D1D24] border-2 border-[#5D5555] flex p-9 justify-between rounded-2xl">
          <div className="w-[286px] h-[490px] bg-[#3A3A3A] rounded-3xl"></div>
          <div className="w-[638px] bg-[#6B6B6B33] rounded-2xl px-8 py-6 flex flex-col items-center gap-5">
            <div className="w-full h-[197px] bg-[#252525] rounded-[20px] py-5 px-6 flex flex-col gap-4">
              <div className="p-2 text-white text-center bg-[#EBB730A8] rounded-xl text-2xl font-bold">
                <h3>Lomba Apa Ini?</h3>
              </div>

              <p className="text-white font-semibold text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                enim justo, molestie eu nulla nec, aliquam lobortis tellus. Duis
                placerat luctus sem id interdum. Aliquam vehicula elit maximus
                neque auctor, id euismod risus condimentum.
              </p>
            </div>

            <div className="w-full h-[197px] bg-[#252525] rounded-[20px] py-5 px-6 flex flex-col gap-4">
              <div className="p-2 text-black text-center bg-[#FFE56B] rounded-xl text-2xl font-bold">
                <h3>Apa Yang Kami Dapat?</h3>
              </div>

              <p className="text-white font-semibold text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                enim justo, molestie eu nulla nec, aliquam lobortis tellus. Duis
                placerat luctus sem id interdum. Aliquam vehicula elit maximus
                neque auctor, id euismod risus condimentum.
              </p>
            </div>

            <div className="w-full h-[197px] bg-[#252525] rounded-[20px] py-5 px-6 flex flex-col gap-4">
              <div className="p-2 text-[#FFAF76] text-center bg-[#9F98FB0D] rounded-xl text-2xl font-bold">
                <h3>Penghargaan</h3>
              </div>

              <p className="text-white font-semibold text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                enim justo, molestie eu nulla nec, aliquam lobortis tellus. Duis
                placerat luctus sem id interdum. Aliquam vehicula elit maximus
                neque auctor, id euismod risus condimentum.
              </p>
            </div>

            <div className="w-full h-[197px] bg-[#252525] rounded-[20px] py-5 px-6 flex flex-col gap-1">
              <div className="text-white rounded-xl text-2xl font-bold">
                <h3>Kesimpulan Pada Akhir Hari</h3>
              </div>

              <p className="text-white font-semibold text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                enim justo, molestie eu nulla nec, aliquam lobortis tellus. Duis
                placerat luctus sem id interdum. Aliquam vehicula elit maximus
                neque auctor, id euismod risus condimentum.
              </p>
            </div>
          </div>
        </div>

        {/* right lightsaber */}
        <Image src="/lightsaber.png" alt="" width={96} height={793} />
      </div>
    </div>
  )
}

export default HomeInfo
