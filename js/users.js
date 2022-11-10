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

getData(url).then((dataArr) => {
  console.log('dataArr ===', dataArr[0]);
  // const one = makeCard(dataArr[0]);
  // document.body.appendChild(one);
});

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
/*  
one user obj
{
  id: 1, 
  email: 'george.bluth@reqres.in', 
  first_name: 'George', 
  last_name: 'Bluth', 
  avatar: 'https://reqres.in/img/faces/1-image.jpg'
}
*/

/*  
<div class="card card--user">
  <img src="https://reqres.in/img/faces/1-image.jpg" alt="">
  <h3>title</h3>
  <p>email id</p>
</div>
*/
