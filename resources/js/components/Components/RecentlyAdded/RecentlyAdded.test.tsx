import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RecentlyAdded from './RecentlyAdded';

describe('<RecentlyAdded />', () => {
  test('it should mount', () => {
    render(<RecentlyAdded />);
    
    const recentlyAdded = screen.getByTestId('RecentlyAdded');

    expect(recentlyAdded).toBeInTheDocument();
  });
});