require('main.css');

const API_PROXY_URL = 'http://188.166.73.133/wg-api'

const GAME = 'wot'

/*
full API description you can find here:
https://ru.wargaming.net/developers/api_reference

 https://api.worldoftanks.ru/wot/account/info/?account_id=demo

you don't have to pass application_id query param.
It will be passed automatically via proxy server
*/

function loadUsers(username) {
  const url = `${API_PROXY_URL}/${GAME}/account/list/?search=${username}`
  // create request to the url and return a promise

  return fetch(url)
         .then( response => response.json() )
         .then( response => renderSearchResult(response.data) )
         .catch(() => alert('alert'));
}

function loadUsersProfile(userId) {
  const url = `${API_PROXY_URL}/${GAME}/account/info/?account_id=${userId}`
  // create request to the url and return a promise

  return fetch(url)
      .then( response => response.json() )
      .then( response => renderUserProfile(response.data[userId]) )
      .catch(() => alert('alert userId'));
}

function renderSpinner(domNode) {
  // clean all content of passed node and then render element with `spinner` classname
}

function renderSearchResult(accounts) {

  let list = document.querySelector('#search-results');
  let html = '';


  for (let item of accounts) {
      html += `<li><button class="js-nickname" data-user-id="${item.account_id}" id="userName_${item.nickname}">${item.nickname}</button></li>`
  }

  list.innerHTML = html;
}

function renderUserProfile(profile) {
  let html = '';
  let profileContainer = document.querySelector('#userProfile');
  let battles = profile.statistics.all.battles;
  let wins = profile.statistics.all.wins;
  let name = profile.nickname;
  let percentWins = ((wins / battles) * 100).toFixed(2);

  console.log(profile);

  html += `<h1>${name}</h1>`;
  html += `<p>Battles: ${battles}</p>`;
  html += `<p>Percent of Wins: ${percentWins}%</p>`;

  profileContainer.innerHTML = html;

}

document.addEventListener('DOMContentLoaded', () => {
  // add search button click handler here

  let button = document.querySelector('#search');
  let field = document.querySelector('#username');
  let list = document.querySelector('#search-results');

  list.addEventListener("click", (e) => {
    let target = e.target;

    if (target.classList.contains('js-nickname')) {
      let userId = target.dataset.userId;

      loadUsersProfile(userId);
    }
  });

  button.addEventListener("click", () => {
    let value = field.value;
      
      loadUsers(value);
      
  });

});
