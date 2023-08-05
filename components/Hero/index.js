
import Link from "next/link";
import StoicAI from "../StoicAI";
import Image from "next/image";
import HeroImage from '@/public/hero.webp'


export default function Hero(){
    return(
        <div className="flex flex-col justify-center items-center mt-24">
            <h1 className="text-7xl text-center font-medium w-[900px] text-transparent bg-clip-text bg-gradient-to-b from-[#F7F7F8] to-[#C2C3C8] p-1">The Ultimate tool for content creation</h1>
            <p className="text-center w-[500px] font-thin my-4">Stoic AI is an extremely powerful platform for content creation and education</p>
            <StoicAI />
            <div className="m-10 rounded-3xl bg-[#0c0c0d] border border-[#222226] drop-shadow-lg w-[1200px] h-[600px]">
                <div className="flex justify-start items-center gap-2 p-6">
                    <div className="bg-[#E96B59] w-3 h-3 rounded-full"/>
                    <div className="bg-[#EFC32A] w-3 h-3 rounded-full"/>
                    <div className="bg-[#60C939] w-3 h-3 rounded-full"/>
                </div>
            </div>

        </div>
    )
}