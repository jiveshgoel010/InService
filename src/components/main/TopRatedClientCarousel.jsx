/* eslint-disable no-unused-vars */
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '../ui/card'
import AutoScroll from 'embla-carousel-auto-scroll'
import { useState } from 'react'


import TopRatedClientCard from './TopRatedClientCard'
import { useEffect } from "react"
import { useMemo } from "react"
import { useMedia } from "use-media"


const servicesData = [
    {
        name: 'Jivi Goel',
        location: 'Monaco',
        servicename: 'Full Stack Developer :- Creating Solution for your problems',
        rate: '300.0/hr',
        star: '4.99',
        projects: '9',
        description:
            'I am a skilled full stack developer with expertise in both front-end and back-end technologies. I excel in building robust web applications from concept to deployment.',
    },
    {
        name: 'Alex Johnson',
        location: 'New York',
        servicename: 'Graphic Designer :- Crafting visual content',
        rate: '250.0/hr',
        star: '4.85',
        projects: '15',
        description:
            'I specialize in creating visually appealing designs for various digital platforms. My expertise includes logo design, branding, and illustration.',
    },
    {
        name: 'Maria Garcia',
        location: 'Los Angeles',
        servicename: 'Digital Marketer :- Boosting your online presence',
        rate: '200.0/hr',
        star: '4.90',
        projects: '20',
        description:
            'With a focus on SEO, social media marketing, and content creation, I help businesses increase their online visibility and engagement.',
    },
    {
        name: 'David Smith',
        location: 'London',
        servicename: 'Content Writer :- Engaging and persuasive content',
        rate: '150.0/hr',
        star: '4.95',
        projects: '25',
        description:
            'I provide high-quality content writing services, including blog posts, articles, and website copy, tailored to your target audience.',
    },
    {
        name: 'Emma Brown',
        location: 'Sydney',
        servicename: 'Web Developer :- Building responsive websites',
        rate: '280.0/hr',
        star: '4.88',
        projects: '12',
        description:
            'I specialize in developing responsive and user-friendly websites using the latest web technologies, ensuring a seamless user experience.',
    },
    {
        name: 'Michael Lee',
        location: 'Toronto',
        servicename: 'Mobile App Developer :- Creating intuitive mobile apps',
        rate: '320.0/hr',
        star: '4.92',
        projects: '18',
        description:
            'I develop high-performance mobile applications for both iOS and Android platforms, focusing on user experience and functionality.',
    },
    {
        name: 'Sophia Martinez',
        location: 'Berlin',
        servicename: 'UI/UX Designer :- Designing user-friendly interfaces',
        rate: '270.0/hr',
        star: '4.87',
        projects: '22',
        description:
            'I create intuitive and visually appealing user interfaces, ensuring a seamless and enjoyable user experience across all devices.',
    },
    {
        name: 'James Wilson',
        location: 'Paris',
        servicename: 'SEO Specialist :- Optimizing your online presence',
        rate: '230.0/hr',
        star: '4.91',
        projects: '19',
        description:
            'I help businesses improve their search engine rankings through effective SEO strategies, including keyword research, on-page optimization, and link building.',
    },
    {
        name: 'Olivia Davis',
        location: 'Tokyo',
        servicename: 'Social Media Manager :- Managing your social presence',
        rate: '210.0/hr',
        star: '4.89',
        projects: '17',
        description:
            'I manage social media accounts, create engaging content, and develop strategies to increase followers and engagement on various social platforms.',
    },
    {
        name: 'Liam Anderson',
        location: 'Dubai',
        servicename: 'Data Analyst :- Analyzing and interpreting data',
        rate: '290.0/hr',
        star: '4.93',
        projects: '14',
        description:
            'I analyze and interpret data to help businesses make informed decisions. My services include data visualization, reporting, and predictive analysis.',
    },
    {
        name: 'Alex Johnson',
        location: 'New York',
        servicename: 'Graphic Designer :- Crafting visual content',
        rate: '250.0/hr',
        star: '4.85',
        projects: '15',
        description:
            'I specialize in creating visually appealing designs for various digital platforms. My expertise includes logo design, branding, and illustration.',
    },
    {
        name: 'Maria Garcia',
        location: 'Los Angeles',
        servicename: 'Digital Marketer :- Boosting your online presence',
        rate: '200.0/hr',
        star: '4.90',
        projects: '20',
        description:
            'With a focus on SEO, social media marketing, and content creation, I help businesses increase their online visibility and engagement.',
    },
];


function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
}

function TopRatedClientCarousel() {

    const isLarge = useMedia({ minWidth: 1024 });
    const isSmall = useMedia({ minWidth: 640, maxWidth: 1023 });
    const isExtraSmall = useMedia({ maxWidth: 639 });

    // Set chunkSize based on media query
    const [chunkSize, setChunkSize] = useState(1);

    useEffect(() => {
        if (isLarge) {
            setChunkSize(3);
        } else if (isSmall) {
            setChunkSize(2);
        } else {
            setChunkSize(1);
        }
    }, [isLarge, isSmall, isExtraSmall]);

    // Chunk data whenever chunkSize changes
    const chunkedData = useMemo(() => chunkArray(servicesData, chunkSize), [chunkSize]);

    // Map chunk sizes to width classes
    const widthClass = {
        1: 'w-full',
        2: 'w-1/2',
        3: 'w-1/3',
    };
    return (


        <div className="relative w-full flex justify-center border rounded-xl items-center py-5">
            <Carousel
                // className="w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl"
                className="w-full"
                opts={{
                    loop: true,
                }}>
                <CarouselContent>
                    {chunkedData.map((group, index) => (
                        <CarouselItem key={index} className="flex">
                            {group.map((service, idx) => (
                                <div key={idx} className={`flex justify-center p-4 ${widthClass[chunkSize]}`}>
                                    <TopRatedClientCard
                                        name={service.name}
                                        location={service.location}
                                        servicename={service.servicename}
                                        rate={service.rate}
                                        stars={service.star}
                                        projects={service.projects}
                                        description={service.description}
                                    />
                                </div>
                            ))}
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Previous Button */}
                <CarouselPrevious className="hidden sm:inline-block absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none">
                    &lt;
                </CarouselPrevious>

                {/* Next Button */}
                <CarouselNext className="hidden sm:inline-block absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none">
                    &gt;
                </CarouselNext>
            </Carousel>
        </div>

    )
}

export default TopRatedClientCarousel
