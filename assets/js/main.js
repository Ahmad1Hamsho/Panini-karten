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
  const movis = [new Movie(name, profits, views, photo)];
  movis.forEach((e) => {
    e.display();
  });
  let json = JSON.stringify(movis);
  area.value += json;
  console.log(json);
}
/* let movis = [new Movie(name, profits, views, photo)];
function download(content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
} */

/* function onDownload() {
  download(JSON.stringify(movis), "yourfile.json", "text/plain");
}
function imp() {
  movis = JSON.parse(area.value);
  movis.forEach((e) => {
    e.display();
  });
} */
