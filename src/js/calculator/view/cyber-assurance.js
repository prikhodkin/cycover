import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class AssuranceView extends AbstractView {
  get template() {
    return `
      <section class="calculator" data-controller="calculator">
        <div class="calculator__wrap">
          <h2 class="calculator__title title title--black">Votre cyber assurance en ligne </h2>
          <ul class="calculator__list calculator__list--select">
            <li class="calculator__item calculator__item--select select">
              <p class="select__name">Chiffre d’affaires consolidé HT</p>
              <div class="select__box select__box--active">
                <select class="select__list" name="select-list" id="select-revenue">
                  <option class="select__item" value="revenue-1">130 000</option>
                  <option class="select__item" value="revenue-2">30 000</option>
                  <option class="select__item" value="revenue-3">10 000</option>
                </select>
              </div>
            </li>
            <li class="calculator__item calculator__item--select select">
              <p class="select__name">Montant de la garantie souhaité</p>
              <div class="select__box">
                <select class="select__list" name="garantie-list" id="select-garantie">
                  <option class="select__item" value="garantie-1">100 000</option>
                  <option class="select__item" value="garantie-2">40 000</option>
                  <option class="select__item" value="garantie-3">20 000</option>
                </select>
              </div>
            </li>
            <li class="calculator__item calculator__item--select select">
              <p class="select__name">Effectif</p>
              <div class="select__box">
                <select class="select__list" name="effectif-list" id="select-effectif">
                  <option class="select__item" value="effectif-1">10</option>
                  <option class="select__item" value="effectif-2">5</option>
                  <option class="select__item" value="effectif-3">3</option>
                </select>
              </div>
            </li>
          </ul>
          <div class="calculator__box calculator__box--button">
            <a class="calculator__button calculator__button--back button button--back" href="#">
              <svg class="button__icon">
                <use xlink:href="img/sprites/sprite.svg#icon_arrow-back"></use>
              </svg>
            </a>
            <a class="calculator__button calculator__button--forth button button--forth" href="#">
              Continuer
              <svg class="button__icon button__icon--forth">
                <use xlink:href="img/sprites/sprite.svg#icon_arrow-forward"></use>
              </svg>
            </a>
          </div>
        </div>
        ${footerTemplate}
      </section>
    `;
  }

  bind () {

    const next = this.element.querySelector(`.calculator__button--forth`);
    const back = this.element.querySelector(`.calculator__button--back`);

    next.addEventListener(`click`, () => {
      this.onClickNext();
    });

    back.addEventListener(`click`, () => {
      this.onClickBack();
    })
  }

  onClickNext() {};
  onClickBack() {};
}
