import type { Preview } from '@storybook/react-vite';
import '../src/styles/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      sort: 'alpha',
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
    viewport: {
      viewports: {
        mobile: { name: 'Mobile', styles: { width: '375px', height: '667px' } },
        tablet: { name: 'Tablet', styles: { width: '768px', height: '1024px' } },
        desktop: { name: 'Desktop', styles: { width: '1280px', height: '800px' } },
      },
      defaultViewport: 'responsive',
    },
    docs: {
      toc: true,
      source: { type: 'code' },
    },
    // Auto-generate argTypes from TypeScript
    argTypes: {
      // Global argTypes that apply to all stories
      className: {
        control: 'text',
        table: {
          category: 'Styling',
        },
      },
      onClick: {
        action: 'clicked',
        table: {
          category: 'Events',
        },
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
