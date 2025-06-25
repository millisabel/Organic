import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import CartSummary from './CartSummary';

test('renders total and checkout button', () => {
  render(<CartSummary total={100} />);
  expect(screen.getByText('$100.00')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /checkout/i })).toBeInTheDocument();
});
