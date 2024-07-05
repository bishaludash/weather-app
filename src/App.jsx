import React, { useEffect, useState } from "react";
import { fetchWeather } from "./api/fetchWeather";
import SearchBar from "./component/SearchBar";
import ErrorMessageSnack from "./component/ErrorMessageSnack";
import WeatherCard from "./component/WeatherCard";
import Spinner from "./component/Spinner";
import Cities from "./component/Cities";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [cities, setCities] = useState([]);

  useEffect(() => {
    const cachedCities = JSON.parse(localStorage.getItem("cities"));
    if (cachedCities) {
      setCities(cachedCities);
    }
  }, []);

  const getCityWeather = async (city) => {
    try {
      setIsLoading(true);
      const data = await fetchWeather(city);
      setWeatherData(data);
      setError(null);

      // update cities state and localstorage
      const temp_cities = [...cities, cityName];
      setCities(temp_cities);
      localStorage.setItem("cities", JSON.stringify(temp_cities));
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = async (e) => {
    if (e.key === "Enter") {
      if (!cityName) {
        setError("Enter city name");
        return false;
      }
      // fetch data from api
      await getCityWeather(cityName);

      //cleanup
      setCityName("");
    }
  };

  return (
    <div className=" bg-gradient-to-r from-sky-500 to-indigo-500 text-center items-center h-screen xl:p-40 sm:p-10">
      {/* App Title */}
      <h1 className=" text-5xl font-bold font-mono py-5 ">
        Budash Weather App
      </h1>

      {/* container */}
      <div className="xl:w-2/4 sm:p-5 m-auto">
        <SearchBar
          cityName={cityName}
          setCityName={setCityName}
          fetchData={fetchData}
        />
        {isLoading && <Spinner />}

        <ErrorMessageSnack error={error} />

        {weatherData && <WeatherCard weatherData={weatherData} />}

        <Cities cities={cities} getCityWeather={getCityWeather} />
      </div>
    </div>
  );
};

export default App;
