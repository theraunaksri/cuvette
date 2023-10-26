import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Raunak Srivastava/i); // Change the text to match what is rendered in your component
    expect(linkElement).toBeInTheDocument();
  });
  