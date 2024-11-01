/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '../ui/card'
import AutoScroll from 'embla-carousel-auto-scroll'
import useEmblaCarousel from 'embla-carousel-react'

const SingleSellerPage = () => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true },
        [AutoScroll({ delay: 2000 })] // Customize delay as needed
    )

    return (
        <>
            {/* single seller page */}

            {/* Carousel */}
            <div className="w-screen flex justify-center">
                <Carousel
                    className="w-full max-w-sm"
                    ref={emblaRef}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselPrevious />
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-full">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}

export default SingleSellerPage
