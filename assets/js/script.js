'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle('active');
};

// sidebar variables
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener('click', function () {
  elementToggleFunc(sidebar);
});

// Project insert in portfolio tab
const response = await fetch(`./assets/JSON/projects.json`);
const projects = await response.json();
const grid = document.querySelector('.project-list');
grid.innerHTML = '';

// Skill render function
const skillRender = (skills) => {
  const skillProcessed = skills.map((skill) => {
    return `<li class="skill-item">${skill}</li>`;
  });
  return `
  <ul class="skill-block" >
    ${skillProcessed.toString().replaceAll(',', ' ')}
  </ul>
  `;
};

projects.forEach(function (mov) {
  const slug = slugify(mov.name);

  const html = `
  <li class="project-item active">
    <a href="https://github.com/kislevlevy/${slug}" target="_blank">
      <figure class="project-img">
        <div class="project-item-icon-box">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
  
        <img
          src="./assets/images/projects/${slug}.png"
          alt="${mov.name}"
          loading="lazy"
        />
      </figure>
  
      <h3 class="project-title">${mov.name}</h3>
  
      <p class="project-category">${mov.desc}</p>
    </a>
    ${skillRender(mov.skills)}
  </li>
  `;

  grid.insertAdjacentHTML('afterbegin', html);
});

// Helper functions:

// Slugify - convert string to slug
const slugify = (str) => str.toLowerCase().replace(/ /g, '-');
