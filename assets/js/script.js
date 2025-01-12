"use strict";

// Project insert in portfolio tab
const response = await fetch(`./assets/JSON/projects.json`);
const projects = await response.json();
const grid = document.querySelector(".project-list");
grid.innerHTML = "";

projects.forEach(function (mov) {
  const linkUrl = mov.link || `./assets/projects/${mov.mov}/index.html`;

  const skillRender = (skills) => {
    const skillProcessed = skills.map((skill) => {
      return `<li class="skill-item">${skill}</li>`;
    });
    return `
    <ul class="skill-block" >
      ${skillProcessed.toString().replaceAll(",", " ")}
    </ul>
    `;
  };

  const html = `
  <li class="project-item active">
    <a href="${linkUrl}" target="_blank">
      <figure class="project-img">
        <div class="project-item-icon-box">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
  
        <img
          src="./assets/images/projects/${mov.mov}.png"
          alt="${mov.name}"
          loading="lazy"
        />
      </figure>
  
      <h3 class="project-title">${mov.name}</h3>
  
      <p class="project-category">${mov.type}</p>
    </a>
    ${skillRender(mov.skills)}
  </li>
  `;

  grid.insertAdjacentHTML("afterbegin", html);
});
