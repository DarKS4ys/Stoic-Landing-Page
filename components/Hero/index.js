
import Link from "next/link";
import StoicAI from "../StoicAI";
import Image from "next/image";
import HeroImage from '@/public/hero.webp'


export default function Hero(){
    return(
        <div className="flex flex-col justify-center items-center mt-24">
            <h1 className="text-7xl text-center font-medium w-[1000px]">The best tools to make high quality content</h1>
            <StoicAI />
            <Image src={HeroImage} className="m-10 rounded-3xl border border-[#7C7C7C]"/>
        </div>
    )
}