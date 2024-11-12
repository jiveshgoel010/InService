/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import JobCard from "./JobCard"; // Assuming you have a JobCard component
import Dropdown from "./Dropdown";

const homeServicesData = [
  {
    serviceName: "House Cleaning",
    location: "Mumbai, India",
    hourlyRate: "₹500 - ₹800",
    experience: "2+ years",
    description: "Professional house cleaning services to keep your home spotless and tidy. Our experienced cleaners use eco-friendly products to ensure a safe and clean environment.",
    rating: 4.7,
    category: "home_services",
    vendorName: "Jivi Goel",
    
  },
  {
    serviceName: "Plumbing Services",
    location: "Delhi, India",
    hourlyRate: "₹700 - ₹1000",
    experience: "5+ years",
    description: "Expert plumbing services to fix leaks, unclog drains, and install new fixtures. Our skilled plumbers are available 24/7 to handle all your plumbing needs.",
    rating: 4.5,
    category: "home_services",
    vendorName: "Suresh Patel",
  },
  {
    serviceName: "Electrical Services",
    location: "Bangalore, India",
    hourlyRate: "₹600 - ₹900",
    experience: "3+ years",
    description: "Reliable electrical services for installations, repairs, and maintenance. Our certified electricians ensure your home's electrical systems are safe and efficient.",
    rating: 4.6,
    category: "home_services",
    vendorName: "Amit Singh",
  },
  {
    serviceName: "Gardening Services",
    location: "Chennai, India",
    hourlyRate: "₹400 - ₹700",
    experience: "4+ years",
    description: "Professional gardening services to maintain your garden and landscape. Our gardeners provide planting, pruning, and lawn care to keep your outdoor space beautiful.",
    rating: 4.8,
    category: "home_services",
    vendorName: "Vinay Rao",
  },
  {
    serviceName: "Painting Services",
    location: "Hyderabad, India",
    hourlyRate: "₹800 - ₹1200",
    experience: "6+ years",
    description: "High-quality painting services for interior and exterior projects. Our experienced painters use premium paints to give your home a fresh and vibrant look.",
    rating: 4.9,
    category: "home_services",
    vendorName: "Manoj Verma",
  },
];


const JobList = ({ selectedCategory, priceRange,searchQuery }) => {
  const [filter, setFilter] = useState("newest");
  const [filteredJobs, setFilteredJobs] = useState(homeServicesData);

  useEffect(() => {
    const sortedJobs = [...homeServicesData].sort((a, b) => {
      
      if (filter === "trending") {
        return parseInt(b.hourlyRate.replace(/[^0-9]/g, "")) - parseInt(a.hourlyRate.replace(/[^0-9]/g, ""));
      }
      if (filter === "top_rated") {
        return b.rating - a.rating;
      }
      if (filter === "price_low_to_high") {
        return parseInt(a.hourlyRate.replace(/[^0-9]/g, "")) - parseInt(b.hourlyRate.replace(/[^0-9]/g, ""));
      }
      if (filter === "price_high_to_low") {
        return parseInt(b.hourlyRate.replace(/[^0-9]/g, "")) - parseInt(a.hourlyRate.replace(/[^0-9]/g, ""));
      }
      return 0;
    });

    const filtered = sortedJobs.filter((job) => {
      const [minPrice, maxPrice] = priceRange;
      const [minRate, maxRate] = job.hourlyRate.split(" - ").map(rate => parseInt(rate.replace(/[^0-9]/g, "")));
      return (
        (selectedCategory === "all" || selectedCategory === "" || job.category === selectedCategory) &&
        maxRate >= minPrice &&
        minRate <= maxPrice&&
        (searchQuery === "" || job.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) || job.description.toLowerCase().includes(searchQuery.toLowerCase()))

      );
    });

    setFilteredJobs(filtered);
  }, [filter, selectedCategory, priceRange,searchQuery]);

  return (
    <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full tracking-wide max-md:mt-8 max-md:max-w-full">
        <div className="flex flex-wrap items-center pb-2.5 pl-5 tracking-wide max-md:pl-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca219c251549820284b598ccbc9f06e1686572b92e27fd1ec467a483cb21651a?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div className="self-stretch my-auto text-base text-center text-green-700">
            Saved jobs
          </div>
          <div className="flex items-center">
            <Dropdown
              label="Filter"
              items={[
                { value: "newest", label: "Newest" },
                { value: "trending", label: "Trending" },
                { value: "top_rated", label: "Top Rated" },
                { value: "price_low_to_high", label: "Price Low to High" },
                { value: "price_high_to_low", label: "Price High to Low" },
              ]}
              onChange={(value) => setFilter(value)}
            />
          </div>
        </div>
      </div>
      <div>
        {filteredJobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

JobList.propTypes = {
  selectedCategory: PropTypes.string,
  priceRange: PropTypes.arrayOf(PropTypes.number).isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default JobList;