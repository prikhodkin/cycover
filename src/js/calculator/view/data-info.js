import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class DataInfoView extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
  }

  get template() {
    return `
      <section class="calculator calculator--amount-data" data-controller="calculator">
        <div class="calculator__wrap">
          <h2 class="calculator__title title title--black">Volume des données personnelles traitées</h2>
          <ul class="calculator__list calculator__list--amount-data">

            <li class="calculator__item calculator__item--number field-numb">
              <input class="field-numb__input" type="number" id="field-numb__2" placeholder="0" name="Données personnelles" value="${this._state['Données personnelles'] ?? ''}">
              <label class="field-numb__label" for="field-numb__2">Nombre de données personnelles traitées (y compris celles des salariés)</label>
            </li>
            <li class="calculator__item calculator__item--number field-numb">
              <input class="field-numb__input" type="number" id="field-numb__3" placeholder="0" name="Données médicales" value="${this._state['Données médicales'] ?? ''}">
              <label class="field-numb__label" for="field-numb__3">Dont données médicales</label>
            </li>
            <li class="calculator__item calculator__item--number field-numb">
              <input class="field-numb__input" type="number" id="field-numb__4" placeholder="0" name="Données de carte de paiment" value="${this._state['Données de carte de paiment'] ?? ''}">
              <label class="field-numb__label" for="field-numb__4">Nombre de paiement par carte bancaire</label>
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

    next.addEventListener(`click`, (e) => {
      e.preventDefault()
      this.onClickNext();
    });

    back.addEventListener(`click`, (e) => {
      e.preventDefault()
      this.onClickBack();
    })
  }

  onClickNext() {};
  onClickBack() {};
}
