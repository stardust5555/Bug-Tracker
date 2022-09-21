import { render, screen } from '@testing-library/react';
import App from './App';

test('Checks that the title renders in the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Bug Tracker/i);
  expect(linkElement).toBeInTheDocument();
});
