import {UNIT, ADD_WIDTH} from "../../js/util";

const header = document.querySelector(`.header`);
const menu = document.querySelector(`.header__menu`);

const showMenu = () => {
  header.classList.toggle(`header--active`);
  menu.classList.toggle(`header__menu--active`);
};

const editWidthMenu = (items) => {
  items.forEach((item) => {
    item.style.width = item.offsetWidth + ADD_WIDTH + UNIT;
  })
}

const test = () => {
  return {
    editWidth() {
      this.querySelectorAll(``)
    }
  }
}

export {showMenu, editWidthMenu, test };
