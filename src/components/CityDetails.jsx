import React from "react";
import { formatAMPM } from "../utils/formatAMPM";
import { getPopulation } from "../utils/getPopulation";
import { getVisibility } from "../utils/getVisibility";

function CityDetails(props) {
    const cond = props.town[0].weather;
    const cond2 = props.town[0].forecast;
    const details = [
        { "Feels like": cond.main.feels_like + " º" },
        { High: cond.main.temp_max + " º" },
        { Low: cond.main.temp_min + " º" },
        { Pressure: cond.main.pressure + " hPa" },
        { Visibility: getVisibility(cond.visibility) },
        { "Local time": formatAMPM(new Date(cond.dt * 1000)) },
        { Sunrise: formatAMPM(new Date(cond.sys.sunrise * 1000)) },
        { Sunset: formatAMPM(new Date(cond.sys.sunset * 1000)) },
        { Population: getPopulation(cond2.city.population) },
    ];

    return (
        <div className="block_detail">
            <table>
                {details.map((el) => {
                    return (
                        <tr>
                            <td>{Object.keys(el)[0]}</td>
                            <td>{Object.values(el)[0]}</td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default CityDetails;
