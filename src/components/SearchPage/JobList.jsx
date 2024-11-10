import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import JobCard from "./JobCard"; // Assuming you have a JobCard component
import Dropdown from "./Dropdown";

const jobData = [
  {
    postedTime: "9 minutes ago",
    title: "React Native Partner Needed for Ongoing Mobile Projects",
   
    location: "India",
    hourlyRate: "₹2200 - ₹4000",
    estimatedTime: "More than 6 months, 30+ hrs/week",
    description:
      "We're a product studio with a strong focus on web and mobile applications, and we're looking for a reliable partner to take on some of our mobile development work. Tech Stack: Proficiency in Expo, React",
    rating: 4.5,
    category: "house_cleaning",
  },
  {
    postedTime: "18 minutes ago",
    title: "Senior Blockchain developer for building a DeFi Dashboard",
    
    location: "India",
    hourlyRate: "₹900 - ₹1000",
    estimatedTime: "More than 6 months, Less than 30 hrs/week",
    description:
      "We are building a decentralized finance dashboard that shows unrealized profit and loss, which is the difference between what you paid for an investment in the past (cost) and what the investment is worth today (value). The goal of this project is to develop a platform similar to Zapper.",
    rating: 4.0,
    category: "carpentry",
  },
  {
    postedTime: "1 hour ago",
    title: "Full Stack Developer for E-commerce Platform",
   
    location: "Remote",
    hourlyRate: "₹1500 - ₹2500",
    estimatedTime: "3 to 6 months, 20+ hrs/week",
    description:
      "We are looking for a full stack developer to help us build an e-commerce platform. The ideal candidate should have experience with React, Node.js, and MongoDB.",
    rating: 4.8,
    category: "electrician",
  },
  {
    postedTime: "2 hours ago",
    title: "UI/UX Designer for Mobile App",
    
    location: "USA",
    hourlyRate: "₹2000 - ₹3000",
    estimatedTime: "1 to 3 months, 10+ hrs/week",
    description:
      "We need a UI/UX designer to create a user-friendly interface for our mobile app. Experience with Figma and Adobe XD is required.",
    rating: 3.9,
    category: "plumbing",
  },
  {
    postedTime: "3 hours ago",
    title: "Backend Developer for API Integration",
   
    location: "UK",
    hourlyRate: "₹1800 - ₹2800",
    estimatedTime: "More than 6 months, 40+ hrs/week",
    description:
      "Looking for a backend developer to integrate third-party APIs into our system. Must be proficient in Python and Django.",
    rating: 4.2,
    category: "gardening",
  },
];

const JobList = ({ selectedCategory, priceRange,searchQuery }) => {
  const [filter, setFilter] = useState("newest");
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  useEffect(() => {
    const sortedJobs = [...jobData].sort((a, b) => {
      if (filter === "newest") {
        return new Date(b.postedTime) - new Date(a.postedTime);
      }
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
        (searchQuery === "" || job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.description.toLowerCase().includes(searchQuery.toLowerCase()))

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