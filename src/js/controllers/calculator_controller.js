import { Controller } from "stimulus";
import Router from "../calculator/application";

const calc = document.querySelector(`#calculator`);
const overlay = document.querySelector(`.overlay`);

export default class extends Controller {
  static targets = [ `link` ]

  escPressHandler = (e) => {
    if(e.keyCode && e.keyCode === 27) {
      this.close()
    }
  }

  close = () => {
    //Добавляем анимацию закрытия
    calc.classList.add(`calculator__approver--close`)


    setTimeout(() => {
      calc.classList.remove(`calculator__main-box--active`);
      calc.classList.remove(`calculator__approver--show`);
      calc.classList.remove(`calculator__approver--close`)

      overlay.classList.remove(`overlay--active`)
      calc.innerHTML = ``;
    }, 300)

    document.removeEventListener(`keydown`, this.escPressHandler)
  }

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

    document.addEventListener(`keydown`, this.escPressHandler)
  }

  closeCalc() {
    this.close()
  }
}
