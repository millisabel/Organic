import CheckIcon from '@/components/shared/Icon/CheckIcon';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import type { FC } from 'react';
import type { SuccessModalProps } from './types';
import ContentLayout from '@/components/patterns/ContentLayout';
import Title from '@/components/ui/Typography/Title';
import Paragraph from '@/components/ui/Typography/Paragraph';

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
      <ContentLayout variant="default" className="text-center p-6 gap-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <CheckIcon className="w-8 h-8 text-green-600" />
        </div>
        <Title variant="cardTitle">{title}</Title>
        <Paragraph variant="large" className="text-center">
          {message}
        </Paragraph>
        {details && <Paragraph variant="small">{details}</Paragraph>}
        {footerText && <Paragraph variant="extraSmall">{footerText}</Paragraph>}
        <Button onClick={onClose} variant="default" className="mt-10">
          Close
        </Button>
      </ContentLayout>
    </Modal>
  );
};

export default SuccessModal;
