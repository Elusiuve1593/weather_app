import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainWeatherPage} from "./components/MainWeatherPage/MainWeatherPage";
import {DetailedPage} from "./components/DetailedPage/DetailedPage";
import {Header} from "./components/Header/Header";

export const App = () => {
    return (
        <div>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainWeatherPage/>}/>
                    <Route path="details/:name" element={<DetailedPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}