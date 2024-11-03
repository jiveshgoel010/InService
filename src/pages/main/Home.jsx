/* eslint-disable no-unused-vars */
import { useState } from "react";
import Banner from "@/components/main/Banner";
import { FlipWords } from "../../components/ui/flip-words";
import CategoryGrid from "@/components/main/CategoryGrid";
import Footer from "@/components/main/Footer";
import BecomeSeller from "@/components/main/BecomeSeller";
import CompetitorChecking from "@/components/main/CompetitorChecking";
import TopRatedClientCarousel from "@/components/main/TopRatedClientCarousel";



const Home = () => {
    const words = ['Welcome to InService !', 'Hi! Tanmaya']
    const [isClient, setIsClient] = useState(false)
    return (
        <div className=" w-full flex flex-col gap-20">
            <div className="w-full flex justify-center relative">
                <img src='/welcomeImage.jpg' alt='welcome' className='w-full object-cover h-[30vh]' />
                <div className="absolute  inset-0 flex justify-start items-center">
                    <FlipWords words={words} className="text-5xl text-white font-semibold ml-10" />

                </div>
            </div>
            
            <Banner />
            <CategoryGrid />
            {isClient ? <BecomeSeller /> : <CompetitorChecking />}
            <TopRatedClientCarousel />
            



        </div>
    )
}

export default Home