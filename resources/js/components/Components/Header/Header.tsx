import React from "react";
import {
    alpha,
    AppBar,
    Box,
    Button,
    createTheme,
    Divider,
    Drawer,
    Icon,
    IconButton,
    InputBase,
    List,
    ListItem,
    styled,
    Toolbar,
    Typography,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import { routes } from "../../../routes";
import { Link } from "react-router-dom";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
                    <MobileDrawer />
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

const MobileDrawer = () => {
    const theme = createTheme();
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
                <Typography variant="h5" noWrap>
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
                        <ListItemText primary={route.title} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

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

    return (
        <div>
            <React.Fragment>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
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
        </div>
    );
};
