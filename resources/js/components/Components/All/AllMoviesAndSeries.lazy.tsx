import React, { lazy, Suspense } from "react";

const LazyAll = lazy(() => import("./AllMoviesAndSeries"));

const AllMoviesAndSeries = (
    props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => (
    <Suspense fallback={null}>
        <LazyAll {...props} />
    </Suspense>
);

export default AllMoviesAndSeries;
