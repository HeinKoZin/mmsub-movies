import { RouteComponentProps } from "react-router-dom";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";
import Help from "./components/Pages/Help/Help";
import Home from "./components/Pages/Home/Home";

export let routes: routesInterface[] = [
    { title: "Home", path: "/", component: Home },
    { title: "How To?", path: "/help", component: Help },
    { title: "About us", path: "/about", component: About },
    { title: "Contact us", path: "/contact", component: Contact },
];

interface routesInterface {
    title: string;
    path: string;
    component?:
        | React.ComponentType<RouteComponentProps<any>>
        | React.ComponentType<any>;
}
