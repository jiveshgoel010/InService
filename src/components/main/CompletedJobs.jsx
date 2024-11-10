/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Quote } from "lucide-react";
import { FaStar } from "react-icons/fa";

function CompletedJobs(props) {
    const { serviceName, startDate, endDate, price, message = "No feedback given" } = props;
    const icons = Array.from({ length: 5 });

    return (
        <div className="flex flex-col gap-2 p-4 sm:p-6 md:p-8 lg:p-1  rounded-lg  w-full">
            {/* Service Name */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-mediumBlue">
                {serviceName}
            </p>
            
            {/* Ratings and Date */}
            <div className="flex gap-2 items-center text-lightBlack/60 font-medium text-sm sm:text-base">
                <span className="flex gap-1 text-yellow-500">
                    {icons.map((_, index) => (
                        <FaStar key={index} size={15} />
                    ))}
                </span>
                <p>5.00</p>
                <p>|</p>
                <p>{startDate} - {endDate}</p>
            </div>
            
            {/* Feedback Message */}
            <p className="mt-2 text-lightBlack/80 text-sm sm:text-base">
                &quot; {message} &quot;
            </p>
            
            {/* Price Info */}
            <div className="mt-2 flex justify-between text-lightBlack/60 font-semibold text-sm sm:text-base">
                <span>Rs. {price}</span>
                <span>Fixed Price</span>
            </div>
        </div>
    );
}

export default CompletedJobs;
