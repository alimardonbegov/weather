import React from "react";
import geterateResult from "../utils/getForecastByDay";
import CityDetails from "./CityDetails";
import CityCardCurrent from "./UI/card/CityCardCurrent";
import CityCardForecast from "./UI/card/CityCardForecast";

function CityPage(props) {
    return (
        <div className="container_city_page">
            <div className="container_detail">
                <CityCardCurrent weather={props.town} />
                <CityDetails town={props.town} />
            </div>
            <h2 className="app-forecast"> 5 day weather forecast:</h2>
            <div className="container_forecast">
                <CityCardForecast forecastByDay={props.forecastByDay} />
            </div>
        </div>
    );
}

export default CityPage;
