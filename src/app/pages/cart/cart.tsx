import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';
import close from 'assets/images/navbar/close.svg';
import promocode from 'assets/images/navbar/promo_code.svg';
import { useAppSelector } from '@core/hooks';
import { guard } from '@core/utils/HOC';
import { getProductsInCart } from '@store/cart';
import { ProductInCart } from '@store/cart/models';
import { useGetComparedPromocodeQuery } from '@store/promocodes';
import { AddressModal } from './components/address-modal/address-modal';
import { CartCard } from './components/cart-card.tsx';

import './styles.scss';

const CartComponent: React.FC = () => {
  const navigate = useNavigate();

  const dishesInCart = useAppSelector(getProductsInCart);

  console.log(dishesInCart);

  const [resultPrice, setResultPrice] = useState(
    dishesInCart.reduce((acc: number, i: ProductInCart) => {
      return acc + i.price * i.amount;
    }, 0),
  );
  const resultTime = Math.max(...dishesInCart.map(item => item.time));

  const [namePromocode, setNamePromocode] = useState('');

  function handleChange(event: any) {
    setNamePromocode(event.target.value);
  }

  const { data: gottenPromocode = [] } = useGetComparedPromocodeQuery({
    promocode: namePromocode,
  });

  function handleClick() {
    setResultPrice(
      resultPrice - (resultPrice / 100) * gottenPromocode.discount,
    );
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const showModal = () => {
    if (dishesInCart.length) {
      setIsModalOpen(true);
    } else {
      messageApi.open({
        type: 'warning',
        content: 'Your cart is empty',
      });
    }
  };

  return (
    <div className="cart">
      <div className="cart__header">
        <span className="cart__header__title">My Order</span>
        <div className="cart__header__close" onClick={() => navigate(-1)}>
          <img src={close} alt="" />
        </div>
      </div>
      <div className="cart__cards">
        {dishesInCart.map((dish: ProductInCart) => (
          <CartCard
            key={dish.dishId}
            dish={dish}
            resultPrice={resultPrice}
            setResultPrice={setResultPrice}
          />
        ))}
      </div>
      <div className="cart__footer">
        <div className="cart__footer__promocode">
          <img
            className="cart__footer__promocode__image"
            src={promocode}
            alt=""
          />
          <input
            type="text"
            className="cart__footer__promocode__input"
            placeholder="Promo code..."
            onChange={handleChange}
            value={namePromocode}
          />
          <button
            type="button"
            className="cart__footer__promocode__button"
            onClick={handleClick}
          >
            Apply
          </button>
        </div>
        <div className="cart__footer__info">
          <div className="cart__footer__info__subtotal">
            <span>Subtotal</span>
            <span>${resultPrice.toFixed(2)}</span>
          </div>
          <div className="cart__footer__info__delivery">
            <span>Delivery</span>
            <span>Free</span>
          </div>
          <div className="cart__footer__info__total">
            <span className="cart__footer__info__total__title">Total</span>
            <span className="cart__footer__info__total__price">
              ${resultPrice.toFixed(2)}
            </span>
          </div>
        </div>
        <button
          type="button"
          className="cart__footer__confirm"
          onClick={showModal}
        >
          CONFIRM ORDER
        </button>
      </div>
      <AddressModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        contextHolder={contextHolder}
        resultPrice={resultPrice}
        setResultPrice={setResultPrice}
        resultTime={resultTime}
        gottenPromocode={gottenPromocode}
      />
    </div>
  );
};

export const Cart = guard(CartComponent);
