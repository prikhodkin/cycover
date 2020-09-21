import { Controller } from "stimulus";
import Router from "../calculator/application";

export default class extends Controller {
  static targets = [ `link` ]

  initialize() {}

  showCalc(e) {
    e.preventDefault();
    const calc = document.querySelector(`#calculator`);
    const overlay = document.querySelector(`.overlay`);

    calc.classList.toggle(`calculator__main-box--active`);
    overlay.classList.toggle(`overlay--active`)

    Router.initial();
  }

  closeCalc(e) {
    const calc = document.querySelector(`#calculator`);
    const overlay = document.querySelector(`.overlay`);



    calc.classList.toggle(`calculator__main-box--active`);
    overlay.classList.toggle(`overlay--active`)

  }
}
