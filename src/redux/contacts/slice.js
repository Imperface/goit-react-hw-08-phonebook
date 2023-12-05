import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  FETCH_CONTACTS,
} from 'constans/operationType';
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
  operation: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    clearContactsOperation: state => {
      return { ...state, operation: '' };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: payload,
          isLoadingAll: false,
          operation: FETCH_CONTACTS,
        };
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoadingAdd: false,
          items: [payload, ...state.items],
          operation: ADD_CONTACT,
        };
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        return {
          ...state,
          items: state.items.filter(contact => contact.id !== payload.id),
          isLoadingDelete: false,
          operation: DELETE_CONTACT,
        };
      })
      .addCase(fetchContacts.pending, state => {
        return {
          ...state,
          isLoadingAll: true,
          error: '',
          operation: '',
        };
      })
      .addCase(addContact.pending, state => {
        return {
          ...state,
          isLoadingAdd: true,
          error: '',
          operation: '',
        };
      })
      .addCase(deleteContact.pending, state => {
        return {
          ...state,
          isLoadingDelete: true,
          error: '',
          operation: '',
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
            operation: '',
          };
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { clearContactsOperation } = contactsSlice.actions;
