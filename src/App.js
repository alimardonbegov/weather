import React, { useEffect, useState } from "react";
import WeatherService from "./API/WeatherService";
import "./App.css";
import CityCard from "./components/CityCard";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [weather, setWeather] = useState([
        { city: "moscow", weather: "" },
        { city: "kazan", weather: "" },
        { city: "togliatti", weather: "" },
        { city: "herceg novi", weather: "" },
    ]);
    const [input, setInput] = useState("");

    async function getWeatherByCity() {
        weather.map(async (el) => {
            const response = await WeatherService.weather(el.city);
            const ind = weather.findIndex((c) => c.city === el.city);
            weather[ind].weather = response.data;
            setTimeout(() => {
                setIsLoading(false);
            }, 1000);
        });
    }

    async function checkWeather(e) {
        setIsLoading(true);
        e.preventDefault();
        setWeather((prevValue) => {
            return [...prevValue, { city: input }];
        });
        getWeatherByCity();
    }

    useEffect(() => {
        getWeatherByCity();
    }, []);

    return (
        <div className="App">
            <h1 className="app-name">Weather app</h1>
            {/* <form>
                <input
                    value={input}
                    placeholder="Citi"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={checkWeather}> Check the weather</button>
            </form> */}
            {!isLoading && (
                <div className="list-of-city">
                    <CityCard weather={weather} />
                </div>
            )}
        </div>
    );
}

export default App;
