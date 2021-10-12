import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Help from "./components/Pages/Help/Help";
import Home from "./components/Pages/Home/Home";
import {
    Home as HomeIcon,
    Help as HelpIcon,
    Contacts as ContactsIcon,
    Info as InfoIcon,
    SvgIconComponent,
} from "@mui/icons-material";
import React from "react";

export let routes: routesInterface[] = [
    {
        title: "Home",
        path: "/",
        component: Home,
        icon: HomeIcon,
        routes: [
            {
                title: "Home",
                path: "/home/home",
                component: Home,
                icon: HomeIcon,
            },
        ],
    },
    {
        title: "How To?",
        path: "/help",
        component: Help,
        icon: HelpIcon,
    },
    {
        title: "About us",
        path: "/about",
        component: About,
        icon: InfoIcon,
    },
    {
        title: "Contact us",
        path: "/contact",
        component: Contact,
        icon: ContactsIcon,
    },
];

export interface routesInterface {
    title: string;
    path: string;
    component: React.ComponentType<any> | React.ComponentType<any>;
    // icon: string;
    icon: SvgIconComponent;
    routes?: routesInterface[];
}
