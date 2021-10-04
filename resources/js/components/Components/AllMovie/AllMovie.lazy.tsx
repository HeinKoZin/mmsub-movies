import React, { lazy, Suspense } from 'react';

const LazyAllMovie = lazy(() => import('./AllMovie'));

const AllMovie = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAllMovie {...props} />
  </Suspense>
);

export default AllMovie;
