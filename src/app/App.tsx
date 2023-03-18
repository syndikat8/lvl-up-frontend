import React from 'react';
import { Link } from 'react-router-dom';

import { AppRouter } from "app/providers/router";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider";

import './styles/index.scss';

const App = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={changeTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;