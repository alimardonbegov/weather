import React, { useState } from "react";
import WeatherService from "./API/WeatherService";
import "./App.css";

function App() {
    const [isClicked, setIsClicked] = useState(false);
    const [weather, setWeather] = useState({});
    const [city, setCity] = useState("");

    async function checkWeather(e) {
        e.preventDefault();
        const response = await WeatherService.weather(city);
        setIsClicked(true);
        setWeather(response.data);
        console.log(weather);
    }
    console.log(city);
    return (
        <div className="App">
            <form>
                <input value={city} placeholder="Citi" onChange={(e) => setCity(e.target.value)} />
                <button onClick={checkWeather}> Check the weather</button>
            </form>

            {weather == undefined ? (
                <p> Plese check your city name</p>
            ) : (
                isClicked &&
                weather && (
                    <div>
                        <h1> Weather in {weather.name}: </h1>
                        <h1>{weather.main.temp}</h1>
                        <p>{weather.weather[0].description}</p>
                    </div>
                )
            )}
        </div>
    );
}

export default App;
