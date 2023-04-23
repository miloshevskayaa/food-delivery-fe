import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import heartFull from 'assets/images/navbar/heart-full2.svg';
import heart from 'assets/images/navbar/heart-thin.svg';
import { config } from '@core/config';
import { useAppDispatch, useToggleFavorites } from '@core/hooks';
import { setCartProducts } from '@store/cart';

import './styles.scss';

export const DishCard: React.FC<any> = ({
  dishId,
  image,
  title,
  caption,
  price,
  time,
}) => {
  const [toggleFavorites, favorites] = useToggleFavorites(dishId);
  const navigate = useNavigate();

  const modalOpen = async () => {
    navigate(`/modal/${dishId}`);
  };

  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <div className="card__image" onClick={() => modalOpen()}>
        <img
          className="card__image__dish"
          src={`${config.API_URL}/${image}`}
          alt=""
        />
        <div
          className="card__image__favorite"
          onClick={e => {
            e.stopPropagation();
            toggleFavorites();
          }}
        >
          <img
            src={
              favorites.find((item: any) => item.id === dishId)
                ? heartFull
                : heart
            }
            alt="empty"
          />
        </div>
      </div>
      <span className="card__title">{title}</span>
      <span className="card__caption">{caption}</span>
      <div className="card__price">
        <span className="card__price__usd">$</span>
        {price.toFixed(2)}
      </div>
      <Button
        className="card__add-to-cart"
        onClick={() =>
          dispatch(
            setCartProducts({
              dishId,
              image,
              title,
              caption,
              price,
              time,
              description: '',
              amount: 0,
            }),
          )
        }
      >
        Add to Cart
      </Button>
    </div>
  );
};
