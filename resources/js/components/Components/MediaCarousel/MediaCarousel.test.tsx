import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MediaCarousel from './MediaCarousel';

describe('<MediaCarousel />', () => {
  test('it should mount', () => {
    render(<MediaCarousel />);
    
    const mediaCarousel = screen.getByTestId('MediaCarousel');

    expect(mediaCarousel).toBeInTheDocument();
  });
});