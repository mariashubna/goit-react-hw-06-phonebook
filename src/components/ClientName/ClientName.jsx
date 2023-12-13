import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction } from '../../redux/contactsSlice';
import css from './ClientName.module.css'

const ClientName = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = formData;
    const isContactExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExists) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContactAction({ name, number }));
      setFormData({ name: '', number: '' });
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          Name:
          <input className={css.input}
            type="text"
            name="name"
            value={formData.name}
            pattern="[A-Za-z]{2,15} [A-Za-z]{2,15}"
            placeholder="Diana Klein"
            onChange={handleInputChange}
            required
          />
        </label>
        <label className={css.label}>
          Number:
          <input className={css.input}
            type="tel"
            name="number"
            value={formData.number}
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            placeholder="777-77-77"
            onChange={handleInputChange}
            required
          />
        </label>
        <button className={css.btn} type="submit">Add Contact</button>
      </form>
  );
};

export default ClientName;

