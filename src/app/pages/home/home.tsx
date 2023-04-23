import React, { useState } from 'react';
import { Cards, Header } from '@components/ui-kit';
import { useGetCategoryQuery } from '@store/categories';
import { useGetDishesQuery } from '@store/dishes';

import './styles.scss';

export const Home: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const { data: categories = [] } = useGetCategoryQuery({});

  const [searchDishes, setSearchDishes] = useState('');

  const { data: dishes = [] } = useGetDishesQuery({
    categoryId: selectedCategoryId,
    search: searchDishes,
  });

  return (
    <div className="home">
      <Header
        text="Let`s eat Quality food"
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
        searchDishes={searchDishes}
        setSearchDishes={setSearchDishes}
      />
      <div>
        <Cards dishes={dishes} />
      </div>
    </div>
  );
};
