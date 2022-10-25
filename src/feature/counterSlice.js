import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  income: 50000,
  groceries: 5000,
  entertainment: 5000,
  bills: 5000,
};

export const Counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Income: (state, action) => {
      state.income = action.payload;
    },
    Groceries: (state, action) => {
      state.groceries = action.payload;
    },
    Entertainment: (state, action) => {
      state.entertainment = action.payload;
    },
    Bills: (state, action) => {
      state.bills = action.payload;
    },
  },
});
export const { Income, Groceries, Entertainment, Bills } = Counter.actions;
export const readIncome = (state) => state.count.income;
export const readExpences = (state) =>
  state.count.groceries + state.count.entertainment + state.count.bills;

export default Counter.reducer;
