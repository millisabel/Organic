import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import CartQuantityButtons from './CartQuantityButtons';

test('renders quantity buttons', () => {
  render(<CartQuantityButtons quantity={2} onDecrease={vi.fn()} onIncrease={vi.fn()} />);
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('calls onDecrease when "-" is clicked', () => {
  const onDecrease = vi.fn();
  render(<CartQuantityButtons quantity={2} onDecrease={onDecrease} onIncrease={vi.fn()} />);
  fireEvent.click(screen.getByLabelText(/decrease quantity/i));
  expect(onDecrease).toHaveBeenCalled();
  expect(screen.getByText('2')).toBeInTheDocument();
});

test('calls onIncrease when "+" is clicked', () => {
  const onIncrease = vi.fn();
  render(<CartQuantityButtons quantity={2} onDecrease={vi.fn()} onIncrease={onIncrease} />);
  fireEvent.click(screen.getByLabelText(/increase quantity/i));
  expect(onIncrease).toHaveBeenCalled();
});

test('decrease button is disabled when quantity is 1', () => {
  render(<CartQuantityButtons quantity={1} onDecrease={vi.fn()} onIncrease={vi.fn()} />);
  expect(screen.getByLabelText(/decrease quantity/i)).toBeDisabled();
});
