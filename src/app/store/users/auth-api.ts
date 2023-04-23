import { createApi } from '@reduxjs/toolkit/query/react';
import { BASE_QUERY } from '../models';

export const authApi = createApi({
  baseQuery: BASE_QUERY,
  endpoints: builder => ({
    createUser: builder.mutation({
      query(data) {
        return {
          url: `register`,
          method: 'POST',
          body: data,
        };
      },
    }),
    updateUser: builder.mutation({
      query({ id, data }) {
        return {
          url: `update/${id}`,
          method: 'PATCH',
          body: data,
        };
      },
    }),
    uploadImageUser: builder.mutation({
      query({ file }) {
        const formData = new FormData();

        formData.append('image', file);

        return {
          url: `update/upload`,
          method: 'POST',
          body: formData,
        };
      },
    }),
    loginUser: builder.mutation({
      query(data) {
        return {
          url: `auth/login`,
          method: 'POST',
          body: data,
        };
      },
    }),
    getCurrentUser: builder.mutation({
      query: () => {
        return {
          url: `auth/profile`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useCreateUserMutation,
  useUpdateUserMutation,
  useLoginUserMutation,
  useGetCurrentUserMutation,
  useUploadImageUserMutation,
} = authApi;
