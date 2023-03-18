import React from 'react';

import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import './styles/index.scss';

const App = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={changeTheme}>TOGGLE</button>
        </div>
    );
};

export default App;