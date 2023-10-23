import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ColorService from './ColorService';

describe('<ColorService />', () => {
  test('it should mount', () => {
    render(<ColorService />);
    
    const colorService = screen.getByTestId('ColorService');

    expect(colorService).toBeInTheDocument();
  });
});