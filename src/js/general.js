import changeBurger from "%modules%/burger/burger";
import {showMenu, editWidthMenu} from "%modules%/menu/menu";

const items = document.querySelectorAll(`.menu__item`);
const itemsFooter = document.querySelectorAll(`.footer__item`);

if(window.matchMedia("(min-width: 1280px)").matches) {
  editWidthMenu(items)
  editWidthMenu(itemsFooter)
}

changeBurger(showMenu);
