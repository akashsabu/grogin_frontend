import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  categories: [],
  brands: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialStateValue,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
   
  },
});

export const { setCategories, setBrands } = filterSlice.actions;
export default filterSlice.reducer;
