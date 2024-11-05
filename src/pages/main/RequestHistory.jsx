import { useState, useEffect } from 'react';
import { History, Search } from 'lucide-react';
import RequestHistoryCard from '@/components/main/RequestHistoryCard';

function RequestHistory() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRequests, setFilteredRequests] = useState(requestHistoryData);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setFilteredRequests(
        requestHistoryData.filter(request =>
          request.serviceName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }, 1000); // 1-second delay

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <div className="my-10">
      <div className="bg-white sm:border sm:border-gray-300 w-full sm:w-[92%] rounded-xl mx-auto flex flex-col">
        <div className="border-b border-gray-300 p-5 lg:p-10 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5">
          <p className="flex gap-3 items-center text-3xl lg:text-4xl font-medium">
            <span>Request History</span>
            <History size={24} className="lg:w-8 lg:h-8" />
          </p>
          <div className="w-full lg:w-1/4 relative">
            <input
              type="text"
              placeholder="Search requests..."
              className="w-full p-2 pl-10 border border-gray-300 rounded-full text-sm lg:text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="p-5 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredRequests.map((request, index) => (
              <div key={index} className="h-full">
                <RequestHistoryCard {...request} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestHistory;

const requestHistoryData = [
    {
      serviceName: "Tanner Spring 3D floor plans",
      description: "Needed a 3d floor plan for a new house, that is being built in the Tanner Spring areahouse, that is being built in the Tanner Spring areahouse, that is being built in the Tanner Spring area. This project requires detailed architectural plans and 3D renderings to visualize the final outcome.",
      vendorName: "Jivi Goel",
      pricingType: "fixed",
      price: "1200",
      status: "Accepted",
      startDate: "12th July 2021"
    },
    {
      serviceName: "Modern Kitchen Renovation",
      description: "Complete renovation of a modern kitchen with new appliances and fixtures.",
      vendorName: "Alex Johnson",
      pricingType: "fixed",
      price: "1500",
      status: "Rejected",
      startDate: "1st August 2021"
    },
    {
      serviceName: "Bathroom Design Inquiry",
      description: "Looking for a modern and functional bathroom design. The design should include space-saving solutions and high-quality materials.",
      vendorName: "Maria Garcia",
      pricingType: "fixed",
      price: "800",
      status: "In Progress",
      startDate: "5th September 2021"
    },
    {
      serviceName: "Office Space Redesign",
      description: "Redesigning the office space to improve productivity and aesthetics. The project includes new furniture, lighting, and layout changes to create a more collaborative environment.",
      vendorName: "David Smith",
      pricingType: "fixed",
      price: "2000",
      status: "Accepted",
      startDate: "15th October 2021"
    },
    {
      serviceName: "Landscape Architecture Proposal",
      description: "Proposal for landscape architecture for a residential property. The design should include a garden, patio, and outdoor seating area.",
      vendorName: "Emma Brown",
      pricingType: "fixed",
      price: "1000",
      status: "Rejected",
      startDate: "20th November 2021"
    }
  ];