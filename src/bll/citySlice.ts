import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getOneCallApiType, getWeatherApi} from "../dal/weatherApi";
import {WeatherApiType} from "../types/WeatherApiType";
import {addToLocalStorage} from "../helpers/localStorage";
import {OneCallApiType} from "../types/OneCallApiType";

type InitialStateType = {
    cities: WeatherApiType[];
    oneCall: OneCallApiType;
};

const initialState: InitialStateType = {
    cities: [],
    oneCall: {
        lat: 0,
        lon: 0,
        timezone: "",
        timezone_offset: 0,
        current: {
            dt: 0,
            sunrise: 0,
            sunset: 0,
            temp: 0,
            feels_like: 0,
            pressure: 0,
            humidity: 0,
            dew_point: 0,
            uvi: 0,
            clouds: 0,
            visibility: 0,
            wind_speed: 0,
            wind_deg: 0,
            wind_gust: 0,
            weather: [
                {
                    id: 0,
                    main: "",
                    description: "",
                    icon: "",
                },
            ],
        },
        hourly: [
            {
                dt: 0,
                temp: 0,
                feels_like: 0,
                pressure: 0,
                humidity: 0,
                dew_point: 0,
                uvi: 0,
                clouds: 0,
                visibility: 0,
                wind_speed: 0,
                wind_deg: 0,
                wind_gust: 0,
                weather: [
                    {
                        id: 0,
                        main: "",
                        description: "",
                        icon: "",
                    },
                ],
                pop: 0,
            },
        ],
    },
};

export const fetchCityThunk = createAsyncThunk(
    "city/fetchCity",
    async (name: string, thunkAPI) => {
        try {
            const res = await getWeatherApi(name);
            thunkAPI.dispatch(addCity({cityList: res.data}));
            addToLocalStorage(res.data.name);
        } catch (err) {
            console.log(err)
        } finally {
        }
    }
);

export const fetchOneCallThunk = createAsyncThunk(
    "oneCall/fetchCall",
    async (
        param: { lat: number | undefined; lon: number | undefined },
        thunkAPI
    ) => {
        try {
            const res = await getOneCallApiType(param.lat, param.lon);
            thunkAPI.dispatch(fetchOneCall(res.data));
        } catch (err) {
        } finally {
        }
    }
);

const slice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        addCity: (state, action: PayloadAction<{ cityList: WeatherApiType }>) => {
            if (
                !state.cities
                    .map((city) => city.name)
                    .includes(action.payload.cityList.name)
            )
                state.cities.unshift(action.payload.cityList);
        },
        removeCity: (state, action: PayloadAction<number>) => {
            state.cities = state.cities.filter((city) => city.id !== action.payload);
        },
        updateCity: (state, action: PayloadAction<WeatherApiType>) => {
            state.cities.forEach((city, index) => {
                if (city.id === action.payload.id) {
                    state.cities[index] = action.payload;
                }
            });
        },
        fetchCitiesFromLocalStorage: (
            state,
            action: PayloadAction<WeatherApiType[]>
        ) => {
            state.cities = action.payload;
        },
        fetchOneCall: (state, action: PayloadAction<OneCallApiType>) => {
            state.oneCall = action.payload;
        },
    },
});

export const citySlice = slice.reducer;
export const {
    addCity,
    removeCity,
    updateCity,
    fetchCitiesFromLocalStorage,
    fetchOneCall,
} = slice.actions;
