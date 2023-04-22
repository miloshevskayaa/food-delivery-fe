import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const dishesApi = createApi({
  reducerPath: 'dishes',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getDishes: builder.query({
      query(params) {
        return {
          url: 'dishes',
          method: 'GET',
          params,
        };
      },
    }),
    getDish: builder.query({
      query(params) {
        return {
          url: 'dishes/dish',
          method: 'GET',
          params,
        };
      },
    }),
  }),
});

export const { useGetDishesQuery, useGetDishQuery } = dishesApi;
