import React from "react";
import {
    alpha,
    AppBar,
    Box,
    Button,
    Divider,
    Drawer,
    IconButton,
    InputBase,
    List,
    ListItem,
    Toolbar,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import { routes } from "../../../routes";
import { Link, NavLink } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { styled, createTheme } from "@mui/material/styles";
import { spacing } from "@mui/system";

const theme = createTheme();

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
    "& .MuiInputBase-input": {
        color: theme.palette.common.white,
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

const Title = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    display: "block",
    width: 250,
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: { marginLeft: theme.spacing(-2.5) },
}));

let activeStyle = {
    color: theme.palette.common.white,
    fontSize: 15,
    borderBottomWidth: 2,
};
let nonActiveStyle = {
    color: theme.palette.common.white,
    fontSize: 15,
    borderBottomWidth: 0,
};

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1, color: "inherit" }}>
            <AppBar
                position="absolute"
                color="transparent"
                sx={{ boxShadow: "none" }}
            >
                <Toolbar>
                    <MobileDrawer />
                    <Title variant="h6" noWrap>
                        MMSub Movies
                    </Title>
                    <DesktopMenu />
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon color="primary" />
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

const DesktopMenu = () => {
    return (
        <>
            {useMediaQuery(theme.breakpoints.up("sm"))
                ? routes.map((route, index) => {
                      return (
                          <NavLink
                              to={route.path}
                              key={index}
                              style={({ isActive }) =>
                                  isActive ? activeStyle : nonActiveStyle
                              }
                          >
                              <Button>{route.title}</Button>
                          </NavLink>
                      );
                  })
                : ""}
        </>
    );
};

const MobileDrawer = () => {
    type Anchor = "left";

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleStatus =
        (anchor: Anchor, status: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: status });
        };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: 250,
            }}
            role="presentation"
            onClick={toggleStatus(anchor, false)}
            onKeyDown={toggleStatus(anchor, false)}
        >
            <DrawerHeader>
                <Typography variant="h6" noWrap>
                    MMSub Movies
                </Typography>
                <IconButton onClick={toggleStatus("left", false)}>
                    {theme.direction === "ltr" ? (
                        <ChevronLeftIcon />
                    ) : (
                        <ChevronRightIcon />
                    )}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {routes.map((route, index) => (
                    <ListItem button key={route.toString()}>
                        <ListItemIcon>
                            <route.icon />
                        </ListItemIcon>
                        {/* <ListItemText primary={route.title} /> */}
                        <NavLink to={route.path}>{route.title}</NavLink>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    // NOTE: DrawerHeader

    const DrawerHeader = styled("div")(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: "flex-end",

        "& .MuiTypography-root": {
            flexGrow: 1,
            textAlign: "center",
        },
    }));

    // NOTE: Drawer

    return (
        <div>
            {useMediaQuery(theme.breakpoints.down("sm")) ? (
                <React.Fragment>
                    <IconButton
                        size="large"
                        edge="start"
                        color="primary"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={toggleStatus("left", true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor={"left"}
                        open={state["left"]}
                        onClose={toggleStatus("left", false)}
                    >
                        {list("left")}
                    </Drawer>
                </React.Fragment>
            ) : (
                ""
            )}
        </div>
    );
};
