import { configureStore } from "@reduxjs/toolkit";
import itemSlice from './itemSlice'
import fetchStatusSlice from './fetchStatusSlice'
import BagItem from "./BagItem";

const myntraStore = configureStore({
 reducer: {
    item: itemSlice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag:BagItem.reducer,
  },
});
export default myntraStore;
