import React, { useEffect, useState, useMemo } from "react";
import "../src/styles/App.scss";
import WeatherService from "./API/WeatherService";
import CityCard from "./components/UI/card/CityCardCurrent";
import Header from "./components/Header";
import CityPage from "./components/CityPage";
import geterateResult from "./utils/getForecastByDay";
import Background from "./components/UI/backgorund/Backgorund";
import Loader from "./components/UI/loader/Loader";

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
    let forecastByDay = [];

    function renderPage() {
        setTown([{ name: "", weather: "", forecast: "" }]);
        setInput("");
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

    async function checkWeather(e, cityName) {
        e.preventDefault();
        console.log(cityName);
        const responseCurrenWeather = await WeatherService.currentWeather(cityName);
        const responseForecastWeather = await WeatherService.forecastWeather(cityName);
        if (cityName === "") {
            console.log("input is empty ");
        }
        if (responseCurrenWeather === "error" || responseForecastWeather === "error") {
            console.log("Request Error");
        } else {
            setInput("");
            setTown([
                {
                    name: cityName,
                    weather: responseCurrenWeather.data,
                    forecast: responseForecastWeather.data,
                },
            ]);
        }
    }

    if (town[0].forecast.list) {
        forecastByDay = geterateResult(town[0].forecast.list);
        console.log(forecastByDay);
    }

    useEffect(() => {
        getWeatherByCity();
    }, []);

    return (
        <div className="App">
            <Header
                render={renderPage}
                value={input}
                onChange={setInput}
                onClick={(e) => checkWeather(e, input)}
            />
            {!isLoading && town[0].name === "" ? ( //если идет загрузка данных и поиск по городу не задан
                <div className="list-of-city">
                    <CityCard weather={weather} openCard={checkWeather} />
                </div>
            ) : town[0].name !== "" &&
              //  && town[0].weather !== undefined
              forecastByDay.length > 0 ? ( // если задан поиск по городу, данные получены с сервера и
                <CityPage town={town} forecastByDay={forecastByDay} />
            ) : (
                <Loader />
            )}
            <Background />
        </div>
    );
}

export default App;
