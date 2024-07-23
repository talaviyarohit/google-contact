import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup, Button, Container } from 'react-bootstrap';
import ContactForm from './ContactForm';
import { deleteContact, updateContact } from '../redux/actions/contactActions';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const [editContact, setEditContact] = useState(null);

  const handleEdit = (contact) => {
    setEditContact(contact);
  };

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <Container>
      <ContactForm contact={editContact} setContact={setEditContact} />

      <ListGroup>
        {contacts.map(contact => (
          <ListGroup.Item key={contact.id}>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>{contact.name}</h5>
                <p>{contact.phone}</p>
                <p>{contact.email}</p>
                <p>{contact.address}</p>
                <p>{contact.notes}</p>
              </div>
              <div>
                <Button variant="primary" className="mr-2" onClick={() => handleEdit(contact)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(contact.id)}>Delete</Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default ContactList;
