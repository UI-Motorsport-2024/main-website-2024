import React from 'react'
import Image from 'next/image'
import { socialMedia } from '@/components/constant/socialMedia'
import { footerLink } from '@/components/constant/footerLink'

const Footer = () => {
  return (
    <footer className="relative bg-[#252525] rounded-t-3xl p-9 px-16 z-20">
      <div className="w-full flex justify-center gap-6">
        {socialMedia.map((item, index) => {
          return (
            <a href={item.href} key={index}>
              <Image src={item.src} alt="" width={24} height={24} />
            </a>
          )
        })}
      </div>

      <div className="flex justify-between w-full">
        <div className="max-w-[393px] w-full flex flex-col gap-20">
          <div className="flex flex-col gap-5">
            <div>
              <Image src="/logo-text.png" alt="" width={233} height={59} />
            </div>

            <div className="grid grid-cols-2 gap-y-2 gap-x-12">
              {footerLink.map((item, index) => {
                return (
                  <a
                    href={item.href}
                    key={index}
                    className="font-bold text-white text-opacity-30"
                  >
                    {item.text}
                  </a>
                )
              })}
            </div>
          </div>

          <div className="text-white text-opacity-80 font-semibold">
            <p>© 2024 UI Motorsports. All rights reserved.</p>
            <p>Built by UIMS 2024’s Webdev Team</p>
          </div>
        </div>

        <div className="max-w-[546px] w-full"></div>
      </div>
    </footer>
  )
}

export default Footer
