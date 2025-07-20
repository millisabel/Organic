import { getStoryDescription } from '@/utils/storiesHelpers';
import type { ComponentType } from 'react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from './Pagination';

export default {
  title: 'Shared/Navigation/Pagination',
  component: Pagination,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/Navigation/Pagination/Pagination.stories.tsx',
        }),
      },
    },
  },
  decorators: [
    (Story: ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Template = (arg: React.ComponentProps<typeof Pagination>) => <Pagination {...arg} />;
Template.args = {
  currentPage: 1,
  totalPages: 5,
  onPageChange: () => {},
};

export const SmallPagination = () => (
  <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} />
);

export const LargePagination = () => (
  <Pagination currentPage={50} totalPages={100} onPageChange={() => {}} />
);

export const MiddlePage = () => (
  <Pagination currentPage={25} totalPages={50} onPageChange={() => {}} />
);

export const WithoutNavigation = () => (
  <Pagination
    currentPage={5}
    totalPages={20}
    onPageChange={() => {}}
    showFirstLast={false}
    showPrevNext={false}
  />
);

export const WithoutEllipsis = () => (
  <Pagination currentPage={10} totalPages={30} onPageChange={() => {}} showEllipsis={false} />
);

export const CustomMaxVisible = () => (
  <Pagination currentPage={15} totalPages={50} onPageChange={() => {}} maxVisiblePages={5} />
);
