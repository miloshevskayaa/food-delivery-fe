import React from 'react';
import { config } from '@core/config';
import { useAppDispatch } from '@core/hooks';
import { removeQuantityCartProduct, setCartProducts } from '@store/cart';

export const CartCard: React.FC<any> = ({
  dish,
  resultPrice,
  setResultPrice,
}) => {
  const dispatch = useAppDispatch();

  const removeFromCart = () => {
    dispatch(removeQuantityCartProduct(dish));
    setResultPrice(resultPrice - dish.price);
  };

  const addedInCart = () => {
    dispatch(setCartProducts(dish));
    setResultPrice(resultPrice + dish.price);
  };

  return (
    <div key={dish.dishId} className="cart__cards__card">
      <img
        className="cart__cards__card__image"
        src={`${config.API_URL}/${dish.image}`}
        alt=""
      />
      <div className="cart__cards__card__info">
        <span className="cart__cards__card__info__title">{dish.title}</span>
        <span className="cart__cards__card__info__caption">{dish.caption}</span>
        <div className="cart__cards__card__info__price-actions">
          <div className="cart__cards__card__info__price-actions__price">
            <span>$</span>
            {dish.price.toFixed(2)}
          </div>
          <div className="cart__cards__card__info__price-actions__actions">
            <div className="cart__cards__card__info__price-actions__actions">
              <div
                className="cart__cards__card__info__price-actions__actions__remove"
                onClick={() => removeFromCart()}
              >
                -
              </div>
              <span>{dish.amount}</span>
              <div
                className="cart__cards__card__info__price-actions__actions__add"
                onClick={() => addedInCart()}
              >
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
