import React, { useEffect, useState } from "react";
import "../src/styles/App.scss";
import WeatherService from "./API/WeatherService";
import CityCard from "./components/UI/card/CityCardCurrent";
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
    const [town, setTown] = useState([{ name: "", weather: "", forecast: "" }]);

    function renderPage() {
        setTown([{ name: "", weather: "" }]);
    }

    async function getWeatherByCity() {
        weather.map(async (el) => {
            const response = await WeatherService.currentWeather(el.city);
            const ind = weather.findIndex((c) => c.city === el.city);
            weather[ind].weather = response.data;
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        });
    }

    async function checkWeather(e) {
        e.preventDefault();
        const responseCurrenWeather = await WeatherService.currentWeather(input);
        const responseForecastWeather = await WeatherService.forecastWeather(input);
        setInput("");
        setTown([
            {
                name: input,
                weather: responseCurrenWeather.data,
                forecast: responseForecastWeather.data,
            },
        ]);
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
