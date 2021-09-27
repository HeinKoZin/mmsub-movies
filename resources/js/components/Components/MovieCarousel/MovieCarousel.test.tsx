import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieCarousel from './MovieCarousel';

describe('<MovieCarousel />', () => {
  test('it should mount', () => {
    render(<MovieCarousel />);
    
    const movieCarousel = screen.getByTestId('MovieCarousel');

    expect(movieCarousel).toBeInTheDocument();
  });
});