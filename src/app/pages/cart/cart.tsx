import React from 'react';
import { useNavigate } from 'react-router-dom';
import close from 'assets/images/navbar/close.svg';
import roll from 'assets/images/navbar/friedShrimpRoll.jpg';
import promocode from 'assets/images/navbar/promo_code.svg';

import './styles.scss';

export const Cart: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart__header">
        <span className="cart__header__title">My Order</span>
        <div className="cart__header__close" onClick={() => navigate(-1)}>
          <img src={close} alt="" />
        </div>
      </div>
      <div className="cart__cards">
        <div className="cart__cards__card">
          <img className="cart__cards__card__image" src={roll} alt="" />
          <div className="cart__cards__card__info">
            <span className="cart__cards__card__info__title">Grilled Fish</span>
            <span className="cart__cards__card__info__caption">
              Spicy grilled fish
            </span>
            <div className="cart__cards__card__info__price-actions">
              <div className="cart__cards__card__info__price-actions__price">
                <span>$</span>8.5
              </div>
              <div className="cart__cards__card__info__price-actions__actions">
                <div className="cart__cards__card__info__price-actions__actions">
                  <div className="cart__cards__card__info__price-actions__actions__remove">
                    -
                  </div>
                  <span>1</span>
                  <div className="cart__cards__card__info__price-actions__actions__add">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cart__footer">
        <div className="cart__footer__promocode">
          <img
            className="cart__footer__promocode__image"
            src={promocode}
            alt=""
          />
          <input type="text" className="cart__footer__promocode__input" />
          <button type="button" className="cart__footer__promocode__button">
            Apply
          </button>
        </div>
        <div className="cart__footer__info">
          <div className="cart__footer__info__subtotal">
            <span>Subtotal</span>
            <span>$15.00</span>
          </div>
          <div className="cart__footer__info__delivery">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="cart__footer__info__total">
            <span className="cart__footer__info__total__title">Total</span>
            <span className="cart__footer__info__total__price">$15.00</span>
          </div>
        </div>
        <button type="button" className="cart__footer__confirm">
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};
