import { useTempUnit } from "../context/TemperatureContext";

const WeatherCard = ({ weatherData }) => {
  const { isCelcius, toggleTempUnit } = useTempUnit();

  return (
    <div className="my-5 bg-slate-100 p-5 rounded-md">
      <div className="font-bold border-b-2 text-left pb-2 relative">
        Current Weather
        <span className="ml-auto absolute right-0">
          {new Date(weatherData.location.localtime).toLocaleTimeString()}
        </span>
      </div>

      <div className="flex pt-2 text-4xl">
        <h2>
          {weatherData.location.name}, {weatherData.location.region},{" "}
          {weatherData.location.country}
        </h2>
      </div>
      <div className="flex pt-5">
        {/* logo and temperature */}
        <div className="flex flex-row flex-1">
          <div className=" flex">
            <div
              className="flex flex-row flex-1"
              width={"64px"}
              height={"64px"}
            >
              <img
                src={weatherData.current.condition.icon}
                alt={weatherData.current.condition.text}
              />
            </div>
            <div className="flex flex-row-1  text-slate-700 ml-5">
              <span className="text-5xl font-bold">
                {isCelcius
                  ? weatherData.current.temp_c
                  : weatherData.current.temp_f}
              </span>
              <span
                className={`${
                  isCelcius ? " font-bold" : " text-slate-700"
                } mr-1 cursor-pointer`}
                onClick={() => toggleTempUnit(true)}
              >
                °C
              </span>
              |{" "}
              <span
                className={`${
                  !isCelcius ? " font-bold" : " text-slate-500"
                } ml-1 cursor-pointer`}
                onClick={() => toggleTempUnit(false)}
              >
                °F
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col text-left">
          <div>
            Humidity :{" "}
            <span className="pl-5 font-bold">
              {weatherData.current.humidity} %
            </span>
          </div>
          <div>
            Pressure :{" "}
            <span className="pl-5 font-bold">
              {weatherData.current.pressure_mb} mb
            </span>
          </div>
          <div>
            Visibility :{" "}
            <span className="pl-5 font-bold">
              {weatherData.current.vis_km} km
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
