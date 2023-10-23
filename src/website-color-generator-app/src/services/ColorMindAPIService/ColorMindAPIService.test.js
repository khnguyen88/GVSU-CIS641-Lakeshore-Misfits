import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ColorMindApiService from './ColorMindApiService';

describe('<ColorMindApiService />', () => {
  test('it should mount', () => {
    render(<ColorMindApiService />);
    
    const colorMindApiService = screen.getByTestId('ColorMindApiService');

    expect(colorMindApiService).toBeInTheDocument();
  });
});