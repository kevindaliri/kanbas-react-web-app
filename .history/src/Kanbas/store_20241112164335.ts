import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer"; // Adjust path if needed
import accountReducer from "./Account/reducer"; // Import the account reducer

// Set up the Redux store
const store = configureStore({
  reducer: {
    modulesReducer,  // If you have another reducer
    accountReducer,  // Account reducer we just created
  },
});

export default store;
