import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "../src/styles/App.scss";
import geterateResult from "./utils/getForecastByDay";
import Header from "./components/Header";
import CityPage from "./components/CityPage";
import Background from "./components/UI/backgorund/Backgorund";
import Loader from "./components/UI/loader/Loader";
import CityCardCurrent from "./components/UI/card/CityCardCurrent";
import Footer from "./components/UI/footer/Footer";

import { fetchWeather } from "./redux/weatherSlice";

export default function App() {
    const dispatch = useDispatch();

    const town = useSelector((state) => state.weather.town);
    const isLoading = useSelector((state) => state.weather.isLoading);
    const weather = useSelector((state) => state.weather);
    console.log(weather);

    useEffect(() => {
        dispatch(fetchWeather());
    }, []);

    if (town[0].forecast.list) {
        var forecastByDay = [];
        forecastByDay = geterateResult(town[0].forecast.list);
    }

    return (
        <div className="App">
            <Header />
            {!isLoading && town[0].name === "" ? ( //если идет загрузка данных и поиск по городу не задан
                <div className="list-of-city">
                    <CityCardCurrent
                        weather={weather}
                        //   openCard={props.fetchSearchWeather}
                    />
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

// const mapStateToProps = (state) => ({
//     weather: state.weather.weather,
//     isLoading: state.weather.isLoading,
//     town: state.weather.town,
// });
// const mapDispatchToProps = {
//     fetchWeather,
//     fetchSearchWeather,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
