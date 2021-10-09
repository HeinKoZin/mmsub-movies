import React, { lazy, Suspense } from "react";

const LazyMovieCard = lazy(() => import("./MovieCard"));

const MovieCard = (
    props: JSX.IntrinsicAttributes & {
        children?: React.ReactNode;
        releaseDate?: string;
        title?: string;
        cover?: string;
    }
) => (
    <Suspense fallback={null}>
        <LazyMovieCard {...props} />
    </Suspense>
);

export default MovieCard;
