import React from 'react';
import call from 'assets/images/navbar/call.svg';
import chicken from 'assets/images/navbar/friedShrimpRoll.jpg';
import map from 'assets/images/navbar/map.svg';
import time from 'assets/images/navbar/time.svg';

import './styles.scss';

export const Notifications: React.FC<any> = () => {
  return (
    <div className="notifications">
      <div className="notifications__header">Notification</div>
      <div className="notifications__cards">
        <div className="notifications__cards__card">
          <div className="notifications__cards__card__courier">
            <div className="notifications__cards__card__courier__image-info">
              <img
                className="notifications__cards__card__courier__image-info__image"
                src={chicken}
                alt=""
              />
              <div className="notifications__cards__card__courier__image-info__info">
                <div className="notifications__cards__card__courier__image-info__info__name">
                  Budi Sanjaya
                </div>
                <div className="notifications__cards__card__courier__image-info__info__id">
                  ID : 78A6767
                </div>
                <span className="notifications__cards__card__courier__image-info__info__description">
                  Food courier
                </span>
              </div>
            </div>
            <button
              type="button"
              className="notifications__cards__card__courier__button"
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
                  45 minutes
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
                  Tulungagung City
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
