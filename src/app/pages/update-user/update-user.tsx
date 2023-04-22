import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, DatePicker, Form, Input, Space } from 'antd';
import { useAppDispatch, useAppSelector } from '@core/hooks';
import { toDate } from '@core/utils';
import { useUpdateUserMutation } from '@store/users';
import { setUser } from '@store/users/models/auth-slice';

export const UpdateUser: React.FC = () => {
  const navigate = useNavigate();
  const [updateUser] = useUpdateUserMutation();
  const [form] = Form.useForm();

  const selectedUser = useAppSelector(state => state.user.user);

  const dispatch = useAppDispatch();

  const onFinish = async (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
    };

    console.log(selectedUser);

    await updateUser({ id: selectedUser?.id, data: values });
    dispatch(setUser(values));
    navigate('/client');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Space direction="vertical" size={16}>
        <Card title="Profile editing" className="registration__card">
          <Form
            initialValues={{
              ...selectedUser,
              avatarId: selectedUser?.avatar?.id,
              dateOfBirth: selectedUser?.dateOfBirth
                ? toDate(selectedUser.dateOfBirth)
                : undefined,
            }}
            form={form}
            className="registration__card__form"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item label="Name" name="name" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Surname"
              name="surname"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="phoneNumber"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="dateOfBirth"
              label="Date of birth"
              rules={[{ required: false }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Edit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
};
