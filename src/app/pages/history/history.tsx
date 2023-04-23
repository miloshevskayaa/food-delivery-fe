import React from 'react';
import { useGetOrdersQuery } from '@store/cart';

import './styles.scss';

export const History: React.FC<any> = () => {
  const { data: orders = [] } = useGetOrdersQuery({});

  return (
    <div className="history">
      <div className="history__cards">
        {orders.map((order: any) => (
          <div key={order.id} className="history__cards__card">
            <div>
              Courier : <span>{order.courier.userName}</span>
            </div>
            <div>
              Delivery Time : <span>{order.time} min</span>
            </div>
            <div>
              Address : <span>{order.address}</span>
            </div>
            <div>
              Total Price : <span>{order.totalPrice.toFixed(2)}$</span>
            </div>
            <div>
              Promocode : <span>{order.promocode?.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
