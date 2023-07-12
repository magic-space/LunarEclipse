import { render, screen } from '@testing-library/react';
import App from './App';

test('renders impressum link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Impressum/i);
  expect(linkElement).toBeInTheDocument();
});
