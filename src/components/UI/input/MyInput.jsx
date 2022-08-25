import { FaSearchLocation } from "react-icons/fa";

import React from "react";

function MyInput(props) {
    return (
        <div class="form__group field">
            <input class="c-checkbox" type="checkbox" id="checkbox" />
            <div class="c-formContainer">
                <form class="c-form" action="">
                    <input
                        class="c-form__input"
                        placeholder="city name"
                        type="text"
                        name="town"
                        value={props.value}
                        onChange={(e) => props.onChange(e.target.value)}
                    />
                    <label class="c-form__buttonLabel" for="checkbox">
                        <button
                            class="c-form__button"
                            type="submit"
                            onClick={(e) => props.onClick(e)}
                        >
                            <FaSearchLocation />
                        </button>
                    </label>
                    <label class="c-form__toggle" for="checkbox">
                        <FaSearchLocation />
                    </label>
                </form>
            </div>
        </div>
    );
}

export default MyInput;
