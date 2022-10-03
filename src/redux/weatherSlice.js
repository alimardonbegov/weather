import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import WeatherService from "../API/WeatherService";
const initialState = {
    weather: [
        { city: "New York", weather: "" },
        { city: "London", weather: "" },
        { city: "Moscow", weather: "" },
        { city: "Beijing", weather: "" },
    ],
    status: null,
    town: [{ name: "", weather: "", forecast: "" }],
    input: "",
    isLoading: true,
};

const justFetchWeather = async (w) => {
    try {
        w.map(async (el) => {
            //ok
            const response = await WeatherService.currentWeather(el.city);
            const ind = w.findIndex((c) => c.city === el.city);
            w[ind].weather = response.data;
            console.log(response.data);
        });
        //   console.log("fetched weather is:" + w);
        return w;
    } catch (error) {
        console.log(error.message);
    }
};

export const fetchWeather = createAsyncThunk(
    "weather/fetchWeather",
    async ({ dispatch, getState }) => {
        try {
            const weather = getState(state.weather.weather);
            const result = justFetchWeather(weather);
            return setTimeout(() => {
                //  console.log("set time out finished");
                dispatch(hideLoader());
                //  console.log("result is:" + result);
                return result;
            }, 2000);
        } catch (error) {
            hideLoader();
        }
    }
);

export const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        //   fetchWeatherReducer: (state, action) => {
        //       state.weather = action.payload;
        //   },
        fetchSearchWeatherReducer: (state, action) => {
            state.town = [action.payload];
        },
        setInput: (state, action) => {
            state.input = action.payload;
        },
        hideLoader: (state) => {
            state.isLoading = false;
        },
        renderPage: (state) => {
            state.input = "";
            state.town = [{ name: "", weather: "", forecast: "" }];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.status = "idle";
                //  console.log("payload of fetching weather is " + action.payload);
                state.weather = action.payload;
            })
            .addCase(fetchWeather.rejected, (state) => {
                state.status = "failed";
            });
    },
});

export const { fetchWeatherReducer, fetchSearchWeatherReducer, setInput, hideLoader, renderPage } =
    weatherSlice.actions;
