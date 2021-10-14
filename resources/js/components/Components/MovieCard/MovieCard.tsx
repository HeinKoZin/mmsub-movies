import React from "react";
import {
    Card,
    CardMedia,
    createTheme,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import {
    DateRange as DateRangeIcon,
    Circle as CircleIcon,
    AccessTime as AccessTimeIcon,
    Star as StarIcon,
} from "@mui/icons-material";
import { ResultsTypes } from "../Movie/Movie";

const imagePath = "https://image.tmdb.org/t/p/original";

const theme = createTheme();

const MovieCard = (props?: ResultsTypes) => {
    return (
        <Grid item md={2} xs={4}>
            <Card sx={{ position: "relative" }}>
                <div
                    style={{
                        position: "absolute",
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        right: 4,
                        top: 4,
                    }}
                >
                    <Typography
                        variant="caption"
                        color="primary"
                        align="center"
                        sx={{
                            width: 50,
                            backgroundColor: theme.palette.common.black,
                            padding: theme.spacing(0.5),
                            display: "block",
                            opacity: 0.8,
                        }}
                    >
                        <StarIcon
                            sx={{
                                color: "#fe9920",
                                fontSize: 16,
                                marginRight: 0.5,
                                marginLeft: 0,
                            }}
                        />
                        {props?.vote_average}
                    </Typography>
                </div>
                <CardMedia
                    component="img"
                    image={
                        props?.poster_path
                            ? imagePath + props.poster_path
                            : "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2014%2F10%2F2v00kg8.jpg"
                    }
                    sx={{ height: { xs: 180, sm: 250 } }}
                />

                {/* Release Data */}
            </Card>

            <Typography
                component="p"
                variant="subtitle2"
                color={theme.palette.common.white}
                sx={{ padding: theme.spacing(1, 0), width: "100%" }}
                noWrap
            >
                {props?.title}
            </Typography>
            <Typography
                component="p"
                variant="caption"
                color={theme.palette.common.white}
                sx={{ padding: theme.spacing(0), width: "100%", opacity: 0.7 }}
                noWrap
            >
                {props?.release_date?.slice(0, 4)}{" "}
                <CircleIcon
                    sx={{ fontSize: 6, marginLeft: 1, marginRight: 1 }}
                />
                105 mins
            </Typography>
        </Grid>
    );
};

export default MovieCard;
