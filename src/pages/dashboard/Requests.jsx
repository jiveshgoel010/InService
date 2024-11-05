// /* eslint-disable no-unused-vars */
import { useState } from 'react'
import RequestCard from '@/components/dashboard/RequestCard'

const Requests = () => {
  const [requests, setRequests] = useState([
    { id: 1, type: 'open' },
    { id: 2, type: 'open' },
    { id: 3, type: 'open' },
    { id: 4, type: 'progress' },
    { id: 5, type: 'progress' },
    { id: 6, type: 'completed' },
    { id: 7, type: 'completed' },
    { id: 8, type: 'completed' },
  ]);

  const [activeFilter, setActiveFilter] = useState('open');

  const handleAccept = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, type: 'progress' } : request
      )
    );
  };

  const filteredRequests = requests.filter(request => request.type === activeFilter);

  return (
    <>
      <div className="w-full h-full p-4 flex flex-col gap-10">
        {/* Filter Buttons */}
        <div className="flex gap-2 p-1 rounded-lg max-w-fit border border-black">
          {['open', 'progress', 'completed'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`py-1 px-2 font-medium rounded-lg ${
                activeFilter === filter ? 'bg-black text-white' : 'hover:bg-lightBlack hover:text-white'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Request Cards */}
        <div className="grid grid-cols-2 gap-4">
          {filteredRequests.map((request) => (
            <RequestCard
              key={request.id}
              type={request.type}
              onAccept={() => handleAccept(request.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Requests;

