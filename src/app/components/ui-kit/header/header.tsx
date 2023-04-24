import React, { useState } from 'react';
import { Avatar, Button } from 'antd';
import filter from 'assets/images/navbar/filter.svg';
import search from 'assets/images/navbar/search.svg';
import { config } from '@core/config';
import { useAppSelector } from '@core/hooks';

import './styles.scss';

export const Header: React.FC<any> = ({
  text,
  categories,
  selectedCategoryId,
  setSelectedCategoryId,
  searchDishes,
  setSearchDishes,
}) => {
  const [categoryOpen, setCategoryOpen] = useState(false);

  const user = useAppSelector(state => state.user.user);

  function handleChange(event: any) {
    setSearchDishes(event.target.value);
  }

  return (
    <div>
      <header className="header">
        <div className="header__profile-info">
          <span className="header__profile-info__text">{text}</span>
          <Avatar
            className="header__profile-info__avatar"
            src={<img src={`${config.API_URL}/${user?.avatar}`} alt="avatar" />}
          />
        </div>
        <div className="header__dish-setting">
          <div className="header__dish-setting__search">
            <Button className="header__dish-setting__search__button">
              <img src={search} alt="search" />
            </Button>
            <input
              className="header__dish-setting__search__input"
              placeholder="Search food..."
              onChange={handleChange}
              value={searchDishes}
            />
          </div>
          <div className="header__dish-setting__filter">
            <Button
              className="header__dish-setting__filter__button"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <img src={filter} alt="filter" />
            </Button>
          </div>
        </div>
      </header>
      <div className={`categories ${categoryOpen ? '' : 'none'}`}>
        {categories.map((category: any) => {
          return (
            <div key={category.id}>
              <Button
                className={`categories__button ${
                  selectedCategoryId === category.id ? 'focus' : 'unfocus'
                }`}
                onClick={() =>
                  setSelectedCategoryId(
                    selectedCategoryId === category.id ? '' : category.id,
                  )
                }
              >
                {category.name}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
