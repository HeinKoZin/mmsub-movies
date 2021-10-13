import React from "react";
import { createTheme, styled } from "@mui/material/styles";
import Movie from "../Movie/Movie";
import MovieCarousel from "../MovieCarousel/MovieCarousel";
import { Paper } from "@mui/material";
import { getPopularMovie } from "../../Hooks/api";

const theme = createTheme();

interface PropsTypes {}
interface StateTypes {}

const MovieContainer = styled("div")<{ recommend?: boolean }>(
    ({ theme, recommend }) => ({
        width: "100%",
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

const TodayMovie = () => {
    const data = getPopularMovie();

    return (
        <Paper sx={{ width: "100%", height: { xs: 365, sm: 500 } }}>
            <MovieCarousel>
                {data?.results.map((movie) => (
                    <Movie movieData={movie} key={movie.id} />
                ))}
            </MovieCarousel>
        </Paper>
    );
};

export default TodayMovie;
