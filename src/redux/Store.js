import { configureStore } from "@reduxjs/toolkit";
import Slice1 from "./Slice1";
const Store = configureStore({
  reducer: {
    Sliceone: Slice1,
  },
});
export default Store;
