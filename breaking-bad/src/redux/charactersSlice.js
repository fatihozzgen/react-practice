import { createSlice } from "@reduxjs/toolkit";

export const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    items: [
      {
        name: "fatih",
      },
    ],
  },
  reducers: {},
});

export default charactersSlice.reducer;
