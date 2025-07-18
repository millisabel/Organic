import { MemoryRouter } from 'react-router-dom';
import Pagination from './Pagination';
import type { ComponentType } from 'react';

export default {
  title: 'Typography/Components/Shared/Navigation/Pagination',
  component: Pagination,
  decorators: [
    (Story: ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />;
