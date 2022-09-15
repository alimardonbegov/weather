import React from "react";
import { getVisibility } from "../utils/getVisibility";

function CityDetails(props) {
    const cond = props.town[0].weather;

    const details = [
        { "Feels like": cond.main.feels_like + " º" },
        { High: cond.main.temp_max + " º" },
        { Low: cond.main.temp_min + " º" },
        { Pressure: cond.main.pressure + " hPa" },
        { Visibility: getVisibility(cond.visibility) },
    ];

    return (
        <div className="block_detail">
            <table>
                <tbody>
                    {details.map((el, index) => {
                        return (
                            <tr key={index}>
                                <td>{Object.keys(el)[0]}</td>
                                <td>{Object.values(el)[0]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CityDetails;
