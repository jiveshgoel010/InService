import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HoverEffect } from "../../components/ui/card-hover-effect";

function Index() {

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

    const projects = [
        {
            title: "Digital Transformation",
            description: "We empower local businesses to thrive in the digital age. By transforming traditional operations with cutting-edge technology and online solutions, we help businesses transition from local to digital-first, boosting their visibility, efficiency, and growth potential.",
            link: "/"
        },
        {
            title: "Global Customer Acquisition",
            description: "Going global is key to scaling any business. We specialize in helping businesses expand beyond local markets, connecting them with global customers through strategic digital marketing, e-commerce solutions, and targeted online campaigns, enabling businesses to grow their brand internationally.",
            link: "/"
        },
        {
            title: "Data-Driven Insights",
            description: "Success in the digital world is fueled by informed decision-making. We provide data-driven insights and analytics to help businesses understand market trends, optimize their operations, and make smarter, real-time decisions, ensuring sustainable growth and competitiveness.",
            link: "/"
        }
    ];


  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <section className="min-h-screen w-full md:w-4/5 mx-auto flex flex-col lg:flex-row gap-6 items-center px-4">
        {/* Text Content */}
        <div className="w-full lg:w-3/5 flex flex-col gap-6">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-lightBlack">
            We create platform for a
            <span className="text-lightBlue"> service-centric</span> future
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-Gray px-2 sm:px-4 lg:px-0">
            ~ We are a platform designed to access different services. We are in
            the business to design smarter solutions and experiences so our
            partners and their users can thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link to="#" className="flex w-full sm:w-1/2 justify-center">
              <Button className="bg-mediumBlue w-full sm:w-3/4">
                Get Started
              </Button>
            </Link>
            <Link to="#" className="flex w-full sm:w-1/2 justify-center">
              <Button className="bg-mediumBlue w-full sm:w-3/4">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
        {/* Image */}
        <div className="w-full lg:w-2/5 flex justify-center mt-6 lg:mt-0">
          <img
            src="/hero_front.gif"
            alt="hero"
            className="rounded-xl shadow-xl w-3/4 sm:w-2/3 md:w-full lg:w-auto"
          />
        </div>
      </section>

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

      {/* What We Do Section */}
      <section className="relative mb-10 flex flex-col justify-center items-center mt-10 w-full md:w-4/5 mx-auto px-4">
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-darkBlue mb-10 text-center">
          WHAT WE DO!
        </p>
        <div className="w-full">
          <HoverEffect items={projects} />
        </div>
      </section>
    </div>
  );
}

export default Index;