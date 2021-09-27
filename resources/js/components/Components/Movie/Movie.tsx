import React from "react";
import { createTheme, styled } from "@mui/material/styles";
import { Card, CardMedia, Grid, Paper } from "@mui/material";
import MovieCarousel from "../MovieCarousel/MovieCarousel";

const theme = createTheme();

const MovieContainer = styled("div")<{ recommend?: boolean }>(
    ({ theme, recommend }) => ({
        width: "100vw",
        height: recommend ? "500px" : "100vh",
        backgroundImage:
            "url('https://spacequotations.com/wp-content/uploads/2019/01/interstellar.jpg')",
        backgroundPosition: "contain",
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
        padding: recommend ? theme.spacing(13, 15) : theme.spacing(15),
        paddingBottom: theme.spacing(0),
        marginTop: recommend ? theme.spacing(0) : theme.spacing(7),

        [theme.breakpoints.down("sm")]: {
            padding: recommend ? theme.spacing(10, 0) : theme.spacing(0),
        },
    })
);

interface MovieProps {
    recommend?: boolean;
}

const Movie = (props: MovieProps) => (
    <MovieContainer
        data-testid="TodayMovie"
        sx={{ backgroundPosition: { xs: "right", sm: "right" } }}
        recommend={props.recommend}
    >
        <MovieGrid container recommend={props.recommend} spacing={2}>
            <Grid
                item
                xs={1}
                display={{ sm: "none", md: "none", lg: "none" }}
            />
            <Grid item md={3} xs={4}>
                <Paper sx={{ width: "100%" }} elevation={24}>
                    <Card raised>
                        <CardMedia
                            component="img"
                            image="https://lh3.googleusercontent.com/proxy/5S_EuDDPZIkZvtov2PqoMyNohvQvRlM0Lps03jXOb5YBW2v97jeQAINal4j1b7r9AXYghW6Sq6K-9XGem4_N8SfyL3WwktMF2PFa3HB3xroshyMGGr6kDUqNtzgUUQzPBNA"
                            sx={{ height: { xs: 200, sm: 400 } }}
                        />
                    </Card>
                </Paper>
            </Grid>
            <Grid item md={9}>
                Details
            </Grid>
        </MovieGrid>
    </MovieContainer>
);

export default Movie;
