const cards = document.getElementById("cards");
const searchCards = document.getElementById("search-cards");
class Movie {
  constructor(name, profits, views, photo) {
    this.name = name;
    this.profits = profits;
    this.views = views;
    this.photo = photo;
  }
  display() {
    return (cards.innerHTML += ` <section style="background-image: url(${this.photo});" id="card">
      <div id="name1">${this.name}</div>
      <div id="profits1">${this.profits}</div>
      <div id="views1">${this.views}</div>
    </section>`);
  }
}
const area = document.createElement("textarea");
document.body.appendChild(area);

function add() {
  const name = document.getElementById("name").value;
  const profits = document.getElementById("profits").value;
  const views = document.getElementById("views").value;
  const photo = document.getElementById("photo").value;
  movis = [new Movie(name, profits, views, photo)];
  movis.forEach((e) => {
    e.display();
  });
  let json = JSON.stringify(movis);
  area.value += json;
  console.log(json);
}
let movis = [new Movie(name, profits, views, photo)];
function imp() {
  movis = JSON.parse(area.value);
  movis.forEach((e) => {
    cards.innerHTML += ` <section style="background-image: url(${e.photo});" id="card">
    <div id="name1">${e.name}</div>
    <div id="profits1">${e.profits}</div>
    <div id="views1">${e.views}</div>
    </section>`;
  });
}
function download(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
function download() {
  download(JSON.stringify(movis), "yourJsonFile.html", "text/plain");
}
const key = "8e28548e74de121e46ea27a347ba233f";
const baseURL = "https://api.themoviedb.org/3/search/movie";
const searchButton = document.querySelector("#search-button");
searchButton.addEventListener("click", (e) => {
  searchCards.innerHTML = " ";
  cards.innerHTML = " ";
  const q = document.querySelector("#name").value;
  console.log("Searching for ", q);
  fetch(`${baseURL}?api_key=${key}&query=${q}`)
    .then((response) => response.json())
    .then((movies) => {
      console.log(movies);
      movies.results.forEach((movie) => {
        searchCards.innerHTML += ` <div id="info"><section style="background-image: url(https://image.tmdb.org/t/p/w500${movie.poster_path});" id="cardSearch"></section>
      <div id="info1"><h1 id="title">${movie.title}</h1>
      <h2 id="language">language: ${movie.original_language}</h2>
      <p id="overview">${movie.overview}</p>
      <h3 id="release_date">release date: ${movie.release_date}</h3>
      <h2 id="Rating">Rating: (${movie.vote_average})</h2></div></div>`;
      });
    });
});
