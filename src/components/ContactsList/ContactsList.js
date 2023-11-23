import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <ul>
        {filteredContacts.map(({ name, phone, id }) => {
          return (
            <li key={id}>
              <Contact contactName={name} contactTel={phone} id={id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
