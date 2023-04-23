import React, { useEffect, useState } from 'react';
import { guard } from '@core/utils/HOC';
import { useGetOrdersQuery } from '@store/cart';
import { NotificationCard } from './components/notification-card';

import './styles.scss';

const getRestMinutes = (deliveryTime: string) => {
  const diff = Date.parse(deliveryTime) - Date.now();

  return diff < 0 ? 0 : new Date(diff).getMinutes();
};

const getOrdersWithRestTime = (orders: any[]) =>
  orders.map((order: any) => ({
    ...order,
    restTime: getRestMinutes(order.deliveryTime),
  }));

const NotificationsComponent: React.FC<any> = () => {
  const { data: rawOrders = [] } = useGetOrdersQuery({});

  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const mapOrders = () => {
      setOrders(
        getOrdersWithRestTime(rawOrders).filter(
          (order: any) => order.restTime > 0,
        ),
      );
    };

    mapOrders();

    const interval = setInterval(() => {
      mapOrders();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [rawOrders]);

  return (
    <div className="notifications">
      <div className="notifications__header">Notification</div>
      <div className="notifications__cards">
        {orders.map((order: any) => {
          return <NotificationCard key={order.id} order={order} />;
        })}
      </div>
    </div>
  );
};

export const Notifications = guard(NotificationsComponent);
