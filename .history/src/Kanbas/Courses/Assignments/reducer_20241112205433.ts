import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const initialState = {
  assignments: initialAssignments || [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      const newAssignment = {
        _id: assignment._id,
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        points: assignment.points,
        dueDate: assignment.dueDate,
        availableFromDate: assignment.availableFromDate, // Change this to match the payload from the component
        availableUntilDate: assignment.availableUntilDate, // Change this to match the payload from the component
      };
      state.assignments.push(newAssignment); // Simply push to add to state array
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter((a) => a._id !== action.payload);
    },
    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((a) =>
        a._id === action.payload._id ? action.payload : a
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
