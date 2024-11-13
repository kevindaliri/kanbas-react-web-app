// src/Kanbas/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import accountReducer from "./Account/reducer"; // Ensure this is the correct path

const store = configureStore({
  reducer: {
    modules: modulesReducer,
    assignments: assignmentsReducer,
    account: accountReducer, // Use the key 'account' here to match useSelector
  },
});

export default store;
