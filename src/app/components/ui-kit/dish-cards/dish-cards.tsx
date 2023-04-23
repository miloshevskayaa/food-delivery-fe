import React from 'react';
import { Dish } from '@models/dish';
// import { Card } from '@models/card';
import { DishCard } from '../dish-card';

import './styles.scss';

export const Cards: React.FC<any> = ({ dishes }) => {
  return (
    <div className="cards">
      {dishes.map((dish: Dish) => {
        return (
          <div key={dish.id}>
            <DishCard
              id={dish.id}
              image={dish.image}
              title={dish.title}
              caption={dish.caption}
              price={dish.price}
              deliveryTime={dish.deliveryTime}
              rating={dish.rating}
              description={dish.description}
            />
          </div>
        );
      })}
    </div>
  );
};
