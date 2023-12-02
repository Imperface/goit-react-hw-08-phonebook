// import reducer
import { filterReducer } from 'redux/filter/slice';
import { contactsReducer } from 'redux/contacts/slice';

// other import
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
