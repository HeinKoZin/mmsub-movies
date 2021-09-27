import React from "react";
import { createTheme, styled } from "@mui/material/styles";
import { Card, CardMedia, Grid } from "@mui/material";
import MovieCarousel from "../MovieCarousel/MovieCarousel";
import Movie from "../Movie/Movie";

const theme = createTheme();

const MovieContainer = styled("div")<{ recommend?: boolean }>(
    ({ theme, recommend }) => ({
        width: "100vw",
        height: recommend ? "500px" : "100vh",
        backgroundImage:
            "url('https://spacequotations.com/wp-content/uploads/2019/01/interstellar.jpg')",
        backgroundPosition: "contain",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })
);

const TodayMovie = () => <Movie recommend />;

export default TodayMovie;
