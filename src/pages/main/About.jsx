

import { Target, Lightbulb } from 'lucide-react'

const About = () => {
  return (
    <div className="bg-White min-h-screen">
      <div className="w-full bg-lightBlue rounded-2xl text-white mb-10">
  <div className="w-4/5 mx-auto flex justify-center items-center h-[80vh] sm:h-[100vh] md:h-[100vh] lg:h-screen">
    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center px-4">
      We stand firm in our belief that digital should not be a
      distraction; instead, it should act as an enabler of
      human potential.
    </p>
  </div>
</div>

      <div className="w-4/5 h-full mx-auto gap-10 flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row gap-10 mb-10">
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-10">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-center lg:text-left">
              Bringing services at your foot step
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-lightBlack/60 text-center lg:text-left">
              Our Companys mission to empower startups and businesses through superior design and development services, and its vision to be a trusted partner ensuring design requirements are met. It features a clean, modern layout with a combination of text and imagery, including icons and a relevant image, all styled using Tailwind CSS for a responsive design.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <img src="/about_us.gif" className="mx-auto lg:mx-0" alt="About Us" />
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-10 mt-10 mb-10">
          <div className="w-full lg:w-1/2 bg-lightBlue/60 p-10 rounded-lg flex flex-col gap-5">
            <Target size={50} className="mx-auto lg:mx-0" />
            <p className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
              InService Mission
            </p>
            <p className="text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 font-semibold text-lightBlack/60 text-center lg:text-left mx-auto lg:mx-0">
              Our mission is to help startups & businesses compete with industry leaders through our superior design and development services.
            </p>
          </div>

          <div className="w-full lg:w-1/2 bg-lightBlack/30 p-10 rounded-lg flex flex-col gap-5 justify-center">
            <Lightbulb size={50} className="mx-auto lg:mx-0" />
            <p className="text-2xl sm:text-3xl font-bold text-center lg:text-left">
              InService Vision
            </p>
            <p className="text-lg sm:text-xl md:text-2xl w-full lg:w-3/4 font-semibold text-lightBlack/60 text-center lg:text-left mx-auto lg:mx-0">
              We aim to be a company you & your friends can trust. We want you to be confident that your design will match your requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About