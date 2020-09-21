import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class DataInfoView extends AbstractView {
  get template() {
    return `
      <section class="calculator calculator--amount-data" data-controller="calculator">
        <div class="calculator__wrap">
          <h2 class="calculator__title title title--black">nature & volume des données personnelles détenues par le proposant et ses filiales </h2>
          <ul class="calculator__list calculator__list--amount-data">
            <li class="calculator__item calculator__item--number field-numb">
              <input class="field-numb__input" type="number" id="field-numb__1" placeholder="3000">
              <label class="field-numb__label" for="field-numb__1">Nombre d’enregistrements par nature de données</label>
            </li>
            <li class="calculator__item calculator__item--number field-numb">
              <input class="field-numb__input" type="number" id="field-numb__2" placeholder="3000">
              <label class="field-numb__label" for="field-numb__2">Données personnelles y compris données des employés </label>
            </li>
            <li class="calculator__item calculator__item--number field-numb">
              <input class="field-numb__input" type="number" id="field-numb__3" placeholder="500">
              <label class="field-numb__label" for="field-numb__3">Dont Données médicales</label>
            </li>
            <li class="calculator__item calculator__item--number field-numb">
              <input class="field-numb__input" type="number" id="field-numb__4" placeholder="50">
              <label class="field-numb__label" for="field-numb__4">Données de carte de paiment (nombre de transactions bancaires)</label>
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
        <div id="calc-footer"></div>
      </section>
    `;
  }

  bind() {
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
