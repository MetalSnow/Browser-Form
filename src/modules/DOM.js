export {
  form,
  inputs,
  email,
  emailError,
  country,
  ZIPField,
  ZIPError,
  password,
  pwdError,
  confirmPassword,
  confirmPwdError,
  showPasswordBtn,
  showConfirmedPasswordBtn,
  highFiveMessage,
};

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');
const country = document.getElementById('country');
const ZIPField = document.getElementById('zip');
const ZIPError = document.querySelector('#zip + span.error');
const password = document.querySelector('#pwd');
const pwdError = document.querySelector('#pwd + span.error');
const confirmPassword = document.querySelector('#c-pwd');
const confirmPwdError = document.querySelector('#c-pwd + span.error');
const showPasswordBtn = document.querySelector('.show-pwd');
const showConfirmedPasswordBtn = document.querySelector('.show-c-pwd');
const highFiveMessage = document.querySelector('.highFiveMessage');
