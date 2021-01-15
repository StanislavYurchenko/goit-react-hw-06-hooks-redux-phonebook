export const getContacts = () => {
  let contacts = localStorage.getItem('contacts');
  return JSON.parse(contacts) ?? [];
};

export const setContacts = contacts => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};
