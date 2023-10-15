import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coffe-shop-server-a7r26rfbv-tanjilhossain00.vercel.app",
  }),
  endpoints: () => ({}),
});
