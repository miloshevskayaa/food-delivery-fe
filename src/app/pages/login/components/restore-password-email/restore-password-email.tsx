import React, { useState } from 'react';
import { Form, Input, Modal } from 'antd';
import { useSendMailMutation } from '@store/restore-password';
import { OtpModal } from '../restore-password-otp';

export const EmailModal: React.FC<any> = ({
  isEmailModalOpen,
  setIsEmailModalOpen,
}) => {
  const [form] = Form.useForm();

  const [sendMail] = useSendMailMutation();

  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const handleOk = async () => {
    if (form.getFieldValue('email')) {
      await sendMail({ email: form.getFieldValue('email') });
      setIsOtpModalOpen(true);
    }

    setIsEmailModalOpen(false);
  };

  const handleCancel = () => {
    setIsEmailModalOpen(false);
  };

  return (
    <div className="EmailModal">
      <Modal open={isEmailModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form form={form} autoComplete="off">
          <Form.Item label="Input your email" name="email">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <OtpModal
        isOtpModalOpen={isOtpModalOpen}
        setIsOtpModalOpen={setIsOtpModalOpen}
      />
    </div>
  );
};
