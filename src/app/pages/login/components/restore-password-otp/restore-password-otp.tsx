import React, { useState } from 'react';
import { Form, Input, Modal } from 'antd';
import { useOtpCheckMutation } from '@store/restore-password';
import { NewPasswordModal } from '../restore-password-new';

export const OtpModal: React.FC<any> = ({
  isOtpModalOpen,
  setIsOtpModalOpen,
}) => {
  const [form] = Form.useForm();

  const [otpCheck] = useOtpCheckMutation();

  const [isRestorePasswordModalOpen, setIsRestorePasswordModalOpen] =
    useState(false);

  const [email, setEmail] = useState('');

  const handleOk = async () => {
    setEmail(form.getFieldValue('email'));

    if (email && form.getFieldValue('otp')) {
      await otpCheck({
        email,
        otp: form.getFieldValue('otp'),
      });
      setIsRestorePasswordModalOpen(true);
    }

    setIsOtpModalOpen(false);
  };

  const handleCancel = () => {
    setIsOtpModalOpen(false);
  };

  return (
    <div className="OtpModal">
      <Modal
        title="Input your email"
        open={isOtpModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} autoComplete="off">
          <Form.Item label="Input your email" name="email">
            <Input />
          </Form.Item>
          <Form.Item label="Input otp" name="otp">
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <NewPasswordModal
        isRestorePasswordModalOpen={isRestorePasswordModalOpen}
        setIsRestorePasswordModalOpen={setIsRestorePasswordModalOpen}
        email={email}
      />
    </div>
  );
};
