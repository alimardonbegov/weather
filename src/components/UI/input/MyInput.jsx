import { FaSearchLocation } from "react-icons/fa";
import React from "react";

function MyInput(props) {
    return (
        <div class="c-formContainer">
            <form class="c-form" action="">
                <input
                    class="c-form__input"
                    placeholder="city name"
                    type="text"
                    autoComplete="off"
                    name="town"
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                />
                <label class="c-form__buttonLabel" for="checkbox">
                    <button class="c-form__button" type="submit" onClick={(e) => props.onClick(e)}>
                        <FaSearchLocation />
                    </button>
                </label>
            </form>
        </div>
    );
}

export default MyInput;
