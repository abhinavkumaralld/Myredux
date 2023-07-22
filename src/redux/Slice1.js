import { createSlice } from "@reduxjs/toolkit";

const Slice1 = createSlice({
  name: "Slice1",
  initialState: {
    list: ["jhf", "mmm"],
  },
  reducers: {
    addItem: (state, action) => {
      state.list.push(action.payload);
    },
    popItem: (state) => {
      state.list.pop();
    },
  },
});
export const { addItem, popItem } = Slice1.actions;
export default Slice1.reducer;
