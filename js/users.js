'use strict';
console.log('users.js');

const url = 'https://reqres.in/api/users?page=1';
// 1. su funkcija pasissiusti vartotoju masyva is https://reqres.in/api/users?page=1.

function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .then((dataInJs) => dataInJs.data)
    .catch((err) => console.warn('klaida getData', err));
}

getData(url).then((dataArr) => console.log('dataArr ===', dataArr));
