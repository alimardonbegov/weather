import React from "react";
import wind from "../../../images/wind.svg";
import cloud from "../../../images/cloud.svg";
import water from "../../../images/water.svg";

function CityCardForecast(props) {
    return props.forecastByDay.map((el, index) => {
        const icon = `https://openweathermap.org/img/wn/${el.icon}@2x.png`;
        return (
            <div key = {index} className="city_card forecast">
                <div className="city-card-content">
                    <h2>{el.date}</h2>
                    <div className="city-card-header">
                        <div>
                            <img className="icon" src={icon} />
                        </div>
                        <div className="city-card-weather">
                            <div>
                                <span className="temp">{Math.floor(el.temp)}</span>
                                <span className="celsium">º</span>
                            </div>
                        </div>
                    </div>
                    <div className="weather-desc">{el.description}</div>
                    <div className="city-card-bottom">
                        <div className="weather-condition">
                            <div style={{ paddingTop: "3px" }}>
                                <img className="bottom-image1" src={wind} />
                            </div>
                            <div className="weather-condition-text">{el.wind.toFixed(1)} m/s</div>
                        </div>
                        <div className="weather-condition">
                            <div>
                                <img className="bottom-image2" src={cloud} />
                            </div>
                            <div className="weather-condition-text">{el.clouds} %</div>
                        </div>
                        <div className="weather-condition">
                            <div>
                                <img className="bottom-image3" src={water} />{" "}
                            </div>
                            <div className="weather-condition-text">{el.humidity} %</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
}

export default CityCardForecast;
