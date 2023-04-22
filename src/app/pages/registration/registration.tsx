import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Space } from 'antd';
import { useCreateUserMutation } from '@store/users';

export const Registration: React.FC = () => {
  const [createUser] = useCreateUserMutation();
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onFinish = async (fieldsValues: any) => {
    const { confirmPassword, ...values } = fieldsValues;

    await createUser(values);

    navigate('/auth');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="registration">
      <Space direction="vertical" size={16}>
        <Form
          form={form}
          className="form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="userName"
            rules={[{ required: true, message: 'Please input your username!' }]}
            className="form__item"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
            ]}
            className="form__item"
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            className="form__item"
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              { required: true, message: 'Please repeat your password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error('Password mismatch!'));
                },
              }),
            ]}
            className="form__item"
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Signup
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </div>
  );
};
