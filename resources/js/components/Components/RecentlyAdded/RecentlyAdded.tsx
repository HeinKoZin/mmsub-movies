import {
    Container,
    createTheme,
    Grid,
    Typography,
    useMediaQuery,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import useSWR from "swr";
import { getRecentMovie } from "../../Hooks/api";
import { MovieDataTypes, ResultsTypes } from "../Movie/Movie";
import MovieCard from "../MovieCard/MovieCard.lazy";

const theme = createTheme();

const imagePath = "https://image.tmdb.org/t/p/original";

const RecentlyAdded = () => {
    const data = getRecentMovie();

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
                    <MovieCard
                        key={res.id}
                        releaseDate={res.release_date}
                        cover={res.poster_path}
                        title={res.original_title}
                    />
                ))}
            </Grid>
        </div>
    );
};

export default RecentlyAdded;
