/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';
import Banner from "@/components/main/Banner";
import CategoryGrid from "@/components/main/CategoryGrid";
import BecomeSeller from "@/components/main/BecomeSeller";
import CompetitorChecking from "@/components/main/CompetitorChecking";
import TopRatedClientCarousel from "@/components/main/TopRatedClientCarousel";
import BentoGrid from "@/components/main/BentoGrid";


const words = ['Welcome to InService !', 'Hi, Tanmaya 👋🏻']

const Home = () => {

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        // Set up animation for the current word
        anime({
            targets: '.animated-text .word',
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 2250,
            delay: (el, i) => 150 * (i + 1),
            complete: () => {
                // After displaying the first word, show the second word
                if (currentWordIndex === 0) {
                    setTimeout(() => {
                        setCurrentWordIndex(1); // Switch to "Hi! Tanmaya"
                    }, 2000); // Wait 2 seconds before switching
                }
            }
        });
    }, [currentWordIndex]);

    const [isClient, setIsClient] = useState(false)

    return (
        <div className=" w-full flex flex-col gap-20">
            {/* <div className="px-10">
                <h1 className="animated-text font-semibold text-sm sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl flex flex-wrap">
                    <span className="word">{words[currentWordIndex]}</span>
                </h1>
            </div> */}

            {/* <Banner /> */}
            <div className="w-[92%] flex flex-col gap-4 mx-auto">
                <h1 className="text-3xl font-bold">Hot Categories</h1>
                <BentoGrid />
            </div>

            <div className="w-[92%] mx-auto">
                {isClient ? <BecomeSeller /> : <CompetitorChecking />}
            </div>

            <div className="w-[92%] mx-auto flex flex-col gap-4 mb-20">
                <p className="text-2xl sm:text-3xl font-bold">
                    {/* Only the Best for You: Meet Our Top-Rated Professionals */}
                    Our Top-Rated Professionals
                </p>
                <TopRatedClientCarousel />
            </div>

        </div>
    )
}

export default Home