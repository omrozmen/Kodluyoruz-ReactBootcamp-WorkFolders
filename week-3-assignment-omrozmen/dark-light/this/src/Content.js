import React, { useContext } from 'react';
import { DarkThemeContext } from './context/DarkThemeContext';

function Content() {
    const { darkTheme } = useContext(DarkThemeContext);
    const contentProvider = () => {
        if (darkTheme) {
            return <p> <span>Kapalı.</span></p>
        }
        return <p>Açık.</p>
    }
    return (
        <div className={darkTheme ? `Content Content-dark` : `Content`}>
            {contentProvider()}
        </div>
    )
}

export default Content