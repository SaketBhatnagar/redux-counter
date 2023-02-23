import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    inc: (state, action) => {
      return (state = state + 1);
    },
    dec: (state, action) => {
      return (state -= 1);
    },
    reset: (state, action) => {
      return (state = 0);
    },
    inc_by: (state, action) => {
      return (state += action.payload);
    },
  },
});

export const { inc, dec, reset, inc_by } = counterSlice.actions;
export default counterSlice.reducer;
