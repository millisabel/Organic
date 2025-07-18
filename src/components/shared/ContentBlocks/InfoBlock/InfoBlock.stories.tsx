import type { ComponentType } from 'react';
import { MemoryRouter } from 'react-router-dom';
import InfoBlock from './InfoBlock';

export default {
  title: 'Blocks/Components/Shared/ContentBlocks/InfoBlock',
  component: InfoBlock,
  decorators: [
    (Story: ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const data = {
  iconSrc: 'tractor.svg',
  title: 'Title',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
};

export const Default = () => (
  <InfoBlock iconSrc={data.iconSrc} title={data.title} description={data.description} />
);
export const OnlyIcon = () => <InfoBlock iconSrc={data.iconSrc} />;
export const OnlyTitle = () => <InfoBlock title={data.title} />;
export const OnlyDescription = () => <InfoBlock description={data.description} />;
export const NoProps = () => <InfoBlock />;
