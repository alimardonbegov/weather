import React from "react";
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
            <h1> Forecast</h1>
            <div className="container_forecast">
                <CityCardForecast forecast={props.town[0].forecast} />
            </div>
        </div>
    );
}

export default CityPage;
