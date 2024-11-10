/* eslint-disable react/prop-types */
import {
  Briefcase,
  StarIcon,
  BadgeIndianRupee
} from 'lucide-react';
import { useState } from 'react';

function TopRatedClientCard(props) {
  const { name, location, servicename, rate, stars, projects, description } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className='flex justify-center items-center'>
      <div className=" w-[280px] md:w-[300px] lg:w-[300px] bg-white rounded-3xl p-5 flex flex-col gap-5 shadow-lg border">
        <div className="flex justify-between items-center">
          <img src="/profile.png" alt="mission" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col w-3/4">
            <span className="text-lg sm:text-xl font-semibold">{name}</span>
            <span className="text-gray-500 text-xs">{location}</span>
          </div>
        </div>

        <p className={`text-sm sm:text-base ${!isExpanded ? 'line-clamp-2' : ''}`} onClick={toggleDescription} style={{ cursor: 'pointer' }} >
          {servicename}
        </p>

        <div className="flex justify-around items-center text-gray-600">
          <div className="flex gap-2 items-center">
            <BadgeIndianRupee size={20} />
            <p className="text-sm sm:text-base">{rate}</p>
          </div>
          <div className="flex gap-2 items-center">
            <StarIcon size={20} />
            <p className="text-sm sm:text-base">{stars}</p>
          </div>
          <div className="flex gap-2 items-center">
            <Briefcase size={20} />
            <p className="text-sm sm:text-base">{projects}</p>
          </div>
        </div>

        <p className={`text-xs ${!isExpanded ? 'line-clamp-3' : ''}`} onClick={toggleDescription} style={{ cursor: 'pointer' }} >
          {description}
        </p>

        <button className="border-2 border-lightBlack text-lightBlack w-full rounded-lg p-1 hover:bg-lightBlack hover:text-white hover:font-semibold">
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default TopRatedClientCard;