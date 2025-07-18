import type { ComponentType } from 'react';
import { MemoryRouter } from 'react-router-dom';
import NavLink from './NavLink';

export default {
  title: 'Typography/Components/Shared/Navigation/NavLink',
  component: NavLink,
  decorators: [
    (Story: ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <NavLink to="/">NavLink</NavLink>;
