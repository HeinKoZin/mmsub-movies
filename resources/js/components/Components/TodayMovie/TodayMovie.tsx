import React from "react";
import Movie from "../Movie/Movie";
import MovieCarousel from "../MovieCarousel/MovieCarousel";
import { Paper } from "@mui/material";
import { getPopularMovies } from "../../Hooks/api";

interface PropsTypes {}
interface StateTypes {}

const TodayMovie = () => {
    const data = getPopularMovies();

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
