import {
  useCreateFavoriteMutation,
  useGetFavoritesQuery,
  useRemoveFavoriteMutation,
} from '@store/favorites';
import { useAppSelector } from './use-app-selector';

export const useToggleFavorites = (dishId: string) => {
  const [createFavorite, { isLoading: isCreatingFavorite }] =
    useCreateFavoriteMutation();
  const [removeFavorite, { isLoading: isRemovingFavorite }] =
    useRemoveFavoriteMutation();

  const selectedUser = useAppSelector(state => state.user.user);
  const userId = selectedUser?.id;

  let { data: favorites = [] } = useGetFavoritesQuery(userId);

  favorites = favorites.map((item: any) => item.dish);

  const toggleFavorite = async () => {
    if (isCreatingFavorite || isRemovingFavorite) {
      return;
    }

    if (favorites.find((item: any) => item.id === dishId)) {
      await removeFavorite({ userId, dishId });
    } else {
      await createFavorite({ userId, dishId });
    }
  };

  return [toggleFavorite, favorites];
};
