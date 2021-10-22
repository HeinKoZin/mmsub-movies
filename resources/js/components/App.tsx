import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import { default as HomePage } from "./Pages/Home/Home.lazy";
import { default as HelpPage } from "./Pages/Help/Help";
import { default as ContactPage } from "./Pages/Contact/Contact";
import { default as AboutPage } from "./Pages/About/About";
import { default as MoviePage } from "./Pages/Movie/Movie";
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
                <Route path="/" element={<HomePage />}>
                    {/* <Route path="/" element={<RecentlyAdded />} /> */}
                    <Route path="/" element={<AllMoviesAndSeries />} />
                    <Route path="movies" element={<h3>Movies</h3>} />
                    <Route path="series" element={<h3>Series</h3>} />
                </Route>
                <Route path="help" element={<HelpPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="movie" element={<MoviePage />} />
            </Routes>

            {/* //NOTE: Footer */}
            <Footer />
        </>
    );
};

export default App;
