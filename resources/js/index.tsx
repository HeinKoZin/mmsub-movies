import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Theme, ThemeProvider as ThemeProviderOne } from "@mui/material/styles";
import { ThemeProvider as ThemeProviderTwo } from "@mui/styles";
import { SWRConfig } from "swr";
import theme from "./components/Hooks/theme";

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
                        provider: localStorageProvider,
                    }}
                >
                    <App />
                </SWRConfig>
            </ThemeProviderTwo>
        </ThemeProviderOne>
    </Router>,
    document.getElementById("app")
);
