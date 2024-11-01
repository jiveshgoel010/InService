/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from '../../components/ui/card'
import Autoplay from "embla-carousel-autoplay"

const cardData = [
  "Hire a social media manager",
  "Get your website designed",
  "Want to get your house painted?",
  "Hire a content writer",
  "Get your own app designed",
  "E-commerce site photography",
  "SEO for your website",
]
const projects = [
  {
    title: "Digital Transformation",
    description:
      "We empower local businesses to thrive in the digital age. By transforming traditional operations with cutting-edge technology and online solutions, we help businesses transition from local to digital-first, boosting their visibility, efficiency, and growth potential.",
    link: "/",
  },
  {
    title: "Global Customer Acquisition",
    description:
      "Going global is key to scaling any business. We specialize in helping businesses expand beyond local markets, connecting them with global customers through strategic digital marketing, e-commerce solutions, and targeted online campaigns, enabling businesses to grow their brand internationally.",
    link: "/",
  },
  {
    title: "Data-Driven Insights",
    description:
      "Success in the digital world is fueled by informed decision-making. We provide data-driven insights and analytics to help businesses understand market trends, optimize their operations, and make smarter, real-time decisions, ensuring sustainable growth and competitiveness.",
    link: "/",
  },
];

function Index() {
  return (
    <div className="flex flex-col gap-8 p-4">
      {/* Hero Section */}
      <div className="bg-white border border-gray-300 rounded-lg flex justify-between w-1/2 mx-auto">
        <div className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-4xl">We connect People to bring Ideas into Life !!</h1>
            <h3 className="text-gray-600">Join a community where skills meet opportunity, transforming dreams into success.</h3>
          </div>
          <div className="">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              orientation="vertical"
              className="w-full max-w-xs"
              plugins={[
                Autoplay({ delay: 2500 }),
              ]}>
              <CarouselContent className="-mt-1 h-[120px] flex flex-col items-start">
                {cardData.map((item, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/10">
                    <div className="p-1 flex items-center justify-center"> {/* Added flex properties here */}
                      <Card className="border border-gray-600 rounded-full h-[40px] w-auto"> {/* Set width to auto */}
                        <div className="flex items-center justify-center h-full"> {/* Ensure the content is centered vertically */}
                          <span className="text-gray-600 text-sm">&nbsp; &quot; {item} &quot; &nbsp;</span>
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <img src="/asset-6.png" alt="" className="h-[]" />
        </div>
      </div>

      {/* India Image Section */}
      <section className="relative mb-10">
        <img
          src="/BW_india.jpg"
          alt="India"
          className="mx-auto m-2 w-5/6 rounded-xl shadow-xl"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-White text-center">
            Connecting INDIA to Mainstream!
          </p>
        </div>
      </section>

    </div>
  );
}

export default Index;

