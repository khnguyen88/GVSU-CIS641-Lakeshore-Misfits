import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContrastCheckerApiService from './ContrastCheckerApiService';

describe('<ContrastCheckerApiService />', () => {
  test('it should mount', () => {
    render(<ContrastCheckerApiService />);
    
    const contrastCheckerApiService = screen.getByTestId('ContrastCheckerApiService');

    expect(contrastCheckerApiService).toBeInTheDocument();
  });
});