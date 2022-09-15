import {
    CLEAN_INPUT,
    CLEAN_TOWN,
    FETCH_SEARCH_WEATHER,
    FETCH_WEATHER,
    HIDE_LOADER,
    SET_INPUT,
} from "./types";

const initialState = {
    weather: [
        { city: "New York", weather: "" },
        { city: "London", weather: "" },
        { city: "Moscow", weather: "" },
        { city: "Beijing", weather: "" },
    ],
    town: [{ name: "", weather: "", forecast: "" }],
    input: "",
    isLoading: true,
};

export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WEATHER:
            return { ...state, weather: action.payload };
        case FETCH_SEARCH_WEATHER:
            return { ...state, town: [action.payload] };
        case HIDE_LOADER:
            return { ...state, isLoading: false };
        case SET_INPUT:
            return { ...state, input: action.payload };
        case CLEAN_INPUT:
            return { ...state, input: "" };
        case CLEAN_TOWN:
            return { ...state, town: [{ name: "", weather: "", forecast: "" }] };

        default:
            return state;
    }
}
