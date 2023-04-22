import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

export const ModalLayout: FC = () => {
  return (
    <Layout className="modal-layout">
      <Outlet />
    </Layout>
  );
};
