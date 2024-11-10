import { useState } from "react";
import PropTypes from 'prop-types';

const JobRating = ({ value, onChange }) => {
  const [selectedRating, setSelectedRating] = useState(value);

  const handleChange = (rating) => {
    const newRating = selectedRating === rating ? null : rating;
    setSelectedRating(newRating);
    onChange(newRating);
  };

  return (
    <div className="flex flex-col space-y-2">
      
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="rating-4"
          checked={selectedRating === 4}
          onChange={() => handleChange(4)}
        />
        <label htmlFor="rating-4" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          4 ★ & above
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="rating-3"
          checked={selectedRating === 3}
          onChange={() => handleChange(3)}
        />
        <label htmlFor="rating-3" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          3 ★ & above
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="rating-2"
          checked={selectedRating === 2}
          onChange={() => handleChange(2)}
        />
        <label htmlFor="rating-2" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          2 ★ & above
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="rating-1"
          checked={selectedRating === 1}
          onChange={() => handleChange(1)}
        />
        <label htmlFor="rating-1" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          1 ★ & above
        </label>
      </div>
    </div>
  );
};

JobRating.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default JobRating;