document.addEventListener('DOMContentLoaded', (e) => {

  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

  const cities = [];
  const inputSearch = document.querySelector('.search');
  const suggestions = document.querySelector('.suggestions');

  fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

  function findMatches(term, searchArr) {
    const regex = new RegExp(term, 'gi');
    return searchArr.filter((search) => {
      return search.city.match(regex) || search.state.match(regex);
    });
  }

  function displayMatch() {
    const matches = findMatches(this.value, cities);
    const regex = new RegExp(this.value, 'gi');
    const html = matches.map((match) => {
      const cityName = match.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = match.state.replace(regex, `<span class="hl">${this.value}</span>`);
      return `
        <li>
          <span>${cityName}, ${stateName}</span>
          <span class="population">${match.population}</span>
        </li>
      `;
    }).join('');

    suggestions.innerHTML = html;
  }

  inputSearch.addEventListener('change', displayMatch);
  inputSearch.addEventListener('keyup', displayMatch);
});