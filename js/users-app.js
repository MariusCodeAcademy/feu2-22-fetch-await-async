'use strict';
console.log('users-app.js');

const url = 'https://reqres.in/api/users?page=1';
const uListEl = document.getElementById('usersList');

function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .then((dataInJs) => dataInJs.data)
    .catch((err) => console.warn('klaida getData', err));
}

function makeList(arr, cb) {
  uListEl.innerHTML = '';
  // console.log('usersListEl ===', usersListEl);
  arr.map((uObj) => cb(uObj)).forEach((htmlEl) => uListEl.append(htmlEl));
}

// 5. sugeneruoti is gautu useriu rikiuota sarasa kuriame buti tik vardas ir pavarde
function makeCardLi(obj) {
  const liEl = document.createElement('li');
  liEl.textContent = `${obj.first_name} ${obj.last_name}`;
  return liEl;
}

async function mainInit() {
  const dataArr = await getData(url);
  makeList(dataArr, makeCardLi);
}

mainInit();
