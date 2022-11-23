import { createContext, useContext, useEffect, useState } from "react"
const ThemeContext = createContext();

function useTheme() {
    return useContext(ThemeContext);
}

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(window.localStorage.getItem("theme") || "light");

    useEffect(() => {
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "warning" : "light"));
        // setTheme(!theme);
    };

    const values = { toggleTheme, theme };

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;

}
export { ThemeProvider, useTheme }