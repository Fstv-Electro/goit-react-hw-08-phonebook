import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/reducers';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
