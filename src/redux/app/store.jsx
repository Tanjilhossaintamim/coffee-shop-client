import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/api/api";
import coffeeSlice from "../features/coffee/coffeeSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    coffee: coffeeSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
