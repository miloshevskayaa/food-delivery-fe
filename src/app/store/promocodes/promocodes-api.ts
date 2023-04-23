import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const promocodesApi = createApi({
  reducerPath: 'promocode',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    getComparedPromocode: builder.query({
      query(params) {
        console.log(params);

        return {
          url: 'promocode',
          method: 'GET',
          params,
        };
      },
    }),
  }),
});

export const { useGetComparedPromocodeQuery } = promocodesApi;
