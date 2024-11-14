// SortOption.js
import { useState } from "react";

const SortOption = ({ onSortChange }) => {
  const [sortOption, setSortOption] = useState("");

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
    onSortChange(selectedOption);
  };

  return (
    <div className="flex items-center justify-between mb-6">
      <label htmlFor="sort" className="mr-3 text-white font-medium">
        Sort by:
      </label>
      <select
        id="sort"
        value={sortOption}
        onChange={handleSortChange}
        className="p-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none"
      >
        <option value="">Select</option>
        <option value="name">Name</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="temperature">Temperature</option>
      </select>
    </div>
  );
};

export default SortOption;
