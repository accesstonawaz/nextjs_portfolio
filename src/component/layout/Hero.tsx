'use client'

import Arrow from "@/static/Arrow";
import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";
import Link from "next/link";


function Hero() {
    return <div id="Home" className="flex items-center flex-col min-h-screen desktop:px-20 mobile:p-6 bg-[url('/pictures/Developer.jpg')]">
        <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse items-center w-full flex-1">
            <div className="flex flex-col z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center">
                <p className="desktop:text-[5vw] mobile:text-[8vw] font-bold text w-full"> <span className="text-teal-400">Greetings, I&apos;m</span> <span className="text-[#fa8a28]">Nawaz</span></p>
                <p className="desktop:text-[3vw] mobile:text-[5vw]">a developer specializing in web applications with
                    <Typing />
                </p>
                <div className='flex mobile:hidden mt-6 justify-start w-[35vw]'><SocialMedia size={200} /></div>
            </div>
            
        </div>
        <div className="desktop:absolute desktop:bottom-10 inset-0 flex items-end py-2 justify-center z-10">
            <Link href={"/#About"} aria-label='About' >
                <Arrow />
            </Link>
        </div>
    </div>
}

export default Hero;