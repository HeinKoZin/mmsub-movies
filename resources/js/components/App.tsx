import * as React from "react";
import Header from "./Components/Header/Header";
import TodayMovie from "./Components/TodayMovie/TodayMovie";

const App = () => {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
            }}
        >
            <Header />
            <TodayMovie />
        </div>
    );
};

export default App;
