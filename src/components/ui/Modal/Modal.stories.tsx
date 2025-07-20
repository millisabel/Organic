import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => (
  <Modal isOpen={true} onClose={() => {}}>
    <div>Modal</div>
  </Modal>
);
