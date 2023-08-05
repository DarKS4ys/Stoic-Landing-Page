"use client"

import Pricing from '@/components/Pricing';
import StoicButton from '@/components/stoicbutton';
import Features from '@/components/Features';
import Bottom from '@/components/Bottom';
import Legal from '@/components/Legal';
import { Menu } from 'lucide-react';
import { Sheet } from '@/components/ui/sheet';
import { SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { SheetContent } from '@/components/ui/sheet';
import FrequentlyAskedQuestions from '@/components/Faq';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import AI from '@/components/AI';

export default function Home() {
  //Mobile Navbar Logic
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevents SSR issues if react-lottie or dependencies are null 

  return (
    <>
      {/* Navbar */}
      <div className='flex justify-center items-center p-8'>
        <div className='flex justify-between items-center w-[1100px]'>
          <h1 className='text-lg'>S T O I C</h1>
          <div className='md:flex hidden gap-2 text-[#939393]'>
            <button className='hover:bg-white/10 hover:text-white/90 hover:scale-110 rounded-lg transition duration-300 py-2 px-4'>Features</button>
            <button className='hover:bg-white/10 hover:text-white/90 hover:scale-110 rounded-lg transition duration-300 py-2 px-4'>Pricing</button>
            <button className='hover:bg-white/10 hover:text-white/90 hover:scale-110 rounded-lg transition duration-300 py-2 px-4'>Contact</button>
          </div>
          <button className='hidden md:flex bg-white text-black transition-all hover:bg-[#cfcfcf] px-4 py-2 rounded-xl font-medium'>
            Get Started
          </button>
          <div className='absolute right-10'>
            <Sheet>
              <SheetTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:text-black"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="p-0">
                <div className="flex flex-col justify-center items-center m-8 tracking-widest">
                <Link href="#">
                  <p className="px-4 m-1 py-2 text-white hover:bg-white/10 hover:scale-110 rounded-lg transition duration-300">
                    Features
                  </p>
                  </Link>
                  <Link href="#">
                  <p className="px-4 m-1 py-2 text-white hover:bg-white/10 hover:scale-110 rounded-lg transition duration-300">
                    Pricing
                  </p>
                  </Link>
                  <Link href="#">
                  <p className="px-4 m-1 py-2 text-white  hover:bg-white/10 hover:scale-110 rounded-lg transition duration-300">
                    FAQs
                  </p>
                  </Link>
                  <div className="mt-2">
                    <StoicButton />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Hero */}
      <div className="flex flex-col justify-center items-center mt-24">
        <h1 className="text-7xl text-center font-medium w-[900px] text-transparent bg-clip-text bg-gradient-to-b from-[#F7F7F8] to-[#C2C3C8] p-1">The Ultimate tool for content creation</h1>
        <p className="text-center w-[500px] font-thin my-4">Stoic AI is an extremely powerful platform for content creation and education</p>
          <AI />
        <div className="m-10 rounded-3xl bg-[#0c0c0d] border border-[#222226] drop-shadow-lg w-[1200px] h-[600px]">
          <div className="flex justify-start items-center gap-2 p-6">
            <div className="bg-[#E96B59] w-3 h-3 rounded-full"/>
            <div className="bg-[#EFC32A] w-3 h-3 rounded-full"/>
            <div className="bg-[#60C939] w-3 h-3 rounded-full"/>
          </div>
        </div>
      </div>

      <Features />

      <Pricing />

      <FrequentlyAskedQuestions />

      <Bottom />

      <Legal />
    </>
  )
}
