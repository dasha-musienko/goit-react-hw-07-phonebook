import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        onChange={evt => dispatch(filterContacts(evt.target.value))}
      />
    </div>
  );
};
