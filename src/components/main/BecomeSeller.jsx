import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { Gem } from 'lucide-react';
// import "./css/letterHover"

function BecomeSeller() {
  return (
    <div className="w-full mx-auto rounded-xl flex justify-center p-4">
      <CardSpotlight className="w-full sm:w-[90%] text-white flex flex-col sm:flex-row justify-around items-center gap-2 p-[3.75rem]">
        <Gem size={40} className="z-20 mb-4 sm:mb-0 sm:size-[30]" />
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold z-20 text-center sm:text-left hover:golden-outline">
          Unlock new possibilities by listing your service today!
        </p>
        <div className="flex flex-col gap-3 mt-4 sm:mt-0">
          <Button className="bg-white text-black z-20 hover:bg-white">
            Become a Vendor
          </Button>
        </div>
      </CardSpotlight>
    </div>
  );
}

export default BecomeSeller;