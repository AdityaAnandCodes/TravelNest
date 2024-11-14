// FilterOption.js
const FilterOption = ({ categories, onFilterChange }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <label htmlFor="filter" className="mr-3 text-white font-medium">
        Filter by Category:
      </label>
      <select
        id="filter"
        onChange={(e) => onFilterChange(e.target.value)}
        className="p-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none"
      >
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterOption;
