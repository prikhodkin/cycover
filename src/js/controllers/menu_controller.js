import { Controller } from "stimulus";
import {UNIT, ADD_WIDTH} from "../../js/util";

export default class extends Controller {
  static targets = [ "item", "trigger" ]

  connect() {
    if(window.matchMedia("(min-width: 1280px)").matches) {
      this.itemTargets.forEach((item) => {
        this.changeWidth(item);
      })
    }
  }

  changeBurger() {
    const inner = this.triggerTarget.querySelector(`.burger__inner`);
    inner.classList.toggle(`burger__inner--active`);
  }

  showMenu(evt) {
    evt.preventDefault();
    this.changeBurger();
    const header = document.querySelector(`.header`);
    const menu = document.querySelector(`.header__menu`);
    header.classList.toggle(`header--active`);
    menu.classList.toggle(`header__menu--active`);
  }

  changeWidth(item) {
    item.style.width = item.offsetWidth + ADD_WIDTH + UNIT;
  }
}
