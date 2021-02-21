const NAME = document.querySelector('.js-name');
const NAME_FORM = document.querySelector('.js-name-form');
const NAME_INPUT = NAME_FORM.querySelector('input');
const KEY_NAME = 'name';
const HIDE_INPUT = 'hide-input';

function saveName(name) {
  localStorage.setItem(KEY_NAME, name);
  showName(name);
}

function showName(name) {
  NAME.innerHTML = `Good Morning ${name}!`;
  NAME_INPUT.classList.add(HIDE_INPUT);
}

function handleSubmit(e) {
  e.preventDefault();
  const userName = NAME_INPUT.value;
  saveName(userName);
  NAME_INPUT.value = '';
}

function init() {
  NAME_FORM.addEventListener('submit', handleSubmit);
  const getName = localStorage.getItem(KEY_NAME);
  if (getName !== null) {
    showName(getName);
  }
}
init();
