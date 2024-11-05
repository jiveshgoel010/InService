import { useState } from "react";
const PriceRangeFilter = () => {
  const [price, setPrice] = useState(0);
  return (
    <form className="p-3">
      <h5>Price: ₹0 - ₹{price}</h5>
      <input
        className=" w-[180px] cursor-pointer bg-black ransition duration-200 ease-in-out"
        type="range"
        min="0"
        max="10000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
    </form>
  );
};

export default PriceRangeFilter;
