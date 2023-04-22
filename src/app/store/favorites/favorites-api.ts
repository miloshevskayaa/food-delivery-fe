import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const favoritesApi = createApi({
  reducerPath: 'favorites',
  baseQuery: BASE_QUERY,
  tagTypes: ['Dishes'],
  endpoints: builder => ({
    getFavorites: builder.query({
      // добавить гварды, бек и фронт

      query() {
        return {
          url: `favorites`,
          method: 'GET',
        };
      },
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Dishes', id } as const)),
              { type: 'Dishes', id: 'LIST' },
            ]
          : [{ type: 'Dishes', id: 'LIST' }],
    }),
    createFavorite: builder.mutation({
      query(params) {
        return {
          url: 'favorites/create',
          method: 'POST',
          body: params,
        };
      },
      invalidatesTags: [{ type: 'Dishes', id: 'LIST' }],
    }),
    removeFavorite: builder.mutation({
      query(params) {
        return {
          url: `favorites/remove`,
          method: 'DELETE',
          body: params,
        };
      },
      invalidatesTags: [{ type: 'Dishes', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useCreateFavoriteMutation,
  useRemoveFavoriteMutation,
} = favoritesApi;