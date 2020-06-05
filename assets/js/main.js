function add() {
  const name = document.getElementById("name").value;
  const profits = document.getElementById("profits").value;
  const views = document.getElementById("views").value;
  const photo = document.getElementById("photo").value;
  const cards = document.getElementById("cards");
  cards.innerHTML += ` <section style="background-image: url(${photo});" id="card">
      <div id="name1">${name}</div>
      <div id="profits1">${profits}</div>
      <div id="views1">${views}</div>
    </section>`;
  class Movie {
    constructor(namE, profitS, viewS, photO) {
      this.namE = namE;
      this.profitS = profitS;
      this.viewS = viewS;
      this.photO = photO;
    }
  }
  let movis = [new Movie(name, profits, views, photo)];
  let json = JSON.stringify(movis);

  console.log(movis);
  console.log(json);
}
