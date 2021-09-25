import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodayMovie from './TodayMovie';

describe('<TodayMovie />', () => {
  test('it should mount', () => {
    render(<TodayMovie />);
    
    const todayMovie = screen.getByTestId('TodayMovie');

    expect(todayMovie).toBeInTheDocument();
  });
});