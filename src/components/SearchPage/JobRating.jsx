import { Checkbox } from "@/components/ui/checkbox";

const JobRating = () => {
  return (
    <div className="flex flex-col space-y-2 p-3 text-slate-600">
      <div className="flex items-center space-x-2 ">
        <Checkbox id="rating-4" />
        <label
          htmlFor="rating-4"
          className="text-md  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          4 ★ & above
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="rating-3" />
        <label
          htmlFor="rating-3"
          className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          3 ★ & above
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="rating-2" />
        <label
          htmlFor="rating-2"
          className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          2 ★ & above
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="rating-1" />
        <label
          htmlFor="rating-1"
          className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          1 ★ & above
        </label>
      </div>
    </div>
  );
};

export default JobRating;