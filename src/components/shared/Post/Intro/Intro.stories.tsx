import { getStoryDescription } from '@/utils/storiesHelpers';
import Intro from './Intro';

export default {
  title: 'Shared/Post/Intro',
  component: Intro,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/Post/Intro/Intro.stories.tsx',
        }),
      },
    },
  },
};

const post = {
  title: 'Title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt doloribus esse eaque modi, facilis laudantium voluptatum, aperiam, corporis quibusdam ab tempore laboriosam ex saepe doloremque labore odio magnam earum ullam?',
  author: 'Author',
  date: '12.07.2025',
};

export const Default = () => <Intro post={post} />;
