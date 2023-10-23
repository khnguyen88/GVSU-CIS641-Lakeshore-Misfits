import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PagesSection from './PagesSection';

describe('<PagesSection />', () => {
  test('it should mount', () => {
    render(<PagesSection />);
    
    const pagesSection = screen.getByTestId('PagesSection');

    expect(pagesSection).toBeInTheDocument();
  });
});