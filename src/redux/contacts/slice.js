import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/operations';
const initialState = {
  items: [],
  isLoading: false,
  error: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        if (payload.length > 0) {
          Notify.success(`Loaded ${payload.length} contacts.`);
        }
        return {
          ...state,
          items: payload,
          isLoading: false,
        };
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          items: [payload, ...state.items],
        };
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: state.items.filter(contact => contact.id !== payload.id),
          isLoading: false,
        };
      })
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        state => {
          return {
            ...state,
            isLoading: true,
            error: '',
          };
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        (state, { payload }) => {
          return {
            ...state,
            isLoading: false,
            error: payload,
          };
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
