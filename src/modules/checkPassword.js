import { pwdError, password, showPasswordBtn } from './DOM';

export default function checkPassword() {
  const pwdPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (pwdPattern.test(password.value)) {
    pwdError.textContent = '';
    pwdError.className = 'error';
    password.style.border = '';
    showPasswordBtn.style = 'top: 52%;';
  } else {
    pwdError.textContent = `Password must contain minimum ${password.minLength} characters and at least one letter and one number `;
    pwdError.className = 'error active';
    password.style.border = '2px solid red';
    showPasswordBtn.style = 'top: 32%;';
  }
}
