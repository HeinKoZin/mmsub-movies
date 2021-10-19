import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#1D1E22",
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
