import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchAllContacts = async () => {
  const res = await axios.get('/contacts');
  return res.data;
};

export const postContact = async newContact => {
  const res = await axios.post('/contacts', newContact);
  return res.data;
};

export const deleteContact = async id => {
  await axios.delete(`/contacts/${id}`);
};
