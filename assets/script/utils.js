'use strict';
import { fileURLToPath } from 'url';

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
function validateInput(input) {
    // Assuming input format is: name, email, city
    const inputArray = input.split(',');
  
    if (inputArray.length !== 3) {
      return false;
    }
  
    const trimmedValues = inputArray.map(value => value.trim());
  
    if (trimmedValues.some(value => value === '')) {
      return false;
    }
  
    return true;
}
  
  export { validateEmail, validateInput };