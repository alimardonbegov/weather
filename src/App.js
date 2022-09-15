import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchWeather, fetchSearchWeather } from "./redux/actions";
import "../src/styles/App.scss";
import geterateResult from "./utils/getForecastByDay";
import Header from "./components/Header";
import CityPage from "./components/CityPage";
import Background from "./components/UI/backgorund/Backgorund";
import Loader from "./components/UI/loader/Loader";
import CityCardCurrent from "./components/UI/card/CityCardCurrent";
import Footer from "./components/UI/footer/Footer";

function App(props) {
    useEffect(() => {
        props.fetchWeather(props.weather);
    }, []);

    if (props.town[0].forecast.list) {
        var forecastByDay = [];
        forecastByDay = geterateResult(props.town[0].forecast.list);
    }

    return (
        <div className="App">
            <Header />
            {!props.isLoading && props.town[0].name === "" ? ( //если идет загрузка данных и поиск по городу не задан
                <div className="list-of-city">
                    <CityCardCurrent weather={props.weather} openCard={props.fetchSearchWeather} />
                    <Footer />
                </div>
            ) : props.town[0].name !== "" && forecastByDay.length > 0 ? ( // если задан поиск по городу, данные получены с сервера и
                <CityPage town={props.town} forecastByDay={forecastByDay} />
            ) : (
                <Loader />
            )}
            <Background />
        </div>
    );
}

const mapStateToProps = (state) => ({
    weather: state.citiesWeather.weather,
    isLoading: state.citiesWeather.isLoading,
    town: state.citiesWeather.town,
});
const mapDispatchToProps = {
    fetchWeather,
    fetchSearchWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
