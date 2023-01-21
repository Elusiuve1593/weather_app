import React, {FC, memo} from 'react';
import styles from './CityCard.module.css'
import {useNavigate} from 'react-router-dom'
import {removeLocalStorage} from '../../helpers/localStorage';
import {Button, Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {capitalize, temperatureToCelsius} from "../../helpers/text";
import {WeatherApiType} from "../../types/WeatherApiType";
import {useAppDispatch} from "../../bll/store";
import {fetchCityThunk, removeCity, updateCity} from "../../bll/citySlice";

type CityCardPropsType = {
    data: WeatherApiType
}

export const CityCard: FC<CityCardPropsType> = memo(({data}) => {

    const {
        sys,
        name,
        main,
        weather,
        id,
    } = data

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const updateHandler = async () => {
        const res: any = dispatch(fetchCityThunk(name))
        dispatch(updateCity(res))
    }

    const deleteHandler = () => {
        dispatch(removeCity(id))
        removeLocalStorage(name)
    }

    return (
        <Card sx={{p: 3, mb: 0.7, backgroundColor: "#1976d2"}}>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <div className={styles.cardContentLeft}>
                            <Typography variant="h4" component="h2" sx={{color: '#fff'}}>
                                {name}, {sys.country}
                            </Typography>
                            <Typography variant='h6' color="textSecondary" sx={{color: '#fff'}}>
                                {capitalize(weather[0].description)}
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className={styles.cardContentRight}>
                            <img
                                src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                                alt="weather-icon"
                            />
                            <Typography variant='h5' component='span' sx={{color: '#fff'}}>
                                {temperatureToCelsius(main.temp)}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Button size="small" color='warning' variant='contained'
                        onClick={updateHandler}
                >
                    Update
                </Button>
                <Button size="small" color='success' variant='contained'
                        onClick={() => navigate(`details/${name}`)}
                >
                    Details
                </Button>
                <Button size="small" color='error' variant='contained'
                        onClick={deleteHandler}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
})