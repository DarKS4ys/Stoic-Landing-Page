"use client"

import Hero from '@/components/Hero';
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
      
      <Hero />

      <Features />

      <Pricing />

      <FrequentlyAskedQuestions />

      <Bottom />

      <Legal />
    </>
  )
}
