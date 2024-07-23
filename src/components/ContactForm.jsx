import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { addContact, updateContact } from '../redux/actions/contactActions';

const ContactForm = ({ contact, setContact }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    avatar: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (contact) {
      setFormData(contact);
      setShow(true);
    }
  }, [contact]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact) {
      dispatch(updateContact(formData));
    } else {
      dispatch(addContact(formData));
    }
    setShow(false);
    setContact(null);
    setFormData({
      avatar: '',
      name: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add Contact
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{contact ? 'Edit Contact' : 'Add Contact'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formAvatar">
              <Form.Label>Avatar</Form.Label>
              <Form.Control type="text" placeholder="Enter avatar URL" name="avatar" value={formData.avatar} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" name="phone" value={formData.phone} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" name="address" value={formData.address} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="formNotes">
              <Form.Label>Notes</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter notes" name="notes" value={formData.notes} onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactForm;
