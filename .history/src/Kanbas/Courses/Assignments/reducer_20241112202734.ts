import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database"; // Adjust the path as needed for your data source

// Initial state with assignments loaded from the data source
const initialState = {
  assignments: assignments,
};

// Create the assignments slice
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // Adds a new assignment to the state
    addAssignment: (state, action) => {
      const newAssignment = {
        _id: new Date().getTime().toString(), // Generate a unique ID based on timestamp
        ...action.payload,
      };
      state.assignments.push(newAssignment);
    },

    // Deletes an assignment by its _id
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== action.payload
      );
    },

    // Updates an existing assignment by its _id
    updateAssignment: (state, action) => {
      const { _id, data } = action.payload;
      const index = state.assignments.findIndex((assignment) => assignment._id === _id);
      if (index !== -1) {
        state.assignments[index] = { ...state.assignments[index], ...data };
      }
    },
  },
});

// Export the actions to use in components
export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;

// Export the reducer to add to the store
export default assignmentsSlice.reducer;
