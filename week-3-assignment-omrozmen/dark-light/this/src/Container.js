import React, { useContext } from "react";
import Content from './Content'
import Lightswitch from './LightSwitch';
import { DarkThemeContext } from "./context/DarkThemeContext";

function Container() {
    const { darkTheme } = useContext(DarkThemeContext);
    return (
        <div className={darkTheme ? 'Container Container-dark' : 'Container Container-light'}>
            <Content />
            <Lightswitch />
        </div>
    )
}
export default Container