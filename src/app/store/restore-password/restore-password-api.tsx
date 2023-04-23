import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const passwordApi = createApi({
  reducerPath: 'reset',
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    sendMail: builder.mutation({
      query(data) {
        return {
          url: `reset/check`,
          method: 'POST',
          body: data,
        };
      },
    }),
    otpCheck: builder.mutation({
      query(data) {
        return {
          url: `reset/otp`,
          method: 'DELETE',
          body: data,
        };
      },
    }),
    passwordRestore: builder.mutation({
      query(data) {
        return {
          url: `reset/password`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
  }),
});

export const {
  useSendMailMutation,
  useOtpCheckMutation,
  usePasswordRestoreMutation,
} = passwordApi;
