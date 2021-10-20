import React, { useState } from "react";
import {
    alpha,
    Button,
    Card,
    CardMedia,
    darken,
    Grid,
    IconButton,
    styled,
    Tooltip,
    tooltipClasses,
    TooltipProps,
    Typography,
    useMediaQuery,
} from "@mui/material";
import {
    DateRange as DateRangeIcon,
    Circle as CircleIcon,
    AccessTime as AccessTimeIcon,
    Star as StarIcon,
    PlayArrow as PlayArrowIcon,
    FavoriteBorder as FavoriteBorderIcon,
} from "@mui/icons-material";
import { ResultsTypes } from "../Movie/Movie";
import theme from "../../Hooks/theme";

const imagePath = "https://image.tmdb.org/t/p/original";

const MovieCard = (props: ResultsTypes) => {
    const [hover, setHover] = useState<boolean>(false);

    return (
        <PopperTooltip
            title={
                useMediaQuery(theme.breakpoints.down("sm")) ? (
                    ""
                ) : (
                    <DetailPopper {...props} />
                )
            }
            placement="right"
            onMouseEnter={(e) => {
                setHover(true);
            }}
            onMouseLeave={(e) => {
                setHover(false);
            }}
        >
            <Grid item md={2} xs={4}>
                <Card sx={{ position: "relative" }}>
                    <div
                        style={{
                            position: "absolute",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                            right: 4,
                            top: 4,
                            backgroundColor: theme.palette.common.black,
                            padding: theme.spacing(0.5, 1),
                            borderRadius: theme.spacing(1),
                        }}
                    >
                        <StarIcon
                            sx={{
                                color: "#fe9920",
                                fontSize: 16,
                                marginRight: 0.3,
                            }}
                        />
                        <Typography
                            variant="caption"
                            color="primary"
                            sx={{
                                opacity: 0.8,
                            }}
                        >
                            {props?.vote_average}
                        </Typography>
                    </div>

                    {/* NOTE: PlayButton on Hover */}
                    <div
                        style={{
                            width: "100%",
                            position: "absolute",
                            height: useMediaQuery(theme.breakpoints.down("sm"))
                                ? 180
                                : 250,
                            backgroundColor: alpha(
                                theme.palette.common.black,
                                0.5
                            ),
                            display: hover ? "flex" : "none",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CustomIconButton>
                            <PlayArrowIcon
                                sx={{
                                    color: theme.palette.myIconColor.main,
                                    fontSize: 30,
                                }}
                            />
                        </CustomIconButton>
                    </div>

                    {/* NOTE: Movie Cover */}
                    <CardMedia
                        component="img"
                        image={
                            props?.poster_path
                                ? imagePath + props.poster_path
                                : "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2014%2F10%2F2v00kg8.jpg"
                        }
                        sx={{ height: { xs: 180, sm: 250 } }}
                    />
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
                    sx={{
                        padding: theme.spacing(0),
                        width: "100%",
                        opacity: 0.7,
                    }}
                    noWrap
                >
                    {/* Release Data */}
                    {props?.release_date?.slice(0, 4)}{" "}
                    <CircleIcon
                        sx={{ fontSize: 6, marginLeft: 1, marginRight: 1 }}
                    />
                    105 mins
                </Typography>
            </Grid>
        </PopperTooltip>
    );
};

const CustomIconButton = styled("button")(({ theme }) => ({
    padding: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(10),
    cursor: "pointer",
    "& :hover": {
        opacity: 0.6,
    },
}));

const PopperTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        color: "#fff",
        backgroundColor: alpha("#1D1E22", 1),
        maxWidth: 240,
        fontSize: theme.typography.pxToRem(12),
        borderRadius: 12,
        padding: theme.spacing(2),
    },
}));

const DetailPopper = (props?: ResultsTypes) => {
    return (
        <div
            style={{
                width: "100%",
                color: theme.palette.common.white,
            }}
        >
            <Typography
                variant="subtitle2"
                component="p"
                width="100%"
                fontWeight={400}
            >
                {props?.title}
            </Typography>
            <Grid
                container
                spacing={1}
                sx={{ marginTop: 1, fontSize: 12, fontWeight: 200 }}
            >
                <Grid
                    item
                    md={4}
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignContent="center"
                >
                    <StarIcon
                        sx={{
                            fontSize: 17,
                            marginRight: 0.5,
                            color: theme.palette.myIconColor.main,
                        }}
                    />
                    <span>{props?.vote_average}</span>
                </Grid>
                <Grid item md={4}>
                    {props?.vote_count}
                </Grid>
                <Grid item md={4}>
                    {/* <CircleIcon sx={{ fontSize: 10, marginRight: 1 }} /> */}
                    {props?.popularity}
                </Grid>
            </Grid>
            <Typography
                color={theme.palette.common.white}
                component="p"
                variant="caption"
                sx={{
                    width: "100%",
                    boxOrient: "vertical",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    marginTop: 1,
                    marginBottom: 2,
                    display: "box",
                    maxHeight: { md: 110, sm: 100 },
                }}
            >
                {props?.overview}
            </Typography>
            <Grid
                container
                spacing={1}
                sx={{ marginTop: 1, fontSize: 12, fontWeight: 200 }}
            >
                <Grid
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                    alignContent="center"
                    flexGrow={1}
                >
                    <Button
                        style={{
                            backgroundColor: "#424242",
                            fontSize: 13,
                            textTransform: "capitalize",
                            height: 40,
                        }}
                        size="small"
                        fullWidth
                    >
                        <PlayArrowIcon
                            sx={{
                                fontSize: 24,
                                marginRight: 0.5,
                                color: theme.palette.myIconColor.main,
                            }}
                        />{" "}
                        Watch Now
                    </Button>
                </Grid>
                <Grid item>
                    <CustomIconButton
                        style={{
                            backgroundColor:
                                theme.palette.myIconColor.secondary,
                            height: 40,
                            width: 40,
                            padding: 0,
                            borderRadius: theme.spacing(1),
                        }}
                    >
                        <FavoriteBorderIcon
                            sx={{
                                fontSize: 20,
                                color: theme.palette.primary.main,
                            }}
                        />
                    </CustomIconButton>
                </Grid>
            </Grid>
        </div>
    );
};

export default MovieCard;
