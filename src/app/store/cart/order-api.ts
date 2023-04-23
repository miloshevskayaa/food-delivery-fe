import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const ordersApi = createApi({
  reducerPath: 'orders',
  baseQuery: BASE_QUERY,
  tagTypes: ['Orders'],
  endpoints: builder => ({
    createOrder: builder.mutation({
      query(params) {
        return {
          url: 'orders/create',
          method: 'POST',
          body: params,
        };
      },
      invalidatesTags: [{ type: 'Orders', id: 'LIST' }],
    }),
    getOrders: builder.query<any[], any>({
      query(params) {
        return {
          url: 'orders',
          method: 'GET',
          params,
        };
      },
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'Orders', id } as const)),
              { type: 'Orders', id: 'LIST' },
            ]
          : [{ type: 'Orders', id: 'LIST' }],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery } = ordersApi;
