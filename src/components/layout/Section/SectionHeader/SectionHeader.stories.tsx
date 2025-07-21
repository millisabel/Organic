import Badge from '@/components/ui/Badge/Badge';
import { getStoryDescription } from '@/utils/storiesHelpers';
import SectionHeader from './SectionHeader';

export default {
  title: 'Layout/SectionHeader',
  component: SectionHeader,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/layout/sectionLayouts/SectionHeader.tsx',
        }),
      },
    },
  },
};

export const Default = () => <SectionHeader title="Our Products" subtitle="Categories" />;

export const WithCustomTitle = () => (
  <SectionHeader
    title="Our Products"
    subtitle="Categories"
    slots={{
      title: <h2 className="text-4xl font-bold text-blue-600 order-2">🍎 Our Amazing Products</h2>,
    }}
  />
);

export const WithCustomSubtitle = () => (
  <SectionHeader
    title="Our Products"
    subtitle="Categories"
    slots={{
      subtitle: (
        <div className="order-1">
          <Badge variant="default" className="mb-2">
            Featured
          </Badge>
          <h3 className="text-xl text-gray-600">Discover our categories</h3>
        </div>
      ),
    }}
  />
);

export const WithMultipleCustomizations = () => (
  <SectionHeader
    title="Our Products"
    subtitle="Categories"
    slots={{
      title: <h2 className="text-4xl font-bold text-blue-600 order-2">🍎 Our Amazing Products</h2>,
      subtitle: (
        <div className="order-1">
          <Badge variant="default" className="mb-2 bg-yellow-500">
            Featured
          </Badge>
          <h3 className="text-xl text-gray-600">Discover our categories</h3>
        </div>
      ),
    }}
  />
);

export const WithSlotsOnly = () => (
  <SectionHeader
    slots={{
      title: <h2 className="text-3xl font-bold text-purple-600 order-2">Premium Selection</h2>,
      subtitle: <p className="text-lg text-gray-500 order-1">Handpicked for you</p>,
    }}
  />
);
