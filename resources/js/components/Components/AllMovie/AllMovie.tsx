import React from "react";
import {
    Box,
    Container,
    createTheme,
    Grid,
    styled,
    Tab,
    Tabs,
    Typography,
    useMediaQuery,
} from "@mui/material/";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { routesInterface } from "../../../routes";
import Movie from "../Movie/Movie";
import TodayMovie from "../TodayMovie/TodayMovie.lazy";

const theme = createTheme();

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface TabProps {
    onChange:
        | ((event: React.SyntheticEvent<Element, Event>, value: any) => void)
        | undefined;
    value: number;
    url?: string;
}

interface MovieListProps {}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography color="primary">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    padding: theme.spacing(4, 6),
    paddingLeft: theme.spacing(0),
    borderColor: "divider",
    borderBottomWidth: 1,
}));

const SortingBar = (props: TabProps) => {
    // const [age, setAge] = React.useState("");
    // const handleChange = (event: SelectChangeEvent) => {
    //     setAge(event.target.value);
    // };

    return (
        <Grid
            item
            container
            sx={{
                backgroundColor: "#18191C",
                marginTop: theme.spacing(5),
                width: "100%",
            }}
        >
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    color: theme.palette.common.white,
                    width: "100%",
                }}
            >
                {/* <Tabs
                    value={props.value}
                    onChange={props.onChange}
                    aria-label="basic tabs example"
                    textColor="primary"
                    variant={
                        useMediaQuery(theme.breakpoints.down("sm"))
                            ? "scrollable"
                            : "standard"
                    }
                    scrollButtons
                    allowScrollButtonsMobile
                    centered={
                        useMediaQuery(theme.breakpoints.down("sm"))
                            ? false
                            : true
                    }
                >
                    <Tab
                        label="All"
                        {...a11yProps(0)}
                        sx={{ color: theme.palette.common.white }}
                    />
                    <Tab
                        label="Movie"
                        {...a11yProps(1)}
                        sx={{ color: theme.palette.common.white }}
                    />
                    <Tab
                        label="Series"
                        {...a11yProps(2)}
                        sx={{ color: theme.palette.common.white }}
                    />
                </Tabs> */}
                <StyledNavLink to="/">All</StyledNavLink>
                <StyledNavLink to="/movies">movies</StyledNavLink>
                <StyledNavLink to="/series">Series</StyledNavLink>
            </Box>
        </Grid>
    );
};

const RecentlyAdded = (props: MovieListProps) => {
    return <Grid container spacing={1}></Grid>;
};

const AllMovie = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div
            style={{
                backgroundColor: "#18191C",
                width: "100%",
            }}
        >
            <Container>
                <Grid container>
                    <SortingBar value={value} onChange={handleChange} />
                    <Grid item xs={12} md={12}>
                        {/* <TabPanel value={value} index={0}>
                            All
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Movie
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Series
                        </TabPanel> */}
                        <Routes>
                            <Route path="/" element={<h2>All</h2>} />
                            <Route path="/movies" element={<h2>Movies</h2>} />
                            <Route path="/series" element={<h2>Series</h2>} />
                        </Routes>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default AllMovie;
