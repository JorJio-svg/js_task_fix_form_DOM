'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.name;
  const capitalized = inputName.slice(0, 1).toUpperCase() + inputName.slice(1);
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  input.placeholder = capitalized;
  input.textContent = inputName;
  input.parentElement.append(label);
});
