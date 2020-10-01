import { Controller } from "stimulus";

export default class extends Controller {

  connect() {
    document.addEventListener(`scroll`, () => {
      this.init();
    })
  }

  init() {
    if (this.element.getBoundingClientRect().top <= 0) {
      this.element.classList.add(`insurance-advantage--active`);
    } else {
      this.element.classList.remove(`insurance-advantage--active`);
    }
  }

}
