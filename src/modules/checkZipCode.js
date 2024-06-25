import { country, ZIPError, ZIPField } from './DOM';

export default function checkZIP() {
  const constraints = {
    mr: [
      '^(MR-)?\\d{4}$',
      'Morocco ZIPs must have exactly 4 digits: e.g. MR-1950 or 1950',
    ],
    cn: [
      '^(CN-)?\\d{5}$',
      'China ZIPs must have exactly 5 digits: e.g. CN-75012 or 75012',
    ],
    jp: [
      '^(D-)?\\d{5}$',
      'Japan ZIPs must have exactly 5 digits: e.g. JP-12345 or 12345',
    ],
    rs: [
      '^\\d{3}(-)?\\d{3}$',
      'Russia ZIPs must have exactly 6 digits: e.g. 123-456 or 123456',
    ],
  };

  // Build the constraint checker
  const constraint = new RegExp(constraints[country.value][0], '');

  // Check
  if (constraint.test(ZIPField.value)) {
    ZIPError.textContent = '';
    ZIPError.classList.remove('active');
    ZIPField.style.border = '';
  } else {
    ZIPError.textContent = constraints[country.value][1];
    ZIPError.className = 'error active';
    ZIPField.style.border = '2px solid red';
  }
}
