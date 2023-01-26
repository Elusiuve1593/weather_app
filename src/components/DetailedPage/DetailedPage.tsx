import {FC, memo, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../bll/store";
import {Button, Container, Grid, Typography} from "@mui/material";
import {DetailInfo} from "../DetailInfo/DetailInfo";
import {fetchOneCallThunk} from "../../bll/citySlice";
import {HourlyList} from "../HourlyList/HourlyList";
import {ArrowBackIos} from "@mui/icons-material";

export const DetailedPage: FC = memo(() => {
    const {name} = useParams()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const cities = useAppSelector(state => state.citySlice.cities)

    const city = cities.find(el => el.name === name)
    const lat = city?.coord.lat
    const lon = city?.coord.lon

    useEffect(() => {
        dispatch(fetchOneCallThunk({lat, lon}))
    }, [])

    const onClickHandler = () => {
        return navigate("/weather_app")
    }
    return (
        <>
            {city && <>
                <Button style={{
                    marginTop: "20px",
                    marginLeft: "100px",
                    width: "165px",
                    height: "50px",
                    borderRadius: "10px",
                    letterSpacing: "0.7px",
                }}
                        variant="contained" size="medium"
                        onClick={onClickHandler}>
                    <ArrowBackIos/>To main page</Button>
                <Container>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h3' sx={{mb: 3, ml: 0, mt: 3}} textAlign='left'>
                                <div style={{color:"#1976d2"}}>{city.name}, {city.sys.country}</div>
                            </Typography>
                        </Grid>
                        <Grid item xs={12} style={{marginBottom: "10px"}}>
                            <DetailInfo
                                temp={city.main.temp}
                                feels_like={city.main.feels_like}
                                speed={city.wind.speed}
                                deg={city.wind.deg}
                                sunrise={city.sys.sunrise}
                                sunset={city.sys.sunset}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container spacing={1}>
                                <HourlyList/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </>}
        </>
    )
})