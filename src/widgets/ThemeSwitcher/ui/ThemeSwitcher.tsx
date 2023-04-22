import React from "react";

import { Button, ThemeButton } from "shared/ui/Button/Button";
import { classNames } from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/providers/ThemeProvider";
import MoonIcon from 'shared/assets/icons/moon.svg'
import SunIcon from 'shared/assets/icons/sun.svg'

import cls from "./ThemeSwitcher.module.scss"


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, changeTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={changeTheme}
        >
            { theme !== Theme.DARK ? <MoonIcon/> : <SunIcon/> }
        </Button>
    )
}