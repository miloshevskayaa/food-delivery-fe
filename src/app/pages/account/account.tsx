import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, message, Upload, UploadProps } from 'antd';
import { useAppDispatch, useAppSelector } from '@core/hooks';
import { guard } from '@core/utils/HOC';
import {
  useUpdateUserMutation,
  useUploadImageUserMutation,
} from '@store/users';
import { logout, setUser } from '@store/users/auth-slice';

import './styles.scss';

const AccountComponent: React.FC<any> = () => {
  const [uploadImageUser, uploadedImageName] = useUploadImageUserMutation();

  const uploadImage: UploadProps['customRequest'] = async ({
    file,
    onSuccess,
  }) => {
    await uploadImageUser({ file });
    onSuccess?.({});
  };

  const [updateUser] = useUpdateUserMutation();
  const user = useAppSelector(state => state.user.user);
  const userId = user?.id;

  const dispatch = useAppDispatch();

  const onFinish = async (fieldsValue: any) => {
    const { confirmPassword, ...values } = fieldsValue;

    const resultValues = {
      ...values,
      avatar: uploadedImageName.data
        ? uploadedImageName.data.path
        : 'images/users/default.jpg',
    };

    await updateUser({ id: userId, data: resultValues });
    dispatch(setUser(resultValues));
  };

  const props: UploadProps = {
    multiple: false,

    onChange(info) {
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    navigate('/');
  };

  const [form] = Form.useForm();

  return (
    <div className="account">
      <Form
        className="form"
        form={form}
        name="basic"
        layout="vertical"
        labelCol={{ span: 8 }}
        onFinish={onFinish}
        autoComplete="off"
        initialValues={{
          ...user,
          password: '',
        }}
      >
        <Form.Item label="Username" name="userName" className="form__item">
          <Input />
        </Form.Item>

        <Form.Item
          name="avatar"
          label="Upload"
          valuePropName="file"
          extra="longggg"
          className="form__item"
        >
          <Upload
            name="file"
            listType="picture"
            accept=".jpeg,.png,.jpg"
            {...props}
            customRequest={uploadImage}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Email Address"
          name="email"
          rules={[
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
          label="Phone Number"
          name="phoneNumber"
          className="form__item"
        >
          <Input />
        </Form.Item>

        <Form.Item label="New Password" name="password" className="form__item">
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[
            {
              required: !form.getFieldValue('password'),
              message: 'Please repeat your password!',
            },
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
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginBottom: '100px' }}
          >
            Update
          </Button>
        </Form.Item>
      </Form>

      <Button danger className="account__logout" onClick={() => logoutUser()}>
        Logout
      </Button>
    </div>
  );
};

export const Account = guard(AccountComponent);
