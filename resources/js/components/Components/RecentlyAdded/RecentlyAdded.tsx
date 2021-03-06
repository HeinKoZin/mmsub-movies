import React from "react";
import { createTheme, Grid, useMediaQuery } from "@mui/material";
import { getRecentMovies } from "../../Hooks/api";
import MovieCard from "../MovieCard/MovieCard.lazy";

const theme = createTheme();

const RecentlyAdded = () => {
    const data = getRecentMovies();

    return (
        <div data-testid="RecentlyAdded">
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

export default RecentlyAdded;
