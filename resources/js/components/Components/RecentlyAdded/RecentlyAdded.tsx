import {
    Card,
    CardMedia,
    Container,
    createTheme,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { ResultsTypes } from "../Movie/Movie";
import { DateRange as DateRangeIcon } from "@mui/icons-material";

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

    const MovieCard = (props: {
        cover?: string;
        releaseDate?: string;
        title?: string;
    }) => {
        return (
            <Grid item md={2} xs={4}>
                <Paper
                    sx={{ width: "100%", backgroundColor: "#1D1E22" }}
                    elevation={10}
                >
                    <Card
                        sx={{
                            borderBottomLeftRadius: 0,
                            borderBottomRightRadius: 0,
                        }}
                        raised
                    >
                        <CardMedia
                            component="img"
                            image={
                                props.cover
                                    ? imagePath + props.cover
                                    : "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2014%2F10%2F2v00kg8.jpg"
                            }
                            sx={{ height: { xs: 250, sm: 250 } }}
                        />

                        {/* Release Data */}
                    </Card>

                    <Typography
                        component="p"
                        variant="subtitle2"
                        noWrap
                        textAlign="center"
                        color={theme.palette.common.white}
                        sx={{
                            width: "100%",
                            backgroundColor: theme.palette.common.black,
                            padding: theme.spacing(1),
                            display: "relative",
                            marginTop: -4.6,
                            opacity: 0.7,
                        }}
                    >
                        <DateRangeIcon sx={{ fontSize: 18, marginRight: 1 }} />
                        {props.releaseDate}
                    </Typography>
                    <Typography
                        component="p"
                        variant="subtitle2"
                        color={theme.palette.common.white}
                        sx={{ padding: theme.spacing(1), width: "100%" }}
                        noWrap
                    >
                        {props.title}
                    </Typography>
                </Paper>
            </Grid>
        );
    };

    return (
        <div data-testid="RecentlyAdded">
            <Grid container>
                <Grid
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
                </Grid>
                <Container>
                    <Grid
                        item
                        container
                        md={12}
                        spacing={2}
                        sx={{
                            paddingTop: theme.spacing(2),
                            paddingBottom: theme.spacing(2),
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
            </Grid>
        </div>
    );
};

export default RecentlyAdded;
