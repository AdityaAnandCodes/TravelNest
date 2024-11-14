// SearchBar.js
const SearchBar = ({ onSearch }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search Destinations..."
        onChange={(e) => onSearch(e.target.value)}
        className="p-2 rounded-md bg-slate-700 text-white border border-slate-600 focus:outline-none w-full"
      />
    </div>
  );
};

export default SearchBar;
