import React from "react";
import {
    Button,
    Container,
    createTheme,
    Grid,
    styled,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { routesInterface } from "../../../routes";
import RecentlyAdded from "../../Components/RecentlyAdded/RecentlyAdded.lazy";
import TodayMovie from "../../Components/TodayMovie/TodayMovie.lazy";
import { fontSize } from "@mui/system";

const theme = createTheme();

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    padding: theme.spacing(2),
    color: theme.palette.common.white,
    marginRight: theme.spacing(1),
    fontSize: 15,
    paddingBottom: theme.spacing(1),
}));

const HomeMenuBar = () => {
    let activeStyle = {
        padding: theme.spacing(2),
        color: theme.palette.common.white,
        marginRight: theme.spacing(1),
        fontSize: 15,
        paddingBottom: theme.spacing(1),
        borderBottomWidth: 2,
    };
    let nonActiveStyle = {
        padding: theme.spacing(2),
        color: theme.palette.common.white,
        marginRight: theme.spacing(1),
        fontSize: 15,
        paddingBottom: theme.spacing(1),
        borderBottomWidth: 0,
    };

    return (
        <Grid
            item
            container
            md={12}
            style={{
                backgroundColor: "#1D1E22",
                paddingTop: theme.spacing(4),
            }}
        >
            <Container
                style={{
                    display: "flex",
                    justifyContent: useMediaQuery(theme.breakpoints.down("sm"))
                        ? "center"
                        : "flex-start",
                }}
            >
                <NavLink
                    to="/"
                    style={({ isActive }) =>
                        isActive ? activeStyle : nonActiveStyle
                    }
                >
                    Recently Added
                </NavLink>
                <NavLink
                    to="/all"
                    style={({ isActive }) =>
                        isActive ? activeStyle : nonActiveStyle
                    }
                >
                    All
                </NavLink>
                <NavLink
                    to="/movies"
                    style={({ isActive }) =>
                        isActive ? activeStyle : nonActiveStyle
                    }
                >
                    Movies
                </NavLink>
                <NavLink
                    to="/series"
                    style={({ isActive }) =>
                        isActive ? activeStyle : nonActiveStyle
                    }
                >
                    Series
                </NavLink>
            </Container>
        </Grid>
    );
};

const Home = () => {
    return (
        <div data-testid="Home" style={{ width: "100%" }}>
            <TodayMovie />
            <HomeMenuBar />
            <Outlet />
        </div>
    );
};

export default Home;
