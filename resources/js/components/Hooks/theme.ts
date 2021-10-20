import { createTheme, responsiveFontSizes } from "@mui/material";

const { palette } = createTheme();
let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#1D1E22",
        },
        myIconColor: { main: "#fe9920", secondary: "#f50057" },
    },
});

declare module "@mui/material/styles" {
    interface Theme {}
    // allow configuration using `createTheme`
    interface ThemeOptions {}

    interface Palette {
        myIconColor: { main: string; secondary: string };
    }
    interface PaletteOptions {
        myIconColor: { main: string; secondary: string };
    }
}

// declare module "@mui/material/IconButton" {
//     interface IconButtonPropsColorOverrides {
//         myIconButtonColor: true;
//     }
// }

theme = responsiveFontSizes(theme);

export default theme;
