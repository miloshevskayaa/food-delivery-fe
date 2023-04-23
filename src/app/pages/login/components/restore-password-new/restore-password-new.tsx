import React from 'react';
import { Form, Input, Modal } from 'antd';
import { usePasswordRestoreMutation } from '@store/restore-password';

export const NewPasswordModal: React.FC<any> = ({
  isRestorePasswordModalOpen,
  setIsRestorePasswordModalOpen,
  email,
}) => {
  const [form] = Form.useForm();

  const [passwordRestore] = usePasswordRestoreMutation();

  const handleOk = async () => {
    if (form.getFieldValue('password')) {
      await passwordRestore({
        email,
        password: form.getFieldValue('password'),
      });
    }

    setIsRestorePasswordModalOpen(false);
  };

  const handleCancel = () => {
    setIsRestorePasswordModalOpen(false);
  };

  return (
    <div className="NewPasswordModal">
      <Modal
        open={isRestorePasswordModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} autoComplete="off">
          <Form.Item label="Input new password" name="password">
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
