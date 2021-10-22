import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Movie from './Movie';

describe('<Movie />', () => {
  test('it should mount', () => {
    render(<Movie />);
    
    const movie = screen.getByTestId('Movie');

    expect(movie).toBeInTheDocument();
  });
});