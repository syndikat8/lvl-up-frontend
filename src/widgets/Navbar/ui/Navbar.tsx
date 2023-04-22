import { AppLink } from "shared/ui/AppLink/AppLink";

import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={cls.links}>
                <AppLink to={'/'}>Главная</AppLink>
                <AppLink to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    )
}