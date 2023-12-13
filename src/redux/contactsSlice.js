import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

function loadContactsFromLocalStorage() {
  const storedContacts = localStorage.getItem('contacts');
  return storedContacts ? JSON.parse(storedContacts) : [];
}

const contactsInitialState = {
  contacts: loadContactsFromLocalStorage(),
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
      },
    },
    removeContactAction(state, action) {
      state.contacts = state.contacts.filter(({ id }) => id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addContactAction, removeContactAction } = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);