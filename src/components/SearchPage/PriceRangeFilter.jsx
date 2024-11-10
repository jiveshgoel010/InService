import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const PriceRangeFilter = ({ min, max, onChange }) => {
  const [price, setPrice] = useState([min, max]);

  useEffect(() => {
    setPrice([min, max]);
  }, [min, max]);

  const handleChange = (e) => {
    const newValue = [min, e.target.valueAsNumber];
    setPrice(newValue);
    onChange(newValue);
  };

  return (
    <form className="p-3">
      <h5>Price: ₹{price[0]} - ₹{price[1]}</h5>
      <input
        className="w-[200px] cursor-pointer transition duration-200 ease-in-out"
        type="range"
        min={min}
        max={max}
        value={price[1]}
        onChange={handleChange}
      />
    </form>
  );
};

PriceRangeFilter.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PriceRangeFilter;