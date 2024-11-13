// src/Kanbas/store/Account/reducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for the initial state
interface AccountState {
  currentUser: string | null; // Define type based on the shape of user data
}

const initialState: AccountState = {
  currentUser: null, // Start as null to ensure no undefined errors
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<string | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;
