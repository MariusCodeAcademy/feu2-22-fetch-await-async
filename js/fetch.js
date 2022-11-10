'use strict';
console.log('fetch.js');

//parsisiusti user.json

function getLocalUser() {
  fetch('data/user.json')
    .then((response) => response.json())
    .then((data) => console.log('data ===', data))
    .catch((err) => console.warn('klaida', err));
}
// getLocalUser();

function getLocalText() {
  fetch('data/colors.txt')
    .then((response) => response.text())
    .then((data) => {
      console.log('data ===', data);
      const arr = data.split(', ');
      console.log('arr ===', arr);
    })
    .catch((err) => console.warn('klaida', err));
}

getLocalText();

const initHtml = () =>
  fetch('data/footer.html')
    .then((response) => response.text())
    .then((data) => document.body.insertAdjacentHTML('beforeend', data))
    .catch((err) => console.warn('klaida', err));

initHtml();
