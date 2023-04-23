import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { DishModal } from '@components/ui-kit';
import { Account } from '@pages/account';
import { Cart } from '@pages/cart';
import { Favorites } from '@pages/favorites';
import { History } from '@pages/history';
import { Home } from '@pages/home';
import { Login } from '@pages/login';
import { Notifications } from '@pages/notifications';
import { Payment } from '@pages/payment';
import { Registration } from '@pages/registration';
import { IUser } from '@store/users/models';
import {
  AuthLayout,
  MainLayout,
  ModalLayout,
  ProfileLayout,
} from './app/layouts';

const props = {
  redirect: '/',
  canActivate: (user: IUser | null) => !!user,
};

export const router = createBrowserRouter([
  {
    path: 'main',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home {...props} /> },
      { path: 'favorites', element: <Favorites {...props} /> },
      { path: 'notifications', element: <Notifications {...props} /> },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          { index: true, element: <Payment {...props} /> },
          { path: 'account', element: <Account {...props} /> },
          { path: 'history', element: <History {...props} /> },
        ],
      },
    ],
  },

  {
    path: '/modal',
    element: <ModalLayout />,
    children: [
      { path: 'cart', element: <Cart {...props} /> },
      { path: ':dishId', element: <DishModal {...props} /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Registration /> },
    ],
  },
]);
