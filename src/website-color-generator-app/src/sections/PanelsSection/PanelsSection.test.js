import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PanelsSection from './PanelsSection';

describe('<PanelsSection />', () => {
  test('it should mount', () => {
    render(<PanelsSection />);
    
    const panelsSection = screen.getByTestId('PanelsSection');

    expect(panelsSection).toBeInTheDocument();
  });
});