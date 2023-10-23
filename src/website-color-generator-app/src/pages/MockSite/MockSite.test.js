import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MockSite from './MockSite';

describe('<MockSite />', () => {
  test('it should mount', () => {
    render(<MockSite />);
    
    const mockSite = screen.getByTestId('MockSite');

    expect(mockSite).toBeInTheDocument();
  });
});