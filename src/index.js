import './style.css';
import {
  email,
  country,
  ZIPField,
  password,
  confirmPassword,
  showPasswordBtn,
  showConfirmedPasswordBtn,
  form,
  inputs,
  highFiveMessage,
} from './modules/DOM';
import checkEmail from './modules/checkEmail';
import checkZIP from './modules/checkZipCode';
import checkPassword from './modules/checkPassword';
import confirmPwd from './modules/confirmPassword';
import showPassword from './modules/showPassword';

email.addEventListener('input', checkEmail);
country.addEventListener('change', checkZIP);
ZIPField.addEventListener('input', checkZIP);
password.addEventListener('input', checkPassword);
confirmPassword.addEventListener('input', confirmPwd);
showPasswordBtn.addEventListener('click', (event) => {
  event.preventDefault();
  showPassword(password);
});
showConfirmedPasswordBtn.addEventListener('click', (event) => {
  event.preventDefault();
  showPassword(confirmPassword);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  inputs.forEach((input) => {
    if (!input.checkValidity() || !confirmPwd()) {
      checkEmail();
      checkZIP();
      checkPassword();
    } else {
      highFiveMessage.style.display = 'block';

      setTimeout(() => {
        highFiveMessage.style.display = 'none';
      }, 1000);
    }
  });
});
