import Dropdown from "./Dropdown";
import JobCard from "./JobCard";

const jobData = [
  {
    postedTime: "9 minutes ago",
    title: "React Native Partner Needed for Ongoing Mobile Projects",
    paymentVerified: true,
 
    location: "India",
    hourlyRate: "₹2200.00 - ₹4000.00",
    
    estimatedTime: "More than 6 months, 30+ hrs/week",
    description:
      "We're a product studio with a strong focus on web and mobile applications, and we're looking for a reliable partner to take on some of our mobile development work. Tech Stack: Proficiency in Expo, React",
  },
  {
    postedTime: "18 minutes ago",
    title: "Senior Blockchain developer for building a DeFi Dashboard",
    paymentVerified: false,
   
    location: "India",
    hourlyRate: "₹900.00 - ₹1000.00",
    
    estimatedTime: "More than 6 months, Less than 30 hrs/week",
    description:
      "We are building a decentralized finance dashboard that shows unrealized profit and loss, which is the difference between what you paid for an investment in the past (cost) and what the investment is worth today (value). The goal of this project is to develop a platform similar to Zapper. You",
  },
];
const items = [
  { value: "newest", label: "Newest" },
{ value: "most_rated", label: "Most Rated" },
{ value: "trending", label: "Trending" },
];

function JobList() {
  return (
    <div
      data-layername="column"
      className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full"
    >
      <div className="flex flex-col w-full tracking-wide max-md:mt-8 max-md:max-w-full">
        <div
          data-layername="horizontalBorder"
          className="flex flex-wrap  items-center pb-2.5 pl-5 tracking-wide max-md:pl-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca219c251549820284b598ccbc9f06e1686572b92e27fd1ec467a483cb21651a?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          />
          <div
            data-layername="savedJobs"
            className="self-stretch my-auto text-base text-center text-green-700"
          >
            Saved jobs
          </div>
          <div
            data-layername="combobox"
            className="flex md:ml-3  self-stretch text-sm leading-3 bg-white rounded-lg  text-neutral-900"
          >
                  <Dropdown label="Newest" items={items} />
                  </div>
        </div>
        {jobData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
}

export default JobList;
