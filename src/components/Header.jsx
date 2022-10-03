import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { renderPage, setInput } from "../redux/weatherSlice";
import MyInput from "./UI/input/MyInput";

export default function Header() {
    const dispatch = useDispatch();
    const input = useSelector((state) => state.weather.input);
    return (
        <div className="header">
            <div onClick={() => dispatch(renderPage())}>
                <h1 className="app-name">Weather app</h1>
            </div>
            <MyInput
                value={input}
                onChange={() => dispatch(setInput())}
                //  onClick={(e) => props.fetchSearchWeather(e, props.input)}
            />
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     input: state.citiesWeather.input,
// });

// const mapDispatchToProps = {
//     fetchSearchWeather,
//     setInput,
//     renderPage,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Header);
