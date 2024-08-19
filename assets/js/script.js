"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

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

  grid.insertAdjacentHTML("beforeend", html);
});
