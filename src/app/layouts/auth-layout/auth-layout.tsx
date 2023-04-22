import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import auth_shopping_bag from 'assets/images/navbar/auth-shopping-bag.svg';

import './styles.scss';

export const AuthLayout: React.FC = () => {
  const navigate = useNavigate();

  const [selectPage, setSelectPage] = useState(false);

  return (
    <div className="auth-layout">
      <Layout className="auth-header">
        <div className="auth-header__info">
          <img src={auth_shopping_bag} alt="shopping" />
          <span className="auth-header__info__corner-food">Corner Food</span>
          <span className="auth-header__info__delivery-app">Delivery App</span>
        </div>
        <div
          className="auth-header__select"
          onClick={() => setSelectPage(!selectPage)}
        >
          <div
            className={`auth-header__select__login${
              selectPage ? '__line' : ''
            }`}
            onClick={() => navigate('/auth')}
          >
            Login
          </div>
          <div
            className={`auth-header__select__signup${
              selectPage ? '' : '__line'
            }`}
            onClick={() => navigate('/auth/register')}
          >
            Signup
          </div>
        </div>
      </Layout>
      <Outlet />
    </div>
  );
};
