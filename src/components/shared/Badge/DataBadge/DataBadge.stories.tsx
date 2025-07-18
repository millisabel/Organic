import DataBadge from './DataBadge';

export default {
  title: 'Components/Badge/DataBadge',
  component: DataBadge,
  parameters: {
    docs: {
      description: {
        component: 'src/components/shared/Badge/DataBadge/DataBadge.tsx',
      },
    },
  },
};

export const Default = () => <DataBadge date={new Date()} />;
