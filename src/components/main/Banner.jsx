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
                        {slides.map((slide, index) => (
                            <CarouselItem key={index} className="basis-full">
                                <div className="p-1">
                                    <Card className="w-full h-48 sm:h-64 md:h-64 lg:h-64">
                                        <CardContent
                                            className="w-full h-full flex items-center gap-20 justify-center p-6 rounded-lg"
                                            style={{
                                                backgroundImage: `url(/backgrounbanner.jpg)`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundRepeat: 'no-repeat',
                                            }}
                                        >
                                            <img src={slide.banner} alt="Banner" className="h-[15rem] w-[15rem]" />
                                            <p>
                                                <span className="text-4xl font-bold">{slide.title}</span>
                                                <br />
                                                <span className="text-xl">{slide.description}</span>
                                            </p>
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

const slides = [
    {
        
        banner: '/plumberbanner.png',
        title: 'Plumbing Services (50% Off)',
        description: 'Get your plumbing issues fixed by the best plumbers in town!',
    },
    {
        
        banner: '/electricalBanner.png',
        title: 'Electrical Services (30% Off)',
        description: 'Expert electricians to solve all your electrical problems!',
    },
    {
        banner: '/cleaningBanner.png',
        title: 'Cleaning Services (20% Off)',
        description: 'Professional cleaning services for your home and office!',
    },
    {
        banner: '/gardeningBanner.png',
        title: 'Gardening Services (40% Off)',
        description: 'Top-notch gardening services to beautify your garden!',
    },
    {
        banner: '/painterBanner.png',
        title: 'Painting Services (25% Off)',
        description: 'High-quality painting services for your home and office!',
    },
];

export default Banner
