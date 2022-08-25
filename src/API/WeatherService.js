import axios from "axios";

export default class WeatherService {
    static async currentWeather(city) {
        try {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
                params: {
                    q: city,
                    units: "metric",
                    appid: "7a02b6918a5a2a26ddf0758cfdeb3547",
                },
            });
            return response;
        } catch (e) {
            console.log(e.message);
            return e.message;
        }
    }

    static async forecastWeather(city) {
        try {
            const response = await axios.get("https://api.openweathermap.org/data/2.5/forecast", {
                params: {
                    q: city,
                    units: "metric",
                    appid: "7a02b6918a5a2a26ddf0758cfdeb3547",
                },
            });
            return response;
        } catch (e) {
            console.log(e.message);
            return e.message;
        }
    }
}
