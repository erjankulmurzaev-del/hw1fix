import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the store header and banner', () => {
  render(<App />);
  expect(screen.getByText('Rivo')).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /discover and find your own fashion/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /explore now/i })).toBeInTheDocument();
});
