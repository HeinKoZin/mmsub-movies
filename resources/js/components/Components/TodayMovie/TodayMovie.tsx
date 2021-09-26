import React from "react";
import { createTheme, styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const theme = createTheme();

const TodayMovieContainer = styled("div")(({ theme }) => ({
    width: "100vw",
    height: "100vh",
    backgroundImage:
        "url('https://spacequotations.com/wp-content/uploads/2019/01/interstellar.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

const TodayMovie = () => (
    <TodayMovieContainer
        data-testid="TodayMovie"
        sx={{ backgroundPosition: { xs: "right", sm: "right" } }}
    >
        <Grid container sx={{ padding: theme.spacing(20) }}>
            <Grid item md={4}>
                Cover
            </Grid>
            <Grid item md={8}>
                Details
            </Grid>
        </Grid>
    </TodayMovieContainer>
);

export default TodayMovie;
