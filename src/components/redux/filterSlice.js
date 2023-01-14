import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter-contacts',

  initialState: filterInitialState,

  reducers: {
    filterContact(state, action) {},
  },
});

export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
