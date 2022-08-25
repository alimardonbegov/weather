import React from "react";

function CityDetails(props) {
    const cond = props.town[0].weather;
    const cond2 = props.town[0].forecast;
    return (
        <div className="block_detail">
            <table>
                <tr>
                    <td>Feels like</td>
                    <td>{cond.main.feels_like} º</td>
                </tr>
                <tr>
                    <td>High</td>
                    <td>{cond.main.temp_max} º</td>
                </tr>
                <tr>
                    <td>Low</td>
                    <td>{cond.main.temp_min} º</td>
                </tr>
                <tr>
                    <td>Pressure</td>
                    <td>{cond.main.pressure} hPa</td>
                </tr>
                <tr>
                    <td>Visibility</td>
                    <td>{cond.visibility} meters</td>
                </tr>
                <br />
                <tr>
                    <td>Local time</td>
                    <td>{new Date(cond.dt * 1000).toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Sunrise</td>
                    <td>{new Date(cond.sys.sunrise * 1000).toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Sunset</td>
                    <td>{new Date(cond.sys.sunset * 1000).toLocaleString()}</td>
                </tr>
                <tr>
                    <td>Population</td>
                    <td>{cond2.city.population}</td>
                </tr>
            </table>
        </div>
    );
}

export default CityDetails;
