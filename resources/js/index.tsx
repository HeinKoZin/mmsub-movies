import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import {
    createTheme,
    responsiveFontSizes,
    Theme,
    ThemeProvider as ThemeProviderOne,
} from "@mui/material/styles";
import { ThemeProvider as ThemeProviderTwo } from "@mui/styles";
import { SWRConfig } from "swr";

let theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#ffffff",
        },
    },
});

theme = responsiveFontSizes(theme);

declare module "@mui/styles" {
    interface DefaultTheme extends Theme {}
}

render(
    <Router>
        <ThemeProviderOne theme={theme}>
            <ThemeProviderTwo theme={theme}>
                <SWRConfig
                    value={{
                        refreshInterval: 3000,
                        fetcher: (resource, init) =>
                            fetch(resource, init).then((res) => res.json()),
                    }}
                >
                    <App />
                </SWRConfig>
            </ThemeProviderTwo>
        </ThemeProviderOne>
    </Router>,
    document.getElementById("app")
);
