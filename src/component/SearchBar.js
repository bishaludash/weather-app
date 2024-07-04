import React from "react";

const SearchBar = ({ cityName, setCityName, fetchData }) => {
  return (
    <div className="my-5">
      <input
        type="text"
        className="
        bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-blue-500 
        focus:border-blue-500 w-2/4  p-2.5 
        "
        placeholder="Enter city name"
        required
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
        onKeyDown={fetchData}
      />
    </div>
  );
};

export default SearchBar;
