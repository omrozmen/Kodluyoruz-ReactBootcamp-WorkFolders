import React, { createContext, useState } from 'react'

const DarkThemeContext = createContext();

function DarkThemeProvider(props) {
    const [darkTheme, setDarkTheme] = useState(false);
    const toggleDarkTheme = (dark) => {
        setDarkTheme(!darkTheme);
    };
    return (
        <div>
            <DarkThemeContext.Provider value={{ darkTheme, toggleDarkTheme }}>
                {props.children}
            </DarkThemeContext.Provider>
        </div>
    )
};

export { DarkThemeContext, DarkThemeProvider }