import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, common } from "@mui/material/colors";

const theme = createTheme();

render(
    <Router>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Router>,
    document.getElementById("app")
);
