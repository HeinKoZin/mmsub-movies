import React, { useEffect } from "react";
import { createTheme, styled } from "@mui/material/styles";
import {
    Button,
    Card,
    CardMedia,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { alpha, borderRadius, display, fontSize, width } from "@mui/system";
import {
    Circle as CircleIcon,
    DateRange as DateRangeIcon,
} from "@mui/icons-material";
import { RefObject } from "react-transition-group/node_modules/@types/react";
import { useParams } from "react-router";

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
        height: "500px",
        backgroundImage: `url(${bgcover})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",

        [theme.breakpoints.down("sm")]: {
            height: "365px",
        },
    })
);

const MovieGrid = styled(Grid)<{ recommend?: boolean }>(
    ({ theme, recommend }) => ({
        zIndex: 0,
        padding: theme.spacing(12, 15),
        paddingBottom: theme.spacing(0),
        marginTop: theme.spacing(0),

        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(7, 2),
        },
    })
);

const BgOpacity = styled("div")<{ recommend?: boolean }>(
    ({ theme, recommend }) => ({
        height: "500px",
        width: "100vw",
        opacity: 0.5,
        position: "absolute",
        backgroundColor: theme.palette.common.black,

        [theme.breakpoints.down("sm")]: {
            height: "365px",
        },
    })
);

// Movie Cover Components
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
                    sx={{ height: { xs: 200, sm: 380 } }}
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
                    marginTop: -4.7,
                    opacity: 0.7,
                }}
            >
                <DateRangeIcon sx={{ fontSize: 18, marginRight: 1 }} />
                {props.movieData?.release_date}
            </Typography>
        </Paper>
    );
};

const StyledRecommended = styled("p")<MoviePropsTypes>(({ theme }) => ({
    padding: theme.spacing(1),
    marginTop: 0,
    backgroundColor: theme.palette.success.light,
    display: "inline-block",
    fontSize: 12,
    borderRadius: theme.spacing(2),
}));

const Tag = styled(Typography)<MoviePropsTypes>(({ theme }) => ({
    padding: theme.spacing(1, 0),
    fontSize: 12,
}));

const MovieDetail = (props: MoviePropsTypes) => {
    return (
        <>
            <StyledRecommended>Recommended</StyledRecommended>
            <Typography
                component="p"
                variant="h5"
                noWrap
                sx={{ width: "100%" }}
            >
                {props.movieData?.original_title}
            </Typography>

            <Grid
                item
                container
                md={12}
                style={{ overflow: "auto" }}
                spacing={1}
            >
                {["Action", "Crime", "Sifi"].map((genre) => (
                    <Grid item md={2} key={genre}>
                        <Tag noWrap>
                            <CircleIcon sx={{ fontSize: 10, marginRight: 1 }} />
                            {genre}{" "}
                        </Tag>
                    </Grid>
                ))}
            </Grid>
            <Typography
                color={theme.palette.common.white}
                component="p"
                variant="body2"
                sx={{
                    width: "100%",
                    boxOrient: "vertical",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    display: "box",
                    maxHeight: { md: 150, xs: 75, sm: 100 },
                }}
            >
                {props.movieData?.overview}
            </Typography>
            <Grid
                container
                item
                md={6}
                spacing={1}
                sx={{ marginTop: 2, fontSize: 12 }}
            >
                <Grid item md={4}>
                    <CircleIcon sx={{ fontSize: 10, marginRight: 1 }} />
                    {props.movieData?.popularity}
                </Grid>
                <Grid item md={4}>
                    <CircleIcon sx={{ fontSize: 10, marginRight: 1 }} />
                    {props.movieData?.vote_count}
                </Grid>
                <Grid item md={4}>
                    <CircleIcon sx={{ fontSize: 10, marginRight: 1 }} />
                    {props.movieData?.vote_average}
                </Grid>
            </Grid>
            <Button
                size="medium"
                color="primary"
                variant="contained"
                sx={{ marginTop: theme.spacing(2) }}
            >
                Watch Now
            </Button>
        </>
    );
};

const Movie = (props: MoviePropsTypes) => {
    return (
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
                <Grid
                    item
                    md={9}
                    xs={7}
                    sx={{ color: theme.palette.common.white }}
                >
                    <MovieDetail {...props} />
                </Grid>
            </MovieGrid>
        </MovieContainer>
    );
};

export default Movie;
