'use client'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="bg-[#252525] fixed w-full flex justify-center h-[80px] rounded-b-[20px] border-b-[7px] border-[#191919]">
      <NavigationMenu className="">
        <NavigationMenuList className="grid grid-cols-[repeat(5,1fr)] w-full gap-x-3 text-white font-semibold">
          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink href="/" className="hover:text-opacity-50">
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink href="/" className="hover:text-opacity-50">
              News
            </NavigationMenuLink>
          </NavigationMenuItem>

          <div className="flex justify-center items-center ml-0">
            <Image src="/logo.png" alt="" width={58} height={63} />
          </div>

          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink href="/" className="hover:text-opacity-50">
              The Team
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem className="flex justify-center">
            <NavigationMenuLink href="/" className="hover:text-opacity-50">
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  )
}

export default Navbar
