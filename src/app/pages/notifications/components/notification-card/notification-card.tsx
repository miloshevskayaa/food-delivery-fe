import React from 'react';
import { message } from 'antd';
import call from 'assets/images/navbar/call.svg';
import map from 'assets/images/navbar/map.svg';
import time from 'assets/images/navbar/time.svg';
import { config } from '@core/config';

export const NotificationCard: React.FC<any> = ({ order }) => {
  const showNumber = () => {
    message.info(order.courier.phoneNumber);
  };

  return (
    <div key={order.id} className="notifications__cards__card">
      <div className="notifications__cards__card__courier">
        <div className="notifications__cards__card__courier__image-info">
          <img
            className="notifications__cards__card__courier__image-info__image"
            src={`${config.API_URL}/${order.courier.avatar}`}
            alt=""
          />
          <div className="notifications__cards__card__courier__image-info__info">
            <div className="notifications__cards__card__courier__image-info__info__name">
              {order.courier.userName}
            </div>
            <div className="notifications__cards__card__courier__image-info__info__id">
              ID : {order.courier.userId}
            </div>
            <span className="notifications__cards__card__courier__image-info__info__description">
              Food courier
            </span>
          </div>
        </div>
        <button
          type="button"
          className="notifications__cards__card__courier__button"
          onClick={() => showNumber()}
        >
          <img src={call} alt="" />
        </button>
      </div>
      <div className="notifications__cards__card__delivery-info">
        <div className="notifications__cards__card__delivery-info__time">
          <div className="notifications__cards__card__delivery-info__image">
            <img src={time} alt="" />
          </div>
          <div className="notifications__cards__card__delivery-info__text">
            <span className="notifications__cards__card__delivery-info__text__data-description">
              Your Delivery Time
            </span>
            <span className="notifications__cards__card__delivery-info__text__data">
              {order.restTime} minutes
            </span>
          </div>
        </div>
        <div className="notifications__cards__card__delivery-info__address">
          <div className="notifications__cards__card__delivery-info__image">
            <img src={map} alt="" />
          </div>
          <div className="notifications__cards__card__delivery-info__text">
            <span className="notifications__cards__card__delivery-info__text__data-description">
              Your Delivery Address
            </span>
            <span className="notifications__cards__card__delivery-info__text__data">
              {order.address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
