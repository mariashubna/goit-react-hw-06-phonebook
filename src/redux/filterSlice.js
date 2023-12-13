import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    updateFilterAction(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { updateFilterAction } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;