import { Controller } from "stimulus";

export default class extends Controller {

  connect() {
    document.addEventListener(`scroll`, () => {
      this.init();
    })
  }

  init() {
    if (this.element.getBoundingClientRect().top <= 100) {
      this.element.classList.add(`guide--active`);
    } else {
      this.element.classList.remove(`guide--active`);
    }
  }

}
