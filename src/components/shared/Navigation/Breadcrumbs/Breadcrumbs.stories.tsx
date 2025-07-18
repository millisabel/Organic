import { MemoryRouter } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import type { ComponentType } from 'react';

export default {
  title: 'Typography/Components/Shared/Navigation/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [
    (Story: ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const items = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'Product' },
];

export const Default = () => <Breadcrumbs items={items} />;
