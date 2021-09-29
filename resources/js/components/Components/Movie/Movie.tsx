import React from "react";
import { createTheme, styled } from "@mui/material/styles";
import { Card, CardMedia, Grid, Paper, Typography } from "@mui/material";

const theme = createTheme();

const imagePath = "https://image.tmdb.org/t/p/original";

export interface MoviePropsTypes {
    recommend?: boolean;
    movieData?: ResultsTypes;
}

// export interface MoviePropsTypes {
//     recommend?: boolean;
//     bgCover?: string;
//     movieCover?: string;
//     movieData?: MovieDataTypes;
// }

export type MovieDataTypes = {
    page: number;
    results: ResultsTypes[];
};

export type ResultsTypes = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

const MovieContainer = styled("div")<{ recommend?: boolean; bgcover?: string }>(
    ({ theme, recommend, bgcover }) => ({
        width: "100vw",
        height: recommend ? "500px" : "100vh",
        backgroundImage: `url(${bgcover})`,
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",

        [theme.breakpoints.down("sm")]: {
            height: recommend ? "350px" : "100vh",
        },
    })
);

const MovieGrid = styled(Grid)<{ recommend?: boolean }>(
    ({ theme, recommend }) => ({
        zIndex: 0,
        padding: recommend ? theme.spacing(12, 15) : theme.spacing(15),
        paddingBottom: theme.spacing(0),
        marginTop: recommend ? theme.spacing(0) : theme.spacing(7),

        [theme.breakpoints.down("sm")]: {
            padding: recommend ? theme.spacing(10, 2) : theme.spacing(15, 0),
        },
    })
);

const BgOpacity = styled("div")<{ recommend?: boolean }>(
    ({ theme, recommend }) => ({
        height: recommend ? "500px" : "100vh",
        width: "100vw",
        opacity: 0.5,
        position: "absolute",
        backgroundColor: theme.palette.common.black,

        [theme.breakpoints.down("sm")]: {
            height: recommend ? "350px" : "100vh",
        },
    })
);

const MovieCover = (props: MoviePropsTypes) => {
    return (
        <Paper sx={{ width: "100%" }} elevation={10}>
            <Card raised>
                <CardMedia
                    component="img"
                    image={
                        props.movieData?.poster_path
                            ? imagePath + props.movieData.poster_path
                            : "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2014%2F10%2F2v00kg8.jpg"
                    }
                    sx={{ height: { xs: 200, sm: 400 } }}
                />
            </Card>
        </Paper>
    );
};

const MovieDetail = (props: MoviePropsTypes) => {
    return (
        <>
            <Typography
                component="p"
                variant="h5"
                noWrap
                sx={{ width: "100%" }}
            >
                {props.movieData?.original_title}
            </Typography>
            <h4>{props.movieData?.release_date}</h4>
        </>
    );
};

const Movie = (props: MoviePropsTypes) => (
    <MovieContainer
        data-testid="TodayMovie"
        sx={{ backgroundPosition: { xs: "right", sm: "right" } }}
        recommend={props.recommend}
        bgcover={imagePath + props.movieData?.backdrop_path}
    >
        <BgOpacity recommend={props.recommend} />
        <MovieGrid container recommend={props.recommend} spacing={2}>
            <Grid item md={3} xs={5}>
                <MovieCover {...props} />
            </Grid>
            <Grid item md={9} xs={7} sx={{ color: theme.palette.common.white }}>
                <MovieDetail {...props} />
            </Grid>
        </MovieGrid>
    </MovieContainer>
);

export default Movie;
