import {FC, memo} from "react";
import {getCustomHours, temperatureToCelsius} from "../../../helpers/text";
import {Box, Grid, Typography} from "@mui/material";

type HourlyInfoItemType = {
    dt: number
    icon: string[]
    temp: number

}

export const HourlyInfoItem: FC<HourlyInfoItemType> = memo(({dt, icon, temp}) => {
    return (
        <Grid item xs={1}>

            <Box justifyContent='center' alignItems='center'>
                <Typography variant='h5' textAlign='center'>
                    {getCustomHours(dt)}
                </Typography>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather"/>
                <Typography variant='h5' textAlign='center'>
                    {temperatureToCelsius(temp)}
                </Typography>
            </Box>
        </Grid>
    )
})