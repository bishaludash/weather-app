import React, { useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import SearchBar from "./component/SearchBar";
import ErrorMessageSnack from "./component/ErrorMessageSnack";
import WeatherCard from "./component/WeatherCard";
import Spinner from "./component/Spinner";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);

      try {
        const data = await fetchWeather(cityName);
        setWeatherData(data);
        setCityName("");
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 text-center items-center h-screen p-40">
      {/* App Title */}
      <h1 className=" text-5xl font-bold font-mono my-5 ">
        Budash Weather App
      </h1>

      {/* container */}
      <div className="w-2/4 m-auto">
        <SearchBar
          cityName={cityName}
          setCityName={setCityName}
          fetchData={fetchData}
        />

        {isLoading && <Spinner />}

        {error && <ErrorMessageSnack error={error} />}

        {weatherData && <WeatherCard weatherData={weatherData} />}
      </div>
    </div>
  );
};

export default App;
