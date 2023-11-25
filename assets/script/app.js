'use strict';
// app.js

import { Contact } from './contact.js';
import { validateEmail, validateInput } from './utils.js';

const contacts = [];

// creating the contact from the input
function listContacts() {
  const storage = document.querySelector('.storage');
  storage.innerHTML = '';

  contacts.forEach((contact, index) => {
    const contactDiv = document.createElement('div');
    contactDiv.className = 'box';
    contactDiv.innerHTML = `
      <p>Name: ${contact.name}</p>
      <p>Email: ${contact.email}</p>
      <p>City: ${contact.city}</p>
      <button onclick="deleteContact(${index})">Delete</button>
    `;

    storage.prepend(contactDiv);
  });

  updateContactCount();
}

// add the contact to the array and display it
function createContact() {
  document.getElementById('add-contact').addEventListener('click', () => {
  const enterInfoInput = document.getElementById('enter-info');
  const enteredInfo = enterInfoInput.value.trim();

  if (validateInput(enteredInfo)) {
    const [name, email, city] = enteredInfo.split(',');

    if (validateEmail(email)) {
      const newContact = new Contact(name, email, city);
      contacts.unshift(newContact);
      listContacts();

      // Clear input after adding a contact
      enterInfoInput.value = '';
    } else {
      alert('Invalid email address');
    }
  } else {
    alert('Invalid input format. Please use: name, email, city');
  }
});
}

function updateContactCount() {
    const countElement = document.querySelector('.count');
    countElement.textContent = `Contacts: ${contacts.length}`;
}
  
  function deleteContact(index) {
    contacts.splice(index, 1);
    listContacts();
}