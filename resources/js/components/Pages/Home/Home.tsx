import React from "react";
import { Link, Route, useParams } from "react-router-dom";
import { routesInterface } from "../../../routes";
import AllMovie from "../../Components/AllMovie/AllMovie";
import TodayMovie from "../../Components/TodayMovie/TodayMovie";

const Home = () => {
    return (
        <div
            data-testid="Home"
            style={{ margin: 0, padding: 0, width: "100%" }}
        >
            <TodayMovie />
            <AllMovie />
        </div>
    );
};

export default Home;
