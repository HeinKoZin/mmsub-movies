import React from "react";
import { Link, Outlet, Route, useParams } from "react-router-dom";
import { routesInterface } from "../../../routes";
import RecentlyAdded from "../../Components/RecentlyAdded/RecentlyAdded.lazy";
import TodayMovie from "../../Components/TodayMovie/TodayMovie.lazy";

const Home = () => {
    return (
        <div data-testid="Home" style={{ width: "100%" }}>
            <TodayMovie />
            <RecentlyAdded />
        </div>
    );
};

export default Home;
