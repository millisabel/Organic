import Modal from './Modal';

export default {
  title: 'Other/Components/UI/Modal',
  component: Modal,
};

export const Default = () => (
  <Modal isOpen={true} onClose={() => {}}>
    <div>Modal</div>
  </Modal>
);
