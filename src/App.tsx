import React, { Suspense } from 'react';
import { Link, Route, Routes } from "react-router-dom";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

import { useTheme } from "./theme/useTheme";

import './styles/index.scss'

const App = () => {
    const { theme, changeTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <div onClick={changeTheme}>TOGGLE</div>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>} />
                    <Route path={'/'} element={<MainPageAsync/>} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;