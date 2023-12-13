import { useDispatch, useSelector } from 'react-redux';
import { removeContactAction } from '../../redux/contactsSlice';
import css from './ContactsList.module.css';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const filter = useSelector((state) => state.filter.filter);


  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul className={css.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button className={css.btn} onClick={() => dispatch(removeContactAction(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;