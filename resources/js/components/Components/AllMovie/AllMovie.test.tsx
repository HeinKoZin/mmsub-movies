import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AllMovie from './AllMovie';

describe('<AllMovie />', () => {
  test('it should mount', () => {
    render(<AllMovie />);
    
    const allMovie = screen.getByTestId('AllMovie');

    expect(allMovie).toBeInTheDocument();
  });
});