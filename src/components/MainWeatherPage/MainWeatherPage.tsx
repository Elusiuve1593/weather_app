import {useAppDispatch} from "../../bll/store";
import {memo, useState} from "react";
import {Button, Container, Grid, TextField, Typography} from "@mui/material";
import {fetchCityThunk} from "../../bll/citySlice";
import {CardList} from "../CardList/CardList";

export const MainWeatherPage = memo(() => {
    const [cityName, setCityName] = useState<string>("")
    const [title, setTitle] = useState<string>("Search...")
    const [error, setError] = useState<string | null>(null)
    const dispatch = useAppDispatch()
    const searchHandler = (e: any) => {
        setCityName(e.target.value)
    }
    const addCityHandler = async () => {
        if (title === "") {
            setTitle(title)
        } else {
            setError("Title is required")
        }
        dispatch(fetchCityThunk(cityName))
        setCityName("")
    }
    const onKeyDownHandler = (e: any) => {
        if (e.key === "Enter") {
            dispatch(fetchCityThunk(cityName))
            setCityName("")
        }
    }
    return (
        <>
            <Container>
                <Grid container sx={{mt: 3, mb: 3, ml: 10}} >
                    <Grid item xs={9}>
                        <TextField
                            type="search"
                            placeholder={error ? "Title is required!!!" : title}
                            inputProps={{"aria-label": "search"}}
                            color="primary"
                            fullWidth
                            variant="outlined"
                            value={cityName}
                            onChange={searchHandler}
                            onKeyDown={onKeyDownHandler}
                            sx={{p: "0"}}
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <Button color="primary"
                                variant="contained"
                                fullWidth sx={{height: "100%", width: "50%"}}
                                onClick={addCityHandler}
                        >
                            <Typography component="span">
                                ADD
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <CardList/>
                </Grid>
            </Container>
        </>
    )
})