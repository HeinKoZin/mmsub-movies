import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AllMoviesAndSeries from "./AllMoviesAndSeries";

describe("<AllMoviesAndSeries />", () => {
    test("it should mount", () => {
        render(<AllMoviesAndSeries />);

        const all = screen.getByTestId("AllMoviesAndSeries");

        expect(all).toBeInTheDocument();
    });
});
