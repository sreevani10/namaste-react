import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //vanilla (older) redux => Don't mutate state , returning the mandatory
      // const newstate = [..state];
      //newState.items.push(action.payload);
      //return newState;

      //React Toolkit
      //mutating the state here means changing the state directly
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0; //[]
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
