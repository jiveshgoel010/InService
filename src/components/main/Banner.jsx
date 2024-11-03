/* eslint-disable no-unused-vars */
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from '../ui/card'
import AutoPlay from 'embla-carousel-autoplay'

function Banner() {
    return (
        <div className="w-full flex flex-col">
            <p className="text-4xl font-semibold w-[90%] mx-auto mb-5">Discover the Hottest Services Everyone&apos;s Talking About!</p>

            <div className="w-full flex justify-center items-center">
                <Carousel
                    className="w-[90%]"
                    opts={{
                        loop: true,
                    }}
                    plugins={[
                        AutoPlay({ delay: 4000 })
                    ]}
                >
                    {/* Previous Button */}
                    <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
                        &#10094; {/* Left Arrow Icon */}
                    </CarouselPrevious>

                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-full">
                                <div className="p-1">
                                    <Card className="w-full h-48 sm:h-64 md:h-64 lg:h-64">
                                        <CardContent className="w-full h-full flex items-center justify-center p-6">
                                            <span className="text-4xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* Next Button */}
                    <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10">
                        &#10095; {/* Right Arrow Icon */}
                    </CarouselNext>
                </Carousel>
            </div>
        </div>
    )
}

export default Banner
