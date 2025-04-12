"use client"

import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu'

import React, { useState } from 'react'
import { ModeToggle } from './themeToggle';
import { Button } from '@/components/ui/button';
import Link from 'next/link';


export const Navbar = () => {
    const [active, setActive] = useState<string | null>(null);

  return (
    <div className=' bg-[#e6cba8] flex flex-row justify-between rounded-full dark:bg-stone-700'>  
        <div className="text-4xl font-extrabold font-serif px-12 py-6">
             Fooderce
        </div>
          <div className="relative inset-x-0 min-w-3xl top-2 text-xl">
         <Menu setActive={setActive}>
                 <MenuItem item="Meal type" setActive={setActive} active={active}>
                    <div className="flex flex-col">
                    <HoveredLink href="/">Breakfast</HoveredLink>
                    <HoveredLink href="/">Lunch</HoveredLink>
                    <HoveredLink href="/">Starters</HoveredLink>
                    <HoveredLink href="/">Dinner</HoveredLink>        
                    </div>
                 </MenuItem>
                 <MenuItem item="Category" setActive={setActive} active={active}>
                    <div className="flex flex-col">
                    <HoveredLink href="/">South Indian</HoveredLink>
                    <HoveredLink href="/">North Indian</HoveredLink>
                    <HoveredLink href="/">East Indian</HoveredLink>
                    <HoveredLink href="/">West Indian</HoveredLink>        
                    </div>
                 </MenuItem>
                 <MenuItem item="Dietory Style" setActive={setActive} active={active}>
                    <div className="flex flex-col">
                    <HoveredLink href="/">veg</HoveredLink>
                    <HoveredLink href="/">Non-veg</HoveredLink>
                           
                    </div>
                 </MenuItem>
            </Menu>
        </div>
        <div className='flex flex-row justify-evenly space-x-2  px-16 py-6'>
             <div className='py-2'>
                   <ModeToggle/>
             </div>
              <div className='px-2 py-1 text-xl cursor-pointer'>
                  <Link href="/signin">
                        <Button className='text-xl' variant={"link"}>Signin</Button>
                   </Link>
              </div> 
              <div className='px-2 py-1 text-xl cursor-pointer '>
              <Link href="/register">
                        <Button className='text-xl' variant={"link"}>Register</Button>
               </Link>
              </div>
        </div>
    </div>
  )
}
