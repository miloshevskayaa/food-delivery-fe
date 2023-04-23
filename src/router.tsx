import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { CardModal } from '@components/ui-kit';
import { Account } from '@pages/account';
import { Cart } from '@pages/cart';
import { Favorites } from '@pages/favorites';
import { History } from '@pages/history';
import { Home } from '@pages/home';
import { Login } from '@pages/login';
import { Notifications } from '@pages/notifications';
import { Payment } from '@pages/payment';
import { Registration } from '@pages/registration';
import {
  AuthLayout,
  MainLayout,
  ModalLayout,
  ProfileLayout,
} from './app/layouts';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'favorites', element: <Favorites /> },
      { path: 'notifications', element: <Notifications /> },
      {
        path: 'profile',
        element: <ProfileLayout />,
        children: [
          { index: true, element: <Payment /> },
          { path: 'account', element: <Account /> },
          { path: 'history', element: <History /> },
        ],
      },
    ],
  },
  {
    path: '/modal',
    element: <ModalLayout />,
    children: [
      { path: 'cart', element: <Cart /> },
      { path: ':dishId', element: <CardModal /> },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Registration /> },
    ],
  },
]);
