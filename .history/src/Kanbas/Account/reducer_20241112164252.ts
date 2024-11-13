import { createSlice } from "@reduxjs/toolkit";

// Initial state with currentUser set to null
const initialState = {
  currentUser: null,
};

// Create the account slice
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // Action to set the current user
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

// Export actions and reducer
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
