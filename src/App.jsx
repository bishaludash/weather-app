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
    const data = await fetchWeather(city);
    setWeatherData(data);
    setError(null);
  };

  const fetchData = async (e) => {
    if (e.key === "Enter") {
      setIsLoading(true);

      try {
        if (!cityName) {
          setError("Enter city name");
          return false;
        }
        // fetch data from api
        getCityWeather(cityName);

        // update cities state
        const temp_cities = [...cities, cityName];
        setCities(temp_cities);
        localStorage.setItem("cities", JSON.stringify(temp_cities));

        //cleanup
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

        <ErrorMessageSnack error={error} />

        {weatherData && <WeatherCard weatherData={weatherData} />}

        <Cities cities={cities} getCityWeather={getCityWeather} />
      </div>
    </div>
  );
};

export default App;
