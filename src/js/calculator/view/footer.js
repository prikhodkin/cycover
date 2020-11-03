import AbstractView from '../abstract-view.js';

export default class Footer extends AbstractView {
  get template() {
    return `
      <div class="calculator__footer partner">
        <p class="partner__title calculator__name-partner">Nos partenaires</p>
        <ul class="partner__list calculator__list--partner">
          <li class="partner__item calculator__item calculator__item--partner">
            <img class="partner__img calculator__img" src="./img/f1.jpg" alt="">
          </li>
          <li class="partner__item calculator__item calculator__item--partner">
            <img class="partner__img calculator__img" src="./img/f2.png" alt="">
          </li>
          <li class="partner__item calculator__item calculator__item--partner">
            <img class="partner__img calculator__img" src="./img/f3.png" alt="">
          </li>
          <li class="partner__item calculator__item calculator__item--partner">
            <img class="partner__img calculator__img" src="./img/f4.svg" alt="">
          </li>
          <li class="partner__item calculator__item calculator__item--partner">
            <img class="partner__img calculator__img" src="./img/f5.jpg" alt="">
          </li>
          <li class="partner__item calculator__item calculator__item--partner calculator__item--partner-6">
            <img class="partner__img calculator__img" src="./img/partner__img-1.png" alt="">
          </li>
        </ul>
      </div>
      <button class="calculator__button-close button-close" style="cursor: pointer;" data-target="calculator.link" data-action="click->calculator#closeCalc">
        <span class="visually-hidden">close</span>
        <svg class="button-close__icon" style="pointer-events: none;">
          <use xlink:href="img/sprites/sprite.svg#icon__close"></use>
        </svg>
      </button>
      `;
  }

  bind() {
    const closeBtn = this.element.querySelector(`.calculator__button-close`)

    closeBtn.addEventListener(`click`, () => {
      this.close()
    })
  }

  close() {}
}
