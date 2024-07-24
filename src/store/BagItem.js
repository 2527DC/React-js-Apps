import { createSlice } from "@reduxjs/toolkit";
const BagItem = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addBagItems: (state, action) => {
      state.push(action.payload)
    },
    removeBagItems: (state, action) => {
    return state.filter(itemId=>itemId!==action.payload)
    },
  },
});
export const BagItemAction = BagItem.actions;
export default BagItem;
