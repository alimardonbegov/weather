import WeatherService from "../API/WeatherService";
import {
    CLEAN_INPUT,
    CLEAN_TOWN,
    FETCH_SEARCH_WEATHER,
    FETCH_WEATHER,
    HIDE_LOADER,
    SET_INPUT,
} from "./types";

export function fetchWeather(weather) {
    return async (dispatch) => {
        try {
            weather.map(async (el) => {
                const response = await WeatherService.currentWeather(el.city);
                const ind = weather.findIndex((c) => c.city === el.city);
                weather[ind].weather = response.data;

                setTimeout(() => {
                    dispatch({ type: FETCH_WEATHER, payload: weather });
                    dispatch({ type: HIDE_LOADER });
                }, 1000);
            });
        } catch (error) {
            dispatch({ type: HIDE_LOADER });
        }
    };
}

export function fetchSearchWeather(e, cityName) {
    return async (dispatch) => {
        e.preventDefault();
        const responseCurrenWeather = await WeatherService.currentWeather(cityName);
        const responseForecastWeather = await WeatherService.forecastWeather(cityName);
        if (cityName === "") {
            console.log("input is empty ");
        }
        if (responseCurrenWeather === "error" || responseForecastWeather === "error") {
            console.log("Request Error");
        } else {
            const town = {
                name: cityName,
                weather: responseCurrenWeather.data,
                forecast: responseForecastWeather.data,
            };
            dispatch({ type: FETCH_SEARCH_WEATHER, payload: town });
            dispatch({ type: CLEAN_INPUT });
        }
    };
}

export function setInput(input) {
    return { type: SET_INPUT, payload: input };
}

export function renderPage() {
    return async (dispatch) => {
        dispatch({ type: CLEAN_INPUT });
        dispatch({ type: CLEAN_TOWN });
    };
}
