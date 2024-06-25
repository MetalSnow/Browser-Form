import {
  password,
  confirmPassword,
  confirmPwdError,
  showConfirmedPasswordBtn,
} from './DOM';

export default function confirmPwd() {
  if (password.value !== confirmPassword.value) {
    confirmPwdError.textContent = 'Password does not match!';
    confirmPwdError.className = 'error active';
    confirmPassword.style.border = '2px solid red';
    showConfirmedPasswordBtn.style = 'top: 42%;';
    return false;
  } else {
    confirmPwdError.textContent = '';
    confirmPwdError.className = 'error';
    confirmPassword.style.border = '';
    showConfirmedPasswordBtn.style = 'top: 52%;';
    return true;
  }
}
