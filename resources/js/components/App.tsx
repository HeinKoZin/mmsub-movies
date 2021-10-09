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
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<RecentlyAdded />} />
                    <Route path="all" element={<h3>All</h3>} />
                    <Route path="movies" element={<h3>Movies</h3>} />
                    <Route path="series" element={<h3>Series</h3>} />
                </Route>
                <Route path="help" element={<Help />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Routes>
        </>
    );
};

export default App;
