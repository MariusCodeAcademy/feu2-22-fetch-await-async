'use strict';
console.log('users.js');

const url = 'https://reqres.in/api/users?page=1';

const usersGridEl = document.getElementById('users');
const getUsersBtn = document.getElementById('get1');
const sortUsersBtn = document.getElementById('sort1');

let mainUsersArr = [];

// 4. html virsuje saraso prideti mygtuka sortByfirstName. paspaudus isrikiuoti duomenis pagal varda. (hint: gal padetu globalus masyvas kuriame talpiname duomenis kai atsisiunciame.)
sortUsersBtn.addEventListener('click', async () => {
  console.log('sort');
  // gauti masyva kuri rikiuosim
  // gauti jau parsiusta masyva ir ji rikiuoti nesiunciant papildomos uzklausos
  // (masyva turesim tik po to kai buvo paspaustas getUsersBtn)
  // pasiimam duomenis is globalaus masyvo
  const dataArr = mainUsersArr;
  // rikiuoti
  dataArr.sort((a, b) => a.first_name.localeCompare(b.first_name));

  // atvaizduoti
  console.log('dataArr ===', dataArr);
  makeCardList(dataArr);
});

// 3. padaryti kad duomenys butu parsiusti mygtuko paspaudimu. Ir pakartotinai paspaudus nesidubliuotu.

getUsersBtn.addEventListener('click', async () => {
  console.count('click');
  // getData(url).then((dataArr) => {
  //   makeCardList(dataArr);
  // });

  const dataArr = await getData(url);
  makeCardList(dataArr);
  // irasom duomenis i globalu masyva
  mainUsersArr = dataArr;
});

// 1. su funkcija pasissiusti vartotoju masyva is https://reqres.in/api/users?page=1.

function getData(from) {
  return fetch(from)
    .then((resp) => resp.json())
    .then((dataInJs) => dataInJs.data)
    .catch((err) => console.warn('klaida getData', err));
}

// getData(url).then((dataArr) => {
//   console.log('dataArr ===', dataArr[0]);
//   makeCardList(dataArr);
// });

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

function makeCardList(arr) {
  usersGridEl.innerHTML = '';
  arr.map((uObj) => makeCard(uObj)).forEach((htmlEl) => usersGridEl.append(htmlEl));
}

//
// 5. sugeneruoti is gautu useriu rikiuota sarasa kuriame buti tik vardas ir pavarde
function makeCardLi(obj) {
  const liEl = document.createElement('li');
  liEl.textContent = `${obj.first_name} ${obj.last_name}`;
  return liEl;
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
