import React, { lazy, Suspense } from 'react';

const LazyMediaCarousel = lazy(() => import('./MediaCarousel'));

const MediaCarousel = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMediaCarousel {...props} />
  </Suspense>
);

export default MediaCarousel;
