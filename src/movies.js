const results = document.querySelector("#results");

const updateResults = (data) => {
  results.innerHTML = '';
  data.Search.forEach((result) => {
    const movie = `<li class="list-inline-item">
      <img src="${result.Poster}" height="130" alt="">
    </li>`;

    results.insertAdjacentHTML("beforeend", movie);
  });
};

const fetchMovies = (query) => {
  fetch(`http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then(updateResults);
};

const getList = (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector('#keyword').value;
  fetchMovies(input);
};


export { fetchMovies, getList };
