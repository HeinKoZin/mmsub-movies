import * as React from "react";
import {
    BrowserRouter as Router,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import Header from "./Components/Header/Header";
import { routes } from "../routes";
import Home from "./Pages/Home/Home.lazy";
import Help from "./Pages/Help/Help";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import RecentlyAdded from "./Components/RecentlyAdded/RecentlyAdded";

const App = () => {
    return (
        <>
            <Header />

            {/* {routes.map((route, i) => (
                    <Route
                        path={route.path}
                        component={route.component}
                        key={i}
                        exact
                    />
                ))} */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="all" element={<Help />} />
                <Route path="movies" element={<Help />} />
                <Route path="series" element={<Help />} />
                <Route path="help" element={<Help />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
