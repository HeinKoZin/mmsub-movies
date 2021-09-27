import React, { lazy, Suspense } from 'react';

const LazyMovieCarousel = lazy(() => import('./MovieCarousel'));

const MovieCarousel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMovieCarousel {...props} />
  </Suspense>
);

export default MovieCarousel;
