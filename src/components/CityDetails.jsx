import React from "react";
import { formatAMPM } from "../utils/formatAMPM";
import { getPopulation } from "../utils/getPopulation";
import { getVisibility } from "../utils/getVisibility";

function CityDetails(props) {
    const localTime = new Date();
    const cond = props.town[0].weather;
    const cond2 = props.town[0].forecast;

    const details = [
        { "Feels like": cond.main.feels_like + " º" },
        { High: cond.main.temp_max + " º" },
        { Low: cond.main.temp_min + " º" },
        { Pressure: cond.main.pressure + " hPa" },
        { Visibility: getVisibility(cond.visibility) },
        // { "Local time": formatAMPM(new Date(cond.dt * 1000)) }, // it shows the user's time, not the city's
        // { Sunrise: formatAMPM(new Date(cond.sys.sunrise * 1000)) },// it shows the user's time, not the city's
        // { Sunset: formatAMPM(new Date(cond.sys.sunset * 1000)) },// it shows the user's time, not the city's
        // { Population: getPopulation(cond2.city.population) }, // this can be showed with the above information
    ];

    return (
        <div className="block_detail">
            <table>
                {details.map((el, index) => {
                    return (
                        <tr key={index}>
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
