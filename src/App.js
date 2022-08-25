import React, { useEffect, useState } from "react";
import WeatherService from "./API/WeatherService";
import "../src/styles/App.scss";
import CityCard from "./components/CityCard";
import Header from "./components/Header";
import CityPage from "./components/CityPage";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [weather, setWeather] = useState([
        { city: "moscow", weather: "" },
        { city: "kazan", weather: "" },
        { city: "togliatti", weather: "" },
        { city: "herceg novi", weather: "" },
    ]);
    const [input, setInput] = useState("");
    const [town, setTown] = useState([{ name: "", weather: "" }]);

    function renderPage() {
        setTown([{ name: "", weather: "" }]);
    }

    async function getWeatherByCity() {
        weather.map(async (el) => {
            const response = await WeatherService.weather(el.city);
            const ind = weather.findIndex((c) => c.city === el.city);
            weather[ind].weather = response.data;
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        });
    }

    async function checkWeather(e) {
        e.preventDefault();

        const response = await WeatherService.weather(input);
        setInput("");
        setTown([{ name: input, weather: response.data }]);
    }

    useEffect(() => {
        getWeatherByCity();
    }, []);

    return (
        <div className="App">
            <Header render={renderPage} value={input} onChange={setInput} onClick={checkWeather} />

            {!isLoading && town[0].name === "" ? (
                <div className="list-of-city">
                    <CityCard weather={weather} />
                </div>
            ) : town[0].name !== "" && town[0].weather !== undefined ? (
                <CityPage town={town} />
            ) : (
                <h1> please check city name</h1>
            )}
        </div>
    );
}

export default App;
