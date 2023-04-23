import React, { FC } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button, Layout, Menu } from 'antd';
import { Content } from 'antd/es/layout/layout';
import bell from 'assets/images/navbar/bell.svg';
import book from 'assets/images/navbar/book.svg';
import home from 'assets/images/navbar/home.svg';
import profile from 'assets/images/navbar/profile.svg';
import cart_bag from 'assets/images/navbar/shopping_bag.svg';

import './styles.scss';

export const MainLayout: FC = () => {
  const navigate = useNavigate();

  return (
    <Layout className="main-layout">
      <Layout className="content">
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Layout className="down-menu">
        <div className="down-menu__cart">
          <Button
            type="link"
            shape="circle"
            className="down-menu__cart__button"
            onClick={() => navigate('/modal/cart')}
          >
            <img src={cart_bag} alt="cart_bag" />
          </Button>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          className="down-menu__navbar"
        >
          <div className="icons-group">
            <Menu.Item key="home" className="icons-group__item">
              <button type="button" onClick={() => navigate('/main')}>
                <img src={home} alt="home" />
              </button>
            </Menu.Item>
            <Menu.Item key="book" className="icons-group__item">
              <button type="button" onClick={() => navigate('/main/favorites')}>
                <img src={book} alt="book" />
              </button>
            </Menu.Item>
          </div>
          <span className="down-menu__navbar__halfcircle" />
          <div className="icons-group">
            <Menu.Item key="bell" className="icons-group__item">
              <button
                type="button"
                onClick={() => navigate('/main/notifications')}
              >
                <img src={bell} alt="bell" />
              </button>
            </Menu.Item>
            <Menu.Item key="profile" className="icons-group__item">
              <button type="button" onClick={() => navigate('/main/profile')}>
                <img src={profile} alt="profile" />
              </button>
            </Menu.Item>
          </div>
        </Menu>
      </Layout>
    </Layout>
  );
};
