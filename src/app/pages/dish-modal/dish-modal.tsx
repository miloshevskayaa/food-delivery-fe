import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import close from 'assets/images/navbar/close.svg';
import heartFull from 'assets/images/navbar/heart-full2.svg';
import heart from 'assets/images/navbar/heart-thin.svg';
import star from 'assets/images/navbar/star.svg';
import time from 'assets/images/navbar/time.svg';
import { config } from '@core/config';
import { useAppDispatch, useToggleFavorites } from '@core/hooks';
import { guard } from '@core/utils/HOC';
import { setCartProducts } from '@store/cart';
import { useGetDishQuery } from '@store/dishes';

import './styles.scss';

const DishModalComponent: React.FC<any> = () => {
  const { dishId } = useParams();

  const [toggleFavorites, favorites] = useToggleFavorites(dishId!);

  const { data: dish = {} } = useGetDishQuery({ dishId });

  const navigate = useNavigate();

  const modalClose = () => {
    navigate(-1);
  };

  const dispatch = useAppDispatch();

  const [countDish, setCountDish] = useState(1);

  if (countDish <= 0) {
    setCountDish(1);
  }

  return (
    <div className="modal">
      <div className="modal__image">
        <div className="modal__image__close" onClick={() => modalClose()}>
          <img src={close} alt="close" />
        </div>
        <img
          className="modal__image__dish"
          src={`${config.API_URL}/${dish.image}`}
          alt="dish"
        />
        <div
          className="modal__image__favorite"
          onClick={() => toggleFavorites()}
        >
          <img
            src={
              favorites.find((item: any) => item.id === dishId)
                ? heartFull
                : heart
            }
            alt="like"
          />
        </div>
      </div>
      <div className="modal__info">
        <div className="modal__info__name-caption-price">
          <div className="modal__info__name-caption-price__name-caption">
            <div className="modal__info__name-caption-price__name-caption__name">
              {dish.title}
            </div>
            <div className="modal__info__name-caption-price__name-caption__caption">
              {dish.caption}
            </div>
          </div>
          <div className="modal__info__name-caption-price__price">
            <span>$</span>
            {dish.price?.toFixed(2)}
          </div>
        </div>
        <div className="modal__info__rating-time">
          <div className="modal__info__rating-time__rating">
            <div className="modal__info__rating-time__image rating">
              <img src={star} alt="" />
            </div>
            <span>{dish.rating?.toFixed(1)}</span>
          </div>
          <div className="modal__info__rating-time__time">
            <div className="modal__info__rating-time__image time">
              <img src={time} alt="" />
            </div>
            <span>{dish.deliveryTime} min</span>
          </div>
        </div>
        <div className="modal__info__description">
          <div className="modal__info__description__title">About</div>
          <div className="modal__info__description__text">
            {dish.description}
          </div>
        </div>
        <div className="modal__info__actions">
          <div className="modal__info__actions__add-remove">
            <div
              className="modal__info__actions__add-remove__remove"
              onClick={() => setCountDish(countDish - 1)}
            >
              -
            </div>
            <span>{countDish}</span>
            <div
              className="modal__info__actions__add-remove__add"
              onClick={() => setCountDish(countDish + 1)}
            >
              +
            </div>
          </div>
          <button
            type="button"
            className="modal__info__actions__add-to-cart"
            onClick={() =>
              dispatch(
                setCartProducts({
                  dishId: dish.id,
                  image: dish.image,
                  title: dish.title,
                  caption: dish.caption,
                  price: dish.price,
                  time: dish.deliveryTime,
                  rating: dish.rating,
                  description: '',
                  amount: countDish,
                }),
              )
            }
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export const DishModal = guard(DishModalComponent);
