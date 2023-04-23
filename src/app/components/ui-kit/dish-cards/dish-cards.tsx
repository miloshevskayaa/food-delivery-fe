import React from 'react';
import { Card } from '@models/card';
import { DishCard } from '../dish-card';

import './styles.scss';

export const Cards: React.FC<any> = ({ dishes }) => {
  return (
    <div className="cards">
      {dishes.map((dish: Card) => {
        return (
          <div key={dish.id}>
            <DishCard
              dishId={dish.id}
              image={dish.image}
              title={dish.title}
              caption={dish.caption}
              price={dish.price}
              time={dish.deliveryTime}
            />
          </div>
        );
      })}
    </div>
  );
};
