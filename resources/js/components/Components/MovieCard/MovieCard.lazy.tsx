import React, { lazy, Suspense } from "react";
import { ResultsTypes } from "../Movie/Movie";

const LazyMovieCard = lazy(() => import("./MovieCard"));

const MovieCard = (
    props: JSX.IntrinsicAttributes & {
        children?: React.ReactNode;
    } & ResultsTypes
) => (
    <Suspense fallback={null}>
        <LazyMovieCard {...props} />
    </Suspense>
);

export default MovieCard;
