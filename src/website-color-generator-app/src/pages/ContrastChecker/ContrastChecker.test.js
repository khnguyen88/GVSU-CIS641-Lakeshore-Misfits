import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContrastChecker from './ContrastChecker';

describe('<ContrastChecker />', () => {
  test('it should mount', () => {
    render(<ContrastChecker />);
    
    const contrastChecker = screen.getByTestId('ContrastChecker');

    expect(contrastChecker).toBeInTheDocument();
  });
});