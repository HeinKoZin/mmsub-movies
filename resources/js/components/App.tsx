import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home.lazy";
import Help from "./Pages/Help/Help";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import RecentlyAdded from "./Components/RecentlyAdded/RecentlyAdded";
import Footer from "./Components/Footer/Footer";
import AllMoviesAndSeries from "./Components/All/AllMoviesAndSeries.lazy";

const App = () => {
    return (
        <>
            {/* // NOTE: Header */}
            <Header />

            {/* {routes.map((route, i) => (
                    <Route
                        path={route.path}
                        component={route.component}
                        key={i}
                        exact
                    />
                ))} */}

            {/* // NOTE: App routes */}
            <Routes>
                <Route path="/" element={<Home />}>
                    {/* <Route path="/" element={<RecentlyAdded />} /> */}
                    <Route path="/" element={<AllMoviesAndSeries />} />
                    <Route path="movies" element={<h3>Movies</h3>} />
                    <Route path="series" element={<h3>Series</h3>} />
                </Route>
                <Route path="help" element={<Help />} />
                <Route path="contact" element={<Contact />} />
                <Route path="about" element={<About />} />
            </Routes>

            {/* //NOTE: Footer */}
            <Footer />
        </>
    );
};

export default App;
