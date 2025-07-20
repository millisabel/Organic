import { getStoryDescription } from '@/utils/storiesHelpers';
import Modal from './Modal';

export default {
  title: 'Components/Modal/UI',
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/Modal/Modal.stories.tsx',
        }),
      },
    },
  },
};

export const Default = () => (
  <Modal isOpen={true} onClose={() => {}}>
    <div>Modal</div>
  </Modal>
);
