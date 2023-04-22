import React, { useState } from 'react';
import { Cards, Header } from '@components/ui-kit';
import { useAppSelector } from '@core/hooks';
import { useGetCategoryQuery } from '@store/categories';
import { useGetFavoritesQuery } from '@store/favorites';

export const Favorites: React.FC = () => {
  const [categoryId, setCategoryId] = useState('');

  const { data: categories = [] } = useGetCategoryQuery({});

  const user = useAppSelector(state => state.user.user);
  const { data: favorites = [] } = useGetFavoritesQuery(user?.id);

  return (
    <div className="home">
      <Header
        text="Let`s eat Favorite food "
        categories={categories}
        categoryId={categoryId}
        setCategoryId={setCategoryId}
      />
      <Cards dishes={favorites.map((item: any) => item.dish)} />
    </div>
  );
};
