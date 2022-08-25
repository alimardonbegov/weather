import React from "react";
import wind from "../../../images/wind.svg";
import cloud from "../../../images/cloud.svg";
import water from "../../../images/water.svg";

function CityCardForecast(props) {
    console.log(props.forecast.list);
    return props.forecast.list.map((el) => {
        const icon = `http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`;
        return (
            <div className="city_card forecast">
                <div className="city-card-content">
                    <h2>{el.dt}</h2>
                    <div className="city-card-header">
                        <div>
                            <img src={icon} />
                        </div>
                        <div className="city-card-weather">
                            <div>
                                <span className="temp">{Math.floor(el.main.temp)}</span>
                                <span className="celsium">º</span>
                            </div>
                        </div>
                    </div>
                    <div className="weather-desc">{el.weather[0].description}</div>
                    <div className="city-card-bottom">
                        <div className="weather-condition">
                            <div style={{ paddingTop: "3px" }}>
                                <img className="bottom-image1" src={wind} />
                            </div>
                            <div className="weather-condition-text">{el.wind.speed} m/s</div>
                        </div>
                        <div className="weather-condition">
                            <div>
                                <img className="bottom-image2" src={cloud} />
                            </div>
                            <div className="weather-condition-text">{el.clouds.all} %</div>
                        </div>
                        <div className="weather-condition">
                            <div>
                                <img className="bottom-image3" src={water} />{" "}
                            </div>
                            <div className="weather-condition-text">{el.main.humidity} %</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });
}

export default CityCardForecast;
