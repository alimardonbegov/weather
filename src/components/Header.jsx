import React from "react";
import MyInput from "./UI/input/MyInput";

function Header(props) {
    return (
        <div className="header">
            <div onClick={props.render}>
                <h1 className="app-name">Weather app</h1>
            </div>
            <MyInput value={props.value} onChange={props.onChange} onClick={props.onClick} />
        </div>
    );
}

export default Header;
