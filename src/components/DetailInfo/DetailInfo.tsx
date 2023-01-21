import {FC, memo} from "react";
import {Card, CardContent, Grid, Typography} from "@mui/material";
import {getCustomHours, temperatureToCelsius} from "../../helpers/text";
import {Air, BeachAccessOutlined, CallMissedTwoTone, Thermostat, WbTwilight} from "@mui/icons-material";

type DetailInfoType = {
    temp: number
    feels_like: number
    speed: number
    deg: number
    sunrise: number
    sunset: number
}

export const DetailInfo: FC<DetailInfoType> = memo(({
                                                   temp,
                                                   feels_like,
                                                   speed,
                                                   deg,
                                                   sunrise,
                                                   sunset
                                               }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <Card sx={{p: 0, backgroundColor: "#1976d2", borderRadius: 5}}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Temperature
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    <Thermostat sx={{fontSize: "25px", marginRight: "5px"}}/>
                                    {temperatureToCelsius(temp)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>

                <Card sx={{p: 0, backgroundColor: "#1976d2", borderRadius: 5}}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Feels like
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    <BeachAccessOutlined sx={{fontSize: "25px"}} style={{marginRight: "5px"}}/>
                                    {temperatureToCelsius(feels_like)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={2}>
                <Card sx={{p: 0, backgroundColor: "#1976d2", borderRadius: 5}}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Wind speed
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    <Air sx={{fontSize: "25px"}} style={{marginRight: "5px"}}/>
                                    {speed}
                                </Typography>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2}>
                <Card sx={{p: 0, backgroundColor: "#1976d2", borderRadius: 5}}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Wind degree
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    <CallMissedTwoTone sx={{fontSize: "25px"}} style={{marginRight: "5px"}}/>
                                    {deg}
                                </Typography>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2}>
                <Card sx={{p: 0, backgroundColor: "#1976d2", borderRadius: 5}}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Sunrise
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    <WbTwilight sx={{fontSize: "25px"}} style={{marginRight: "5px"}}/>
                                    {getCustomHours(sunrise)}
                                </Typography>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Grid>

            <Grid item xs={2}>
                <Card sx={{p: 0, backgroundColor: "#1976d2", borderRadius: 5}}>
                    <CardContent>
                        <Grid container>
                            <Grid item alignItems='center' xs={12} sx={{display: "flex"}}>
                                <Typography component='span' sx={{color: "#fff", fontSize: 16}}>
                                    Sunset
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} alignItems='center' justifyContent='center'>
                                <Typography variant='h4' component='p' sx={{color: "#fff"}} textAlign='center'>
                                    <WbTwilight sx={{fontSize: "25px"}} style={{marginRight: "5px"}}/>
                                    {getCustomHours(sunset)}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
})