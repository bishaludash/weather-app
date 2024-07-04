import React from "react";

const Cities = ({ cities, getCityWeather }) => {
  return (
    <div className=" m-auto bg-white rounded-md text-left p-3">
      <h2 className=" font-bold text-3xl mb-2">Recent </h2>
      {cities.map((cityname, key) => (
        <div
          className="border-b capitalize cursor-pointer"
          key={key}
          onClick={() => getCityWeather(cityname)}
        >
          {cityname}
        </div>
      ))}
    </div>
  );
};

export default Cities;
