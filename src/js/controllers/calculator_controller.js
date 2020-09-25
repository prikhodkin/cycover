import { Controller } from "stimulus";
import Router from "../calculator/application";

const calc = document.querySelector(`#calculator`);
const overlay = document.querySelector(`.overlay`);

const escPressHandler = (e) => {
  if(e.keyCode && e.keyCode === 27) {
    close()
  }
}

const close = () => {
  calc.classList.remove(`calculator__main-box--active`);
  overlay.classList.remove(`overlay--active`)
  calc.innerHTML = ``;

  document.removeEventListener(`keydown`, escPressHandler)
}

export default class extends Controller {
  static targets = [ `link` ]

  initialize() {}

  showCalc(e) {
    e.preventDefault();
    const scrollY = window.pageYOffset;

    calc.classList.toggle(`calculator__main-box--active`);
    calc.style.top = scrollY + 100 + 'px';
    overlay.classList.toggle(`overlay--active`)

    if(window.matchMedia(`(max-width: 1280px)`).matches) {
      calc.style.top = scrollY + 60 + 'px';
    }
    Router.initial();

    document.addEventListener(`keydown`, escPressHandler)
  }

  closeCalc() {
    close()
  }
}
