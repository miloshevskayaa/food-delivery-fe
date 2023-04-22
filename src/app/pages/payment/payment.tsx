import React from 'react';
import amazon from 'assets/images/navbar/amazon.svg';
import google from 'assets/images/navbar/google.svg';
import masterCard from 'assets/images/navbar/master-card.svg';
import paypal from 'assets/images/navbar/paypal.svg';

import './styles.scss';

export const Payment: React.FC<any> = () => {
  return (
    <div className="payment">
      <div className="payment__my-card">
        <span className="payment__my-card__title">My card</span>
        <div className="payment__my-card__card-button">
          <div className="payment__my-card__card-button__card">
            <div className="payment__my-card__card-button__card__amazon">
              <img src={amazon} alt="" />
            </div>
            <div className="payment__my-card__card-button__card__name">
              <span>Achmad Qomarudin</span>
            </div>
            <div className="payment__my-card__card-button__card__number">
              <span>5763 •••• •••• 2021</span>
            </div>
            <div className="payment__my-card__card-button__card__money">
              <span>$3.464.98</span>
              <div className="payment__my-card__card-button__card__money__card-type">
                <img src={masterCard} alt="" />
                <span>Platinum Card</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="payment__my-card__card-button__button"
          >
            +
          </button>
        </div>
      </div>
      <div className="payment__method">
        <span className="payment__method__title">Payment Method</span>
        <div className="payment__method__methods-button">
          <div className="payment__method__methods-button__methods">
            <div className="payment__method__methods-button__methods__credit-card">
              <div>
                <img src={masterCard} alt="" />
                <span>Credit Card</span>
              </div>
              <input type="radio" name="payment" value="credit-card" />
            </div>
            <div className="payment__method__methods-button__methods__paypal">
              <div>
                <img src={paypal} alt="" />
                <span>Paypal</span>
              </div>
              <input type="radio" name="payment" value="paypal" />
            </div>
            <div className="payment__method__methods-button__methods__google-pay">
              <div>
                <img src={google} alt="" />
                <span>Google Pay</span>
              </div>
              <input type="radio" name="payment" value="google-pay" />
            </div>
          </div>
          <button
            type="button"
            className="payment__method__methods-button__button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
