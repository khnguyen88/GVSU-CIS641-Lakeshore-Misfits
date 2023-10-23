import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavigationPanel from './NavigationPanel';

describe('<NavigationPanel />', () => {
  test('it should mount', () => {
    render(<NavigationPanel />);
    
    const navigationPanel = screen.getByTestId('NavigationPanel');

    expect(navigationPanel).toBeInTheDocument();
  });
});