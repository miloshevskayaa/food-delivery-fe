import React, { useState } from 'react';
import { Cards, Header } from '@components/ui-kit';
import { useGetCategoryQuery } from '@store/categories';
import { useGetFavoritesQuery } from '@store/favorites';

export const Favorites: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const { data: categories = [] } = useGetCategoryQuery({});

  const [searchDishes, setSearchDishes] = useState('');

  const { data: favorites = [] } = useGetFavoritesQuery({
    categoryId: selectedCategoryId,
    search: searchDishes,
  });

  return (
    <div className="home">
      <Header
        text="Let`s eat Favorite food "
        categories={categories}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
        searchDishes={searchDishes}
        setSearchDishes={setSearchDishes}
      />
      <Cards dishes={favorites.map((item: any) => item.dish)} />
    </div>
  );
};
