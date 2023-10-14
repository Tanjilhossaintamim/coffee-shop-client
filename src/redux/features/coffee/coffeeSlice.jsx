import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updatedCoffeeData: {},
};

const coffeeSlice = createSlice({
  name: "coffee",
  initialState,
  reducers: {
    editCoffee: (state, action) => {
      state.updatedCoffeeData = action.payload;
    },
  },
});

export default coffeeSlice.reducer;
export const { editCoffee } = coffeeSlice.actions;
