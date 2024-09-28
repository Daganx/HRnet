import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push({
        firstName: action.payload.firstName, // Nom correct depuis la payload
        lastName: action.payload.lastName, // Nom correct depuis la payload
        dateOfBirth: action.payload.dateOfBirth, // Date de naissance sérialisée
        startDate: action.payload.startDate, // Date d'embauche sérialisée
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        department: action.payload.department,
      });
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
