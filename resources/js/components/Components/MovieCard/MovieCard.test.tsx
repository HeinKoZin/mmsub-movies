import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MovieCard from "./MovieCard";
import { ResultsTypes } from "../Movie/Movie";

describe("<MovieCard />", () => {
    test("it should mount", () => {
        render(
            <MovieCard
                adult={false}
                backdrop_path={""}
                genre_ids={[]}
                id={0}
                original_language={""}
                original_title={""}
                overview={""}
                popularity={0}
                poster_path={""}
                release_date={""}
                title={""}
                video={false}
                vote_average={0}
                vote_count={0}
            />
        );

        const movieCard = screen.getByTestId("MovieCard");

        expect(movieCard).toBeInTheDocument();
    });
});
