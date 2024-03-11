"use strict";

// import projects from "./projects.json" with { type: "json" };

const response = await fetch("./projects.json");
const projects = await response.json();

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
  const html = `
  <div class="portfolio-item">
    <a href="projects/${mov}">
      <img src="images/${mov}.jpg" alt="${name}" />
      <h2>${name}</h2>
    </a>
  </div>
  `;

  grid.insertAdjacentHTML("beforeend", html);
});

const noCache = document.querySelectorAll(".NO-CACHE");
for (let i = 0; i < noCache.length; i++) {
  const randomNum = Math.trunc(Math.random() * 100);
  const src = noCache[i].attributes["src"];
  const href = noCache[i].attributes["href"];

  if (src !== undefined) {
    src.value += `?${randomNum}`;
  } else if (href !== undefined) {
    href.value += `?${randomNum}`;
  }
}
