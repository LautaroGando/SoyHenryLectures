import { ThemeProvider } from "styled-components";

export const THEMES = {
    mainTheme: {
        colors: {
            primaryBg: "#222",
            primaryText: "#fff",
        },
        fonts: [],
    },
    secondaryTheme: {
        colors: {
            primaryBg: "#fff",
            primaryText: "#222",
        },
        fonts: [],
    },
};

const Theme = ({ theme, children }) => {

    return (

        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>

    )

};

export default Theme;