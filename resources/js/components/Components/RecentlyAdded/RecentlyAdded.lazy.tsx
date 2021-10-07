import React, { lazy, Suspense } from 'react';

const LazyRecentlyAdded = lazy(() => import('./RecentlyAdded'));

const RecentlyAdded = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyRecentlyAdded {...props} />
  </Suspense>
);

export default RecentlyAdded;
