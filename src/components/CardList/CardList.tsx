import React, {memo, useEffect} from 'react'
import {CityCard} from '../CityCard/CityCard'
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {WeatherApiType} from "../../types/WeatherApiType";
import {fetchCitiesFromLocalStorage} from "../../bll/citySlice";
import {Grid} from "@mui/material";

export const CardList = memo(() => {
    const cities = useAppSelector(state => state.citySlice.cities)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('cities') !== null && cities.length === 0) {
            fetchCities(JSON.parse(localStorage.cities))
        }
    }, [])

    const fetchCities = async (cities: string[] | null) => {
        try {
            const API_KEY = "8dbddb10d9e001a4cf545d6cbba316d9"
            const urls = cities?.map((city: string) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            urls && Promise.all(urls.map(u => fetch(u))).then(responses =>
                Promise.all(responses.map(res => res.json()))
            ).then((json: Awaited<WeatherApiType>[]) => {
                let resultInfo: WeatherApiType[] = json
                dispatch(fetchCitiesFromLocalStorage(resultInfo))
            })
        } catch ({message}) {
            console.log(typeof message)
        }
    }

    const renderCards = () => {
        return cities && cities.map(city => {
            return (
                <Grid item xs={9.7} sx={{ml: 10}}>
                    {city && <CityCard key={city.id} data={city}/>}
                </Grid>
            )
        })
    }
    return (
        <>{renderCards()}</>
    )
})