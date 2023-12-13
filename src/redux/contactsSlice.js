import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  contacts: loadContactsFromLocalStorage(), // Load contacts from local storage initially
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContactAction: {
      prepare(newContact) {
        return {
          payload: {
            ...newContact,
            id: nanoid(),
          },
        };
      },
      reducer(state, action) {
        state.contacts.push(action.payload);
        saveContactsToLocalStorage(state.contacts); // Save contacts to local storage after adding
      },
    },
    removeContactAction(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
      saveContactsToLocalStorage(state.contacts); // Save contacts to local storage after removal
    },
  },
});

export const { addContactAction, removeContactAction } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


function loadContactsFromLocalStorage() {
  const storedContacts = localStorage.getItem('contacts');
  return storedContacts ? JSON.parse(storedContacts) : [];
}

function saveContactsToLocalStorage(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}