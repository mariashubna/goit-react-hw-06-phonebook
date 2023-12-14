import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const persistFilterConfig = {
  key: 'filter',
  storage,
};

const persistedFilterReducer = persistReducer(persistFilterConfig, filterReducer);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: persistedFilterReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };