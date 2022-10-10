import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdaptor = createEntityAdapter();
const initialState = contactAdaptor.getInitialState();

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addcontact: contactAdaptor.addOne,
  },
});

export const { addcontact } = contactSlice.actions;
export default contactSlice.reducer;
