import React from "react";
import { createTheme, Grid, useMediaQuery } from "@mui/material";
import { getAllMoviesAndSeries } from "../../Hooks/api";
import MovieCard from "../MovieCard/MovieCard.lazy";

const theme = createTheme();

const AllMoviesAndSeries = () => {
    const data = getAllMoviesAndSeries();

    return (
        <div data-testid="AllMoviesAndSeries">
            <Grid
                item
                container
                md={12}
                spacing={useMediaQuery(theme.breakpoints.down("sm")) ? 1 : 2}
                sx={{
                    paddingTop: theme.spacing(4),
                    paddingBottom: theme.spacing(4),
                }}
            >
                {data?.results.map((res) => (
                    <MovieCard key={res.id} {...res} />
                ))}
            </Grid>
        </div>
    );
};

export default AllMoviesAndSeries;
