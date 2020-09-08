import changeBurger from "%modules%/burger/burger";
import {showMenu, editWidthMenu} from "%modules%/menu/menu";

const items = document.querySelectorAll(`.menu__item`);

editWidthMenu(items);
changeBurger(showMenu);
