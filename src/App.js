import React, { useEffect, useState, useMemo } from "react";
import "../src/styles/App.scss";
import WeatherService from "./API/WeatherService";
import Header from "./components/Header";
import CityPage from "./components/CityPage";
import geterateResult from "./utils/getForecastByDay";
import Background from "./components/UI/backgorund/Backgorund";
import Loader from "./components/UI/loader/Loader";
import CityCardCurrent from "./components/UI/card/CityCardCurrent";
import Footer from "./components/UI/footer/Footer";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [weather, setWeather] = useState([
        { city: "New York", weather: "" },
        { city: "London", weather: "" },
        { city: "Moscow", weather: "" },
        { city: "Beijing", weather: "" },
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
                    <CityCardCurrent weather={weather} openCard={checkWeather} />
                    <Footer />
                </div>
            ) : town[0].name !== "" && forecastByDay.length > 0 ? ( // если задан поиск по городу, данные получены с сервера и
                <CityPage town={town} forecastByDay={forecastByDay} />
            ) : (
                <Loader />
            )}
            <Background />
        </div>
    );
}

export default App;
