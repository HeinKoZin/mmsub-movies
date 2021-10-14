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
} from "@mui/icons-material";
import { fontSize } from "@mui/system";

const imagePath = "https://image.tmdb.org/t/p/original";

const theme = createTheme();

const MovieCard = (props: {
    cover?: string;
    releaseDate?: string;
    title?: string;
}) => {
    return (
        <Grid item md={2} xs={4}>
            <Card>
                <CardMedia
                    component="img"
                    image={
                        props.cover
                            ? imagePath + props.cover
                            : "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2014%2F10%2F2v00kg8.jpg"
                    }
                    sx={{ height: { xs: 180, sm: 250 } }}
                />

                {/* Release Data */}
            </Card>

            {/* <Typography
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
            </Typography> */}
            <Typography
                component="p"
                variant="subtitle2"
                color={theme.palette.common.white}
                sx={{ padding: theme.spacing(1, 0), width: "100%" }}
                noWrap
            >
                {props.title}
            </Typography>
            <Typography
                component="p"
                variant="caption"
                color={theme.palette.common.white}
                sx={{ padding: theme.spacing(0), width: "100%", opacity: 0.7 }}
                noWrap
            >
                {props.releaseDate?.slice(0, 4)}{" "}
                <CircleIcon
                    sx={{ fontSize: 6, marginLeft: 1, marginRight: 1 }}
                />
                105 mins
            </Typography>
        </Grid>
    );
};

export default MovieCard;
