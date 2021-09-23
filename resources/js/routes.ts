import { RouteComponentProps } from "react-router-dom";
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

export let routes: routesInterface[] = [
    {
        title: "Home",
        path: "/",
        component: Home,
        icon: HomeIcon,
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

interface routesInterface {
    title: string;
    path: string;
    component?:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
    // icon: string;
    icon: SvgIconComponent;
}
