import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import ClientName from '../components/ClientName/ClientName';
import ContactsList from '../components/ContactsList/ContactsList';
import Filter from '../components/Filter/Filter';
import css from './App.module.css'

export const App = () => {
  return (
    <Provider store={store}>
      <div className={css.сontainer}>
        <h1 >Phonebook App</h1>
        <ClientName />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    </Provider>
  );
};

