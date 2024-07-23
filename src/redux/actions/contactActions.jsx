import axios from 'axios';

const API_URL = 'http://localhost:5000/contacts';

export const fetchContacts = () => async (dispatch) => {
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: 'FETCH_CONTACTS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const addContact = (contact) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, contact);
    dispatch({ type: 'ADD_CONTACT', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const updateContact = (contact) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${contact.id}`, contact);
    dispatch({ type: 'UPDATE_CONTACT', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const deleteContact = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: 'DELETE_CONTACT', payload: id });
  } catch (error) {
    console.error(error);
  }
};
