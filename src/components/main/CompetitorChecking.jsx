import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react'; // Import an icon representing search or monitoring

function CompetitorChecking() {
  return (
    <div className="mx-auto rounded-xl flex justify-center">
      <CardSpotlight className="w-full text-white flex flex-col sm:flex-row justify-around items-center gap-3 p-[3.75rem]">
        <div className="flex gap-2">
          <Search size={40} className="z-20 mb-4 sm:mb-0" />
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-semibold z-20 text-center sm:text-left hover:golden-outline">
            Stay ahead from your competitors !
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-4 sm:mt-0">
          <Button className="bg-white text-black z-20 hover:bg-white text-xs sm:text-lg">
            Competitor Analysis
          </Button>
        </div>
      </CardSpotlight>
    </div>
  );
}

export default CompetitorChecking;