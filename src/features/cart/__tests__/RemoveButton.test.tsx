import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import RemoveButton from '../components/buttons/RemoveButton';

test('renders remove button', () => {
  render(<RemoveButton onRemove={vi.fn()} />);
  expect(screen.getByRole('button', { name: /remove/i })).toBeInTheDocument();
});

test('calls onRemove when button is clicked', () => {
  const onRemove = vi.fn();
  render(<RemoveButton onRemove={onRemove} />);
  fireEvent.click(screen.getByRole('button', { name: /remove/i }));
  expect(onRemove).toHaveBeenCalled();
});

test('calls onRemove when clicked', () => {
  const onRemove = vi.fn();
  render(<RemoveButton onRemove={onRemove} />);
  fireEvent.click(screen.getByRole('button'));
  expect(onRemove).toHaveBeenCalled();
});

test('button has correct aria-label', () => {
  render(<RemoveButton onRemove={() => {}} />);
  expect(screen.getByLabelText(/remove item/i)).toBeInTheDocument();
});
