import ContentLayout from '@/components/patterns/ContentLayout';
import CheckIcon from '@/components/shared/Icon/CheckIcon';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import Paragraph from '@/components/ui/Typography/Paragraph';
import Title from '@/components/ui/Typography/Title';
import type { FC } from 'react';
import type { SuccessModalProps } from './types';

const SuccessModal: FC<SuccessModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  details,
  footerText,
  ...props
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} message={message} {...props}>
      <ContentLayout variant="flexCol" align="center" className="text-center p-6 gap-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckIcon className="w-8 h-8 text-green-600" />
        </div>
        <Title variant="cardTitle">{title}</Title>
        <Paragraph variant="large" className="text-center">
          {message}
        </Paragraph>
        {details && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
            <Paragraph variant="small" className="text-blue-800 font-medium">
              📧 {details}
            </Paragraph>
          </div>
        )}
        {footerText && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 mt-3">
            <Paragraph variant="extraSmall" className="text-gray-600">
              💬 {footerText}
            </Paragraph>
          </div>
        )}
        <Button onClick={onClose} variant="default" className="mt-10">
          Close
        </Button>
      </ContentLayout>
    </Modal>
  );
};

export default SuccessModal;
