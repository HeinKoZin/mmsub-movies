import { Container, createTheme, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { ResultsTypes } from "../Movie/Movie";
import MovieCard from "../MovieCard/MovieCard.lazy";

const theme = createTheme();

type MovieData = {
    page: number;
    results: ResultsTypes[];
};

const imagePath = "https://image.tmdb.org/t/p/original";

const RecentlyAdded = () => {
    const [data, setMovieData] = React.useState<MovieData>();

    const fetchData = () => {
        axios
            .get<MovieData>(
                "https://api.themoviedb.org/3/search/movie?api_key=c6e84f9b84872a49a4f26020835b8700&query=Who&am&I"
            )
            .then((res) => {
                return setMovieData(res.data);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 1000);
    }, []);

    return (
        <div data-testid="RecentlyAdded">
            {/* <Grid
                    item
                    container
                    md={12}
                    style={{ backgroundColor: "#1D1E22" }}
                >
                    <Container>
                        <Typography
                            variant="h5"
                            component="p"
                            color="primary"
                            noWrap
                            sx={{
                                padding: theme.spacing(4, 0),
                                paddingBottom: theme.spacing(1),
                                borderBottomWidth: 1,
                            }}
                        >
                            Recently Added Movies
                        </Typography>
                    </Container>
                </Grid> */}
            <Container>
                <Grid
                    item
                    container
                    md={12}
                    spacing={2}
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
            </Container>
        </div>
    );
};

export default RecentlyAdded;
