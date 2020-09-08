import {$} from "../../js/util/index";

const burger = $(`.burger`);

const changeBurger = (callback) => {
  burger.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    const inner = burger.querySelector(`.burger__inner`);
    inner.classList.toggle(`burger__inner--active`);
    callback();
  })
}

export default changeBurger;
