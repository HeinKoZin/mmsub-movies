import React from "react";
import Carousel from "react-material-ui-carousel";
import {
    ArrowBackIosNew as ArrowBackIosNewIcon,
    ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";

const theme = createTheme();

// const useStyles = makeStyles((theme) => ({
//     wrapper: {
//         "& .MuiSvgIcon-root": {
//             [theme.breakpoints.down("sm")]: { fontSize: 5 },
//         },
//     },
// }));

const MovieCarousel = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
    return (
        <Carousel
            animation="slide"
            swipe={true}
            indicators={
                useMediaQuery(theme.breakpoints.down("sm")) ? false : true
            }
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosNewIcon />}
            next={() => {
                console.log("next");
            }}
            prev={() => {
                console.log("prev");
            }}
        >
            {props.children}
        </Carousel>
    );
};

export default MovieCarousel;
