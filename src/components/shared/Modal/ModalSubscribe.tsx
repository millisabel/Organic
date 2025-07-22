import CheckIcon from '@/components/shared/Icon/CheckIcon';
import Modal, { type ModalProps } from '@/components/ui/Modal';

interface ModalSubscribeProps extends Omit<ModalProps, 'children'> {
  submittedEmail: string;
}

const ModalSubscribe = ({ isOpen, onClose, submittedEmail }: ModalSubscribeProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Newsletter Subscription Confirmation"
      description="Confirmation that your email has been successfully subscribed to our newsletter"
      showCloseButton={true}
    >
      <div className="text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckIcon className="w-8 h-8 text-green-600" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary mb-2">Thank You!</h3>
          <p className="text-text text-sm">Your subscription has been confirmed</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-text text-sm mb-1">You will now receive our newsletter at:</p>
          <p className="text-primary font-semibold break-all">{submittedEmail}</p>
        </div>

        <div className="text-xs text-gray-500">
          <p>You can unsubscribe at any time from the newsletter footer.</p>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSubscribe;
