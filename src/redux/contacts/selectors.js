export const selectContacts = state => state.contacts.items;
export const selectContactsIsLoadingAll = state => state.contacts.isLoadingAll;
export const selectContactsIsLoadingAdd = state => state.contacts.isLoadingAdd;
export const selectContactsIsLoadingDelete = state =>
  state.contacts.isLoadingDelete;
export const selectContactsError = state => state.contacts.error;
export const selectContactsOperation = state => state.contacts.operation;
