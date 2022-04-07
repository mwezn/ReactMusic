import { render, screen } from '@testing-library/react';
import App from './App';
import Cards from'./components/Carasol'


test('test',()=>{
  expect(true).toBe(true)
})

test('renders The Weeknd in a h1 element ', () => {
  render(<App />);
  const linkElement = screen.getByText(/The Weeknd/i);
  expect(linkElement).toBeInTheDocument();
});

test('displays carousel', ()=>{
  render(<Cards />);
  const carousel=screen.getByTestId('carousel')
  expect(carousel).toBeInTheDocument();
  expect(carousel).toHaveTextContent('HELLO')
})
