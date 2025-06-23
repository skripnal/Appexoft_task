import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { AccountType } from "../types/AccountType";

export const socialMediaApi = createApi({
  reducerPath: "socialMediaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  tagTypes: ["Account"],
  endpoints: (builder) => ({
    getAccounts: builder.query<AccountType[], {}>({
      query: () => "accounts",
      providesTags: ["Account"],
    }),
    addAccount: builder.mutation({
      query: (newAccount) => ({
        url: "accounts",
        method: "POST",
        body: newAccount,
      }),
      invalidatesTags: ["Account"],
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({
        url: `accounts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Account"],
    }),
    updateAccount: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `accounts/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Account"],
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = socialMediaApi;
