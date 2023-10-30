import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PalettePreviewer from './PalettePreviewer';

describe('<PalettePreviewer />', () => {
  test('it should mount', () => {
    render(<PalettePreviewer />);
    
    const palettePreviewer = screen.getByTestId('PalettePreviewer');

    expect(palettePreviewer).toBeInTheDocument();
  });
});