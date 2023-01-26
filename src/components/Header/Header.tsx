import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import umbrella from "./umbrella-removebg-preview.png";

export const Header = () => {
    return (
        <Box data-test="headerComponent" sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{flexGrow: 1, display: {xs: 'none', sm: 'block'}}}
                    >
                        <img data-test="img" src={umbrella} alt="Umbrella"
                             style={{width: "60px", height: "60px", marginTop: "8px", marginLeft: "160px"}}/>

                    </Typography>
                    <div
                        data-test="logo"
                        style={{
                            fontFamily: "cursive",
                            fontSize: "18px",
                            letterSpacing: "0.7px,",
                            marginRight: "230px"
                        }}>WEATHER APP
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}