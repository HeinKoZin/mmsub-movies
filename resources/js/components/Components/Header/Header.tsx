import React from "react";
import {
    alpha,
    AppBar,
    Box,
    Button,
    IconButton,
    InputBase,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import { routes } from "../../../routes";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

// const StyledLink = styled(Link)(({ theme }) => ({
//     color: "inherit",
//     textDecoration: "none",
// }));

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="absolute"
                color="transparent"
                sx={{ boxShadow: "none" }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        noWrap
                        sx={{
                            flexGrow: 1,
                            display: { xs: "block", sm: "block" },
                        }}
                    >
                        MMSub Movies
                    </Typography>
                    <>
                        {routes.map((route, index) => {
                            return (
                                <Link to={route.path} key={index}>
                                    <Button color="inherit">
                                        {route.title}
                                    </Button>
                                </Link>
                            );
                        })}
                    </>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
