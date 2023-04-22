import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getCategory: builder.query({
      query() {
        return {
          url: `categories`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetCategoryQuery } = categoriesApi;
