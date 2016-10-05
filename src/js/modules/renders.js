const renders = {
  renderSearchResult(accounts) {
    const list = document.querySelector('#search-results');

    let html = '';
    html += '<div class="results">';
    html += '<h2 class="results_heading">Results</h2>';
    html += '<ol class="results_list">';

    for (const item of accounts) {
      html += `<li class="results_item"><button class="js-nickname btn btn-default btn-sm" data-user-id="${item.account_id}" id="userName_${item.nickname}">${item.nickname}</button></liresults_list>`;
    }

    html += '</ol>';
    html += '</div>';

    list.innerHTML = html;
  },
  renderUserProfile(profile) {
    let html = '';
    const profileContainer = document.querySelector('#userProfile');
    const battles = profile.statistics.all.battles;
    const wins = profile.statistics.all.wins;
    const name = profile.nickname;
    const percentWins = ((wins / battles) * 100).toFixed(2);

    html += `<h2>${name}</h2>`;
    html += `<p><span class="text-uppercase">Battles</span>: ${battles}</p>`;
    html += `<p><span class="text-uppercase">Percent of Wins</span>: ${percentWins}%</p>`;

    profileContainer.innerHTML = html;
  },
};

export default renders;
