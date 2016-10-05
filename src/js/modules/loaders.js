import renders from './renders';

const renderSearchResult = renders.renderSearchResult;
const renderUserProfile = renders.renderUserProfile;

const API_PROXY_URL = 'http://188.166.73.133/wg-api';

const GAME = 'wot';

const loaders = {
  loadUsers(username) {
    const url = `${API_PROXY_URL}/${GAME}/account/list/?search=${username}`;
        // create request to the url and return a promise

    return fetch(url)
            .then(response => response.json())
            .then(response => renderSearchResult(response.data))
            .catch(() => alert('alert'));
  },
  loadUsersProfile(userId) {
    const url = `${API_PROXY_URL}/${GAME}/account/info/?account_id=${userId}`;
        // create request to the url and return a promise

    return fetch(url)
            .then(response => response.json())
            .then(response => renderUserProfile(response.data[userId]))
            .catch(() => alert('alert userId'));
  },
};

export default loaders;
