import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      <ul>
        {contacts.map(({ name, phone, id }) => {
          return <ContactItem key={id} id={id} name={name} number={phone} />;
        })}
      </ul>
    </div>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ),
};
