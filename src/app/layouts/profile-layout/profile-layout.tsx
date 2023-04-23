import React, { FC, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { config } from '@core/config';
import { useAppSelector } from '@core/hooks';

import './styles.scss';

export const ProfileLayout: FC = () => {
  const navigate = useNavigate();

  const user = useAppSelector(state => state.user.user);

  const [selectPage, setSelectPage] = useState('payment');

  useEffect(() => {
    if (selectPage === 'account') {
      navigate('/profile/account');
    } else if (selectPage === 'payment') {
      navigate('/profile');
    } else {
      navigate('/profile/history');
    }
  }, [selectPage]);

  return (
    <Layout className="profile-layout">
      <Layout className="profile-layout__header">
        <div className="profile-layout__header__title">My Profile</div>
        <div className="profile-layout__header__info">
          <img
            className="profile-layout__header__info__image"
            src={`${config.API_URL}/${user?.avatar}`}
            alt=""
          />
          <div className="profile-layout__header__info__about">
            <span className="profile-layout__header__info__about__name">
              {user?.userName}
            </span>
            <span className="profile-layout__header__info__about__email">
              {user?.email}
            </span>
            <span className="profile-layout__header__info__about__id">
              User ID : {user?.userId}
            </span>
          </div>
        </div>
        <div className="profile-layout__header__pages">
          <div
            className={`profile-layout__header__pages__account${
              selectPage === 'account' ? '__line' : ''
            }`}
            onClick={() => setSelectPage('account')}
          >
            Account
          </div>
          <div
            className={`profile-layout__header__pages__payment${
              selectPage === 'payment' ? '__line' : ''
            }`}
            onClick={() => setSelectPage('payment')}
          >
            Payment
          </div>
          <div
            className={`profile-layout__header__pages__history${
              selectPage === 'history' ? '__line' : ''
            }`}
            onClick={() => setSelectPage('history')}
          >
            History
          </div>
        </div>
      </Layout>
      <Outlet />
    </Layout>
  );
};
