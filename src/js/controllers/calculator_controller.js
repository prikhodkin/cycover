import { Controller } from "stimulus";
import Router from "../calculator/application";

export default class extends Controller {
  static targets = [ `link` ]

  initialize() {}

  showCalc(e) {
    e.preventDefault();
    const calc = document.querySelector(`#calculator`);
    const overlay = document.querySelector(`.overlay`);
    const scrollY = window.pageYOffset;


    calc.classList.toggle(`calculator__main-box--active`);
    calc.style.top = scrollY + 100 + 'px';
    overlay.classList.toggle(`overlay--active`)

    if(window.matchMedia(`(max-width: 1280px)`).matches) {
      calc.style.top = scrollY + 60 + 'px';
    }

    Router.initial();
  }

  closeCalc(e) {
    const calc = document.querySelector(`#calculator`);
    const overlay = document.querySelector(`.overlay`);



    calc.classList.toggle(`calculator__main-box--active`);
    overlay.classList.toggle(`overlay--active`)

  }
}
