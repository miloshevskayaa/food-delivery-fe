import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload, UploadProps } from 'antd';
import { useUploadImageUserMutation } from '@store/users';

import './styles.scss';

export const Account: React.FC<any> = () => {
  const onFinish = async (fieldsValue: any) => {
    console.log(fieldsValue);
  };

  const [uploadImageUser] = useUploadImageUserMutation();

  const uploadImage: UploadProps['customRequest'] = async file => {
    console.log(file.file);

    await uploadImageUser({ file: file.file });
  };

  return (
    <div className="account">
      <Form
        className="form"
        name="basic"
        layout="vertical"
        labelCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Username" name="userName" className="form__item">
          <Input />
        </Form.Item>

        <Form.Item
          name="upload"
          label="Upload"
          valuePropName="file"
          extra="longggg"
          className="form__item"
        >
          <Upload
            name="file"
            listType="picture"
            accept=".jpeg,.png,.jpg"
            showUploadList={{ showRemoveIcon: true }}
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

        <Form.Item label="Password" name="password" className="form__item">
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginBottom: '60px' }}
          >
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
