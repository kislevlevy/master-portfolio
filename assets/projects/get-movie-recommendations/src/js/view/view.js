'use-strict';

// Class:
export default class View {
  // Render data into the DOM:
  renderToElement(data) {
    this.clearElement();

    data.map((ele) =>
      this.mainElement.insertAdjacentHTML('beforeend', this.htmlMarkupMaker(ele))
    );
  }

  // Clear data from the DOM:
  clearElement() {
    this.mainElement.innerHTML = '';
  }

  // Render spinner into the DOM:
  rederSpinner() {
    this.clearElement();
    this.mainElement.innerHTML = `
    <span style="font-size: 48px" class="spin">
      <i class="fa-solid fa-spinner"></i>
    </span>
    `;
  }

  // Render message into the DOM:
  renderMessage(msg) {
    this.clearElement();
    this.mainElement.innerHTML = `
    <span class="error-msg col-11 col-sm-8 col-md-6">${msg}</span>`;
  }

  // On the end of animation function:
  animateEl = function (ele, classAnimate, classRestore) {
    // Ending of annimation function:
    const ending = () => {
      //Remove and restore class on the element:
      ele.classList.remove(classAnimate);
      classRestore && ele.classList.add(classRestore);

      // Remove the animation end event listner:
      ele.removeEventListener('animationend', ending);
    };

    // Listen to ending of annimation:
    ele.addEventListener('animationend', ending);

    // Add CSS animation class:
    ele.classList.add(classAnimate);
  };
}
