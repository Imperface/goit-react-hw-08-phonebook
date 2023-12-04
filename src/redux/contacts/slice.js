import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';
const initialState = {
  items: [],
  isLoadingAll: false,
  isLoadingAdd: false,
  isLoadingDelete: false,
  error: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: payload,
          isLoadingAll: false,
        };
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoadingAdd: false,
          items: [payload, ...state.items],
        };
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: state.items.filter(contact => contact.id !== payload.id),
          isLoadingDelete: false,
        };
      })
      .addCase(fetchContacts.pending, state => {
        return {
          ...state,
          isLoadingAll: true,
          error: '',
        };
      })
      .addCase(addContact.pending, state => {
        return {
          ...state,
          isLoadingAdd: true,
          error: '',
        };
      })
      .addCase(deleteContact.pending, state => {
        return {
          ...state,
          isLoadingDelete: true,
          error: '',
        };
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, { payload }) => {
          return {
            ...state,
            isLoadingAll: false,
            isLoadingAdd: false,
            isLoadingDelete: false,
            error: payload,
          };
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
