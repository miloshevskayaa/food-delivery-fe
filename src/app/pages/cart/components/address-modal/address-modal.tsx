import React from 'react';
import { Form, Input, Modal } from 'antd';
import { useAppDispatch } from '@core/hooks';
import { resetCart, useCreateOrderMutation } from '@store/cart';

export const AddressModal: React.FC<any> = ({
  isModalOpen,
  setIsModalOpen,
  contextHolder,
  resultPrice,
  setResultPrice,
  resultTime,
  gottenPromocode,
}) => {
  const dispatch = useAppDispatch();

  const [createOrder] = useCreateOrderMutation();

  const [form] = Form.useForm();

  const handleOk = async () => {
    await createOrder({
      promocodeId: gottenPromocode.id,
      totalPrice: resultPrice,
      time: resultTime,
      address: form.getFieldValue('address'),
    });
    setResultPrice((resultPrice = 0));
    dispatch(resetCart());
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="address-modal">
      {contextHolder}
      <Modal
        title="Address"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} autoComplete="off">
          <Form.Item name="address">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
