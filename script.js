"use strict";

import projects from "./projects.json" assert { type: "json" };

const grid = document.querySelector(".portfolio-grid");
grid.innerHTML = "";

projects.forEach(function (mov) {
  const turnToName = function (item) {
    return item
      .split("_")
      .map((ele) => ele[0].toUpperCase() + ele.slice(1))
      .join(" ");
  };

  const name = turnToName(mov);
  const html = `<div class="portfolio-item">
    <a href="projects/${mov}">
      <img src="images/${mov}.jpg" alt="${name}" />
      <h2>${name}</h2>
    </a>
  </div>`;

  grid.insertAdjacentHTML("beforeend", html);
});

console.log();
