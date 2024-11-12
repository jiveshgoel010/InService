import JobList from "./JobList";
import PriceRangeFilter from "./PriceRangeFilter";
import { useState } from "react";
import Dropdown from "./Dropdown";
import JobRating from "./JobRating";

function SearchPage() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilter = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    { value: "all", label: "All" },
    { value: "home_services", label: "Home Services" },
    { value: "carpentry", label: "Carpentry" },
    { value: "electrician", label: "Electrician" },
    { value: "plumbing", label: "Plumbing" },
    { value: "gardening", label: "Gardening" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="flex flex-col rounded-none px-4 md:px-12  bg-white my-10">
      <div className="flex">
        <div className="flex overflow-hidden gap-2.5 md:mb-2 self-start px-4 py-3 text-sm tracking-wide whitespace-nowrap border border-gray-200 border-solid rounded-[160px] text-stone-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/acc357d2b8d7fa88b8cfc24f19cd721def0a75dedf280b08212e48005384a3c3?placeholderIfAbsent=true&apiKey=a47822eff5b2450ea0b6389b3ea53a3d"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <input
            className="flex-auto my-auto max-md:max-w-full border-none outline-none bg-transparent md:w-[1000px] max-md:w-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          onClick={toggleFilter}
          className=" flex md:hidden w-12 p-2 border  ml-24 rounded-xl"
        >
          {isOpen ? (
            <img src="/close.png" alt="" />
          ) : (
            <img src="/filter.png" alt="" />
          )}
        </button>
      </div>

      <div className=" w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
            {isOpen && (
              <div className="flex flex-col w-full max-md:mt-8">
                <span>Category</span>
                <Dropdown
                  label="Category"
                  items={items}
                  onChange={(value) => setSelectedCategory(value)}
                />{" "}
                <span>Pricing</span>
                <PriceRangeFilter
                  min={0}
                  max={10000}
                  value={priceRange}
                  onChange={(value) => setPriceRange(value)}
                />{" "}
                <span>Ratings</span>
                <JobRating />{" "}
              </div>
            )}
            <div className="hidden md:block">
              <span>Category</span>
              <Dropdown
                label="Category"
                items={items}
                onChange={(value) => setSelectedCategory(value)}
              />
              <span>Pricing</span>
              <PriceRangeFilter
                min={0}
                max={10000}
                value={priceRange}
                onChange={(value) => setPriceRange(value)}
              />
              <span>Ratings</span>
              <JobRating
                value={selectedRating}
                onChange={(value) => setSelectedRating(value)}
              />
            </div>
          </div>
          <JobList
            selectedCategory={selectedCategory}
            priceRange={priceRange}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
