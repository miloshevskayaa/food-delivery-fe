import React, { useState } from 'react';
import { Cards, Header } from '@components/ui-kit';
import { guard } from '@core/utils/HOC';
import { useGetCategoryQuery } from '@store/categories';
import { useGetFavoritesQuery } from '@store/favorites';

const FavoritesComponent: React.FC = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

  const { data: categories = [] } = useGetCategoryQuery({});

  const [searchDishes, setSearchDishes] = useState<string>('');

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

export const Favorites = guard(FavoritesComponent);
