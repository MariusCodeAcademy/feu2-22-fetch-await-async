'use strict';
console.log('users.js');

class App {
  url = 'https://reqres.in/api/users?page=1';
  mainUsersArr = [];
  el = {};

  constructor() {
    this.initTargets();
    this.initEventListeners();
    this.getData();
  }

  initTargets() {
    this.el.usersGridEl = document.getElementById('users');
    this.el.getUsersBtn = document.getElementById('get1');
    this.el.sortUsersBtn = document.getElementById('sort1');
  }

  makeCard(obj) {
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

  makeCardList(arr) {
    this.el.usersGridEl.innerHTML = '';
    arr.map((uObj) => this.makeCard(uObj)).forEach((htmlEl) => this.el.usersGridEl.append(htmlEl));
  }

  getData() {
    return fetch(this.url)
      .then((resp) => resp.json())
      .then((dataInJs) => (this.mainUsersArr = dataInJs.data))
      .catch((err) => console.warn('klaida getData', err));
  }

  initEventListeners() {
    this.el.sortUsersBtn.addEventListener('click', async () => {
      console.log('sort');
      const dataArr = this.mainUsersArr;
      // rikiuoti
      dataArr.sort((a, b) => a.first_name.localeCompare(b.first_name));

      // atvaizduoti
      console.log('dataArr ===', dataArr);
      this.makeCardList(dataArr);
    });

    this.el.getUsersBtn.addEventListener('click', async () => {
      console.count('click');

      // await this.getData();
      this.makeCardList(this.mainUsersArr);
    });
  }
}

const app = new App();

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
