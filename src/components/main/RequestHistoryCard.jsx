/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { useState } from 'react';

function RequestHistoryCard(props) {
  const { serviceName, description, vendorName, pricingType, price, status, startDate } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-100 text-green-700 border-green-500';
      case 'Rejected':
        return 'bg-red-100 text-red-700 border-red-500';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700 border-blue-500';
      default:
        return '';
    }
  };

  return (
    <div className="relative flex flex-col gap-3 h-full border border-gray-300 rounded-xl p-5">
      <p className="text-lg sm:text-2xl font-medium text-mediumBlue hover:underline">
        {serviceName}
      </p>
      <p
        className={`h-[70px] overflow-y-scroll scrollbar-hide text-sm md:text-base`}
        onClick={toggleExpand}
        style={{ cursor: 'pointer' }}
      >
        {description}
      </p>
      <p className='flex gap-4 items-center'>
        <span className="text-sm sm:text-base">Vendor:</span>
        <Link to='/profile' className="font-semibold text-sm sm:text-lg text-mediumBlue underline">{vendorName}</Link>
      </p>
      <p className="font-semibold text-Gray/95 text-sm sm:text-base">
        {pricingType} : Rs.{price}
      </p>

      <div className='flex justify-between items-center'>
        <p className="text-Gray/95 font-semibold text-sm sm:text-base">
          Start date : {startDate}
        </p>
        <p className={`px-3 py-1 rounded-full border text-xs md:text-lg ${getStatusStyles(status)}`}>
          {status}
        </p>
      </div>
    </div>
  );
}

export default RequestHistoryCard;
