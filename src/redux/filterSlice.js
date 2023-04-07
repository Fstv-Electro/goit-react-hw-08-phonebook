import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: '',

  reducers: {
    setFilter(_, { payload }) {
      return payload;
    },

    resetFilter() {
      return '';
    },
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
