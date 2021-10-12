import React from "react";
import {
    Card,
    CardMedia,
    createTheme,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { DateRange as DateRangeIcon } from "@mui/icons-material";

const imagePath = "https://image.tmdb.org/t/p/original";

const theme = createTheme();

const MovieCard = (props: {
    cover?: string;
    releaseDate?: string;
    title?: string;
}) => {
    return (
        <Grid item md={2} xs={4}>
            <Paper
                sx={{ width: "100%", backgroundColor: "#1D1E22" }}
                elevation={4}
            >
                <Card
                    sx={{
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                    }}
                >
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

export default MovieCard;
