'use strict';
console.log('users-app.js');

const url = 'https://reqres.in/api/users?page=1';
const uListEl = document.getElementById('usersList');
const currentUserEl = document.getElementById('currentUser');

let dataArr = [];

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
  liEl.className = 'list-el';
  liEl.textContent = `${obj.first_name} ${obj.last_name}`;
  liEl.addEventListener('click', () => showUser(obj.id));
  return liEl;
}

async function mainInit() {
  dataArr = await getData(url);
  makeList(dataArr, makeCardLi);
}

mainInit();

function showUser(userId) {
  //
  console.log('show user', userId);
  // surasti el su id userId
  const found = dataArr.find((uObj) => uObj.id === userId);
  if (!found) return console.warn('not found');
  console.log('found ===', found);
  // pagaminti el su makeCard()
  const htmlCardEl = makeCard(found);
  // isvalyti konteineri pries talpinant
  currentUserEl.innerHTML = '';
  // patalipinti el currentUserEl
  currentUserEl.append(htmlCardEl);
}

function makeCard(obj) {
  const divEl = document.createElement('div');
  divEl.className = 'card card--user';
  const imgEl = document.createElement('img');
  imgEl.src = obj.avatar;
  imgEl.alt = obj.email;
  const h3El = document.createElement('h3');
  h3El.textContent = `${obj.first_name} ${obj.last_name}`;
  const pEl = document.createElement('p');
  pEl.textContent = `${obj.email} (id:${obj.id})`;
  divEl.append(imgEl, h3El, pEl);
  return divEl;
}
