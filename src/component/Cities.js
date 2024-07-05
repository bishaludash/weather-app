import React from "react";

const Cities = ({ cities, getCityWeather }) => {
  return (
    <div>
      {cities.length > 0 && (
        <div className=" m-auto bg-white rounded-md text-left p-3">
          <h2 className=" font-bold text-3xl mb-2">Recent </h2>
          {cities.length > 0 &&
            cities.map((cityname, key) => (
              <div
                className="border-b capitalize cursor-pointer"
                key={key}
                onClick={() => getCityWeather(cityname)}
              >
                {cityname}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Cities;
