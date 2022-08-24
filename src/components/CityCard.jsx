import React from "react";
import wind from "../images/wind.svg";
import cloud from "../images/cloud.svg";
import water from "../images/water.svg";

function CityCard(props) {
    return props.weather.map((el, index) => {
        const icon = `http://openweathermap.org/img/wn/${el.weather.weather[0].icon}@2x.png`;
        return (
            <div className="city_card" key={index}>
                <div className="city-card-content">
                    <h2>{el.weather.name}</h2>
                    <div className="city-card-header">
                        <div>
                            <img src={icon} />
                        </div>
                        <div className="city-card-weather">
                            <div>
                                <span className="temp">{Math.floor(el.weather.main.temp)}</span>
                                <span className="celsium">º</span>
                            </div>
                            <div className="weather-desc">{el.weather.weather[0].description}</div>
                        </div>
                    </div>
                    <div className="city-card-bottom">
                        <div className="weather-condition">
                            <div style={{ paddingTop: "3px" }}>
                                <img className="bottom-image1" src={wind} />
                            </div>
                            <div className="weather-condition-text">
                                {el.weather.wind.speed} m/s
                            </div>
                        </div>
                        <div className="weather-condition">
                            <div>
                                <img className="bottom-image2" src={cloud} />
                            </div>
                            <div className="weather-condition-text">{el.weather.clouds.all} %</div>
                        </div>
                        <div className="weather-condition">
                            <div>
                                <img className="bottom-image3" src={water} />{" "}
                            </div>
                            <div className="weather-condition-text">
                                {el.weather.main.humidity} %
                            </div>
                        </div>

                        {/* <h3>{new Date(el.weather.dt * 1000).toLocaleString()}</h3> */}
                    </div>
                </div>
            </div>
        );
    });
}

export default CityCard;
