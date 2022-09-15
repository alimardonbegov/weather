import React from "react";
import { connect } from "react-redux";
import MyInput from "./UI/input/MyInput";
import { fetchSearchWeather, renderPage, setInput } from "../redux/actions";

function Header(props) {
    return (
        <div className="header">
            <div onClick={props.renderPage}>
                <h1 className="app-name">Weather app</h1>
            </div>
            <MyInput
                value={props.input}
                onChange={props.setInput}
                onClick={(e) => props.fetchSearchWeather(e, props.input)}
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    input: state.citiesWeather.input,
});

const mapDispatchToProps = {
    fetchSearchWeather,
    setInput,
    renderPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
