import React, { useContext } from "react";
import { DarkThemeContext } from "./context/DarkThemeContext";

function Lightswitch() {
    const { darkTheme, toggleDarkTheme } = useContext(DarkThemeContext);
    const handleClick = () => {

        toggleDarkTheme();
    }
    return (
        <div className="Lightswitch">
            <img src={darkTheme ?
                "./img/ss.png" : "./img/ss.png"} alt="Lightswitch on" onClick={handleClick} />
        </div>
    )
}
export default Lightswitch