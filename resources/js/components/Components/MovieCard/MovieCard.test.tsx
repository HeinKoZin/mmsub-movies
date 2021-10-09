import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MovieCard from './MovieCard';

describe('<MovieCard />', () => {
  test('it should mount', () => {
    render(<MovieCard />);
    
    const movieCard = screen.getByTestId('MovieCard');

    expect(movieCard).toBeInTheDocument();
  });
});