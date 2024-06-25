import { email, emailError } from './DOM';

export default function checkEmail() {
  if (email.checkValidity()) {
    emailError.textContent = '';
    emailError.classList.remove('active');
    email.style.border = '';
  } else {
    email.style.border = '2px solid red';
    showError();
  }
}

// Email Error
function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an email address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an email address.';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}
