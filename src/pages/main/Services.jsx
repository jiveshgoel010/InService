import BentoGrid from "@/components/main/BentoGrid";

function Services() {
  return (
    <div className="py-20 flex flex-col items-center">
      <div className="w-[92%] flex flex-col gap-20 items-center">
        <div className="flex flex-col gap-10 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] p-6 sm:p-8 md:p-10 bg-white border border-gray-200 rounded-lg shadow-lg">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
            Seamlessly Connected, Effortlessly Served!
          </p>
          <p className="text-base sm:text-lg md:text-xl text-center">
            &quot;Imagine having all the services you need right within reach, from daily essentials to specialized help. We connect you to everything that makes life easier, offering a seamless experience that brings together services for every part of your day. With a few taps, you can access trusted professionals and reliable services that are tailored to your needs—all in the most convenient way possible.&quot;
          </p>
        </div>

        <div className="w-full flex flex-col gap-10">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium">
            Examples of the services that make life easier
          </p>

          <BentoGrid />
        </div>
      </div>
    </div>
  );
}

export default Services;