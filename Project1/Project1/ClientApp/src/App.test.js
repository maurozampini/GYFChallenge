import { render, screen } from '@testing-library/react';
import App from './App';
import SearchBar from './components/Controls/SearchBar';

test('renders SearchBar label Presupuesto', () => {
  render(<SearchBar />);
  const linkElement = screen.getByLabelText(/Presupuesto/);
  expect(linkElement).toBeInTheDocument();
});

test('renders SearchBar display text $', () => {
  render(<SearchBar />);
  const linkElement = screen.getByText("$");
  expect(linkElement).toBeInTheDocument();
});
