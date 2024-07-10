import { render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage by default', () => {
  render(<App />);
  const homeElement = screen.getByText(/Website/i);
  expect(homeElement).toBeInTheDocument();
});
