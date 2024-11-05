
import { Button } from "@/components/ui/button";
import { MapPin } from 'lucide-react';
import { FaCrown } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { IoHeartCircleOutline } from "react-icons/io5";
import { BadgeIndianRupee } from 'lucide-react';
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MdWorkHistory } from "react-icons/md";
import CompletedJobs from "@/components/main/CompletedJobs";
import InProgressJobs from "@/components/main/InProgressJobs";

function ProfilePageVendor() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const [activeSection, setActiveSection] = useState('completed');


    const completedCount = completedJobsData.length;
    const inprogressCount = inProgressData.length;

    return (
        <div className="p-4 lg:p-10">
            <div className="w-full sm:max-w-[90%]  mx-auto border border-gray-300 bg-white rounded-xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end  border-b border-gray-300 p-4 lg:p-10">
                    <div className="flex gap-4 lg:gap-5 items-center">
                        <img src="/profile.png" alt="profile" className="w-16 h-16 lg:w-20 lg:h-20 rounded-full" />
                        <div className="flex flex-col gap-2 lg:gap-4">
                            <p className="text-2xl lg:text-3xl font-semibold">Jivi Goel</p>
                            <p className='text-gray-500 flex gap-2 lg:gap-3 items-center'>
                                <MapPin size={18} />
                                Rourkela, Odisha
                            </p>
                            <p className='flex gap-2 lg:gap-3 items-center'>
                                <FaCrown size={18} color='mediumBlue' />
                                <p className="text-sm lg:text-lg">100% Job Success</p>
                                <MdStars size={18} color='mediumBlue' />
                                <p className="text-sm lg:text-lg">Top Rated</p>
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-2 lg:gap-4 items-end mt-4 lg:mt-0'>
                        <Button className='px-6 lg:px-10 hover:bg-mediumBlue'>Hire</Button>
                        <IoHeartCircleOutline size={32} lg:size={40} />
                    </div>
                </div>
                <div className="border-b border-gray-300 p-4 lg:p-10 flex flex-col gap-4 lg:gap-5">
                    <div className="flex justify-between items-center lg:items-center">
                        <p className="text-xl lg:text-3xl font-medium">Architect | Interior Designer</p>
                        <div className="flex gap-1 lg:gap-2 items-center">
                            <BadgeIndianRupee size={18} lg:size={20} />
                            <p className="text-sm  sm:text-lg md:text-xl lg:text-2xl font-medium">500.0/hr</p>
                        </div>
                    </div>
                    <ul className="text-sm lg:text-base">
                        {successStories.map((story, index) => (
                            <li key={index} className="flex gap-2 items-center mb-1">
                                <IoIosCheckmarkCircleOutline className="text-mediumBlue" />
                                <p>{story}</p>
                            </li>
                        ))}
                    </ul>
                    <p className="text-sm lg:text-base">
                        I bring life to your ideas, making them in photorealistic 3D. My purpose is to design your living spaces and help you to project yourself into the future to visualize them with ultra-realistic 3D renderings. My job is to make a complete interior design study to save your time and money.
                    </p>
                    {showMore && (
                        <>
                            <div>
                                <p className="mb-2">Services I provide:</p>
                                <ul>
                                    {services.map((service, index) => (
                                        <li key={index} className="flex gap-2 items-center mb-1">
                                            <IoIosCheckmarkCircleOutline className="text-mediumBlue" />
                                            <p>{service}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <p className="mb-2">When/Why do you need me?</p>
                                <ul>
                                    {needs.map((service, index) => (
                                        <li key={index} className="flex gap-2 items-center mb-1">
                                            <IoIosCheckmarkCircleOutline className="text-mediumBlue" />
                                            <p>{service}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p className="text-sm lg:text-base">
                                My clients can expect meeting deadlines, satisfying results, and a positive attitude. Feel free to reach me for any clarification on my experience or expertise. I will be glad to help you.
                            </p>
                        </>
                    )}
                    <Link onClick={toggleShowMore} className="mt-3 text-mediumBlue underline text-sm lg:text-base">
                        {showMore ? 'Show Less' : 'Show More'}
                    </Link>
                </div>
                <div className="p-4 lg:p-10 flex flex-col gap-8 lg:gap-10">
                    <p className="flex gap-3 lg:gap-5 items-center text-xl md:text-2xl lg:text-3xl font-medium">
                        Work History <MdWorkHistory size={26} lg:size={30} color="mediumBlue" />
                    </p>
                    <div className="flex gap-2 lg:gap-4">
                        <button
                            className={`px-3 lg:px-4 py-2 rounded ${activeSection === 'completed' ? 'bg-mediumBlue text-white' : 'bg-gray-200'}`}
                            onClick={() => setActiveSection('completed')}
                        >
                            <p className="text-sm sm:text-lg">

                                Completed Jobs ({completedCount})
                            </p>
                        </button>
                        <button
                            className={`px-3 lg:px-4 py-2 rounded ${activeSection === 'inProgress' ? 'bg-mediumBlue text-white' : 'bg-gray-200'}`}
                            onClick={() => setActiveSection('inProgress')}
                        >
                            <p className="text-sm sm:text-lg">

                                In Progress ({inprogressCount})
                            </p>
                        </button>
                    </div>
                    <div>
                        {activeSection === 'completed' ? (
                            completedJobsData.map((completed, index) => (
                                <div key={index} className="border-t border-gray-300 py-6 lg:py-10">
                                    <CompletedJobs
                                        serviceName={completed.serviceName}
                                        startDate={completed.startDate}
                                        endDate={completed.endDate}
                                        price={completed.price}
                                        message={completed.message}
                                    />
                                </div>
                            ))
                        ) : (
                            inProgressData.map((progress, index) => (
                                <div key={index} className="border-t border-gray-300 py-6 lg:py-10">
                                    <InProgressJobs
                                        serviceName={progress.serviceName}
                                        startDate={progress.startDate}
                                        price={progress.price}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>

    )
}

const successStories = ["5 YEARS EXPERIENCE", "+200 SUCCESSFULL INTERIOR RENOVATIONS", "FULL-TIME FREELANCER"]
const services = ["3D ultra-realistic interior renderings", "360° 3D virtual renovations", "3D floor plans", "3D ultra-realistic exterior renderings"]
const needs = ["Design or renovate your living spaces.", "Reimagine or renovate your kitchen, living room, bathroom or bedrooms.", "The need to change colors or furniture.", "Avoid wasting time and money"]

const completedJobsData = [
    {
        serviceName: "Tanner Spring 3D floor plans",
        startDate: "Sep 28, 2024",
        endDate: "Oct 8, 2024",
        price: "500.00",
        message: "Great to work with and got exactly what we wanted."
    },
    {
        serviceName: "Modern Kitchen Renovation",
        startDate: "Aug 15, 2024",
        endDate: "Sep 1, 2024",
        price: "1200.00",
        message: "Excellent craftsmanship and attention to detail."
    },
    {
        serviceName: "Luxury Bathroom Design",
        startDate: "Jul 10, 2024",
        endDate: "Jul 25, 2024",
        price: "800.00"
    },
    {
        serviceName: "Outdoor Patio 3D Rendering",
        startDate: "Jun 5, 2024",
        endDate: "Jun 20, 2024",
        price: "600.00",
        message: "Very professional and delivered on time."
    },
    {
        serviceName: "Living Room Interior Design",
        startDate: "May 1, 2024",
        endDate: "May 15, 2024",
        price: "700.00"
    }
];

const inProgressData = [
    {
        serviceName: "Residential Building Design",
        startDate: "Jan 15, 2024",
        price: "1500.00"
    },
    {
        serviceName: "Commercial Complex Design",
        startDate: "Feb 20, 2024",
        price: "3000.00"
    },
    {
        serviceName: "Interior Design Consultation",
        startDate: "Mar 5, 2024",
        price: "500.00"
    },
    {
        serviceName: "Landscape Architecture",
        startDate: "Apr 10, 2024",
        price: "1200.00"
    }
];


export default ProfilePageVendor
