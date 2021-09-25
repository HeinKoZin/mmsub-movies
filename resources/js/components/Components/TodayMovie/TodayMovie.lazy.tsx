import React, { lazy, Suspense } from 'react';

const LazyTodayMovie = lazy(() => import('./TodayMovie'));

const TodayMovie = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTodayMovie {...props} />
  </Suspense>
);

export default TodayMovie;
