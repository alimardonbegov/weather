import React from "react";
import CityCard from "./CityCard";
import CityDetails from "./CityDetails";

function CityPage(props) {
    return (
        <div className=" container_detail">
            <CityCard weather={props.town} />
            <CityDetails town={props.town} />
        </div>
    );
}

export default CityPage;
