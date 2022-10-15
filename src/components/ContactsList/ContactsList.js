import React from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { ContactsListWrap } from './ContactsList.styled';

const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <>
      <ContactsListWrap>
        {contacts.map(({ name, number, id }) => {
          return <ContactItem key={id} id={id} name={name} number={number} />;
        })}
      </ContactsListWrap>
    </>
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
