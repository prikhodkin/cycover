import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class DataInfoMoreView extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
  }

  get template() {
    return `
      <section class="calculator calculator--amount-data-next" data-controller="calculator">
        <div class="calculator__wrap">
          <h2 class="calculator__title title title--black">Activité en ligne</h2>
          <ul class="calculator__list calculator__list--amount-data-next">


            <li class="calculator__item calculator__item--radio">
              <p class="calculator__field-text">Réalisez-vous plus de 25 % de votre chiffre d'affaires en ligne ?</p>
              <div class="calculator__container">
                <div class="calculator__box calculator__box--radio radio-calc">
                  <input class="radio-calc__input" type="radio" name="25 en ligne" value="yes" id="radio-yes-1">
                  <label class="radio-calc__label" for="radio-yes-1">Oui</label>
                </div>
                <div class="calculator__box calculator__box--radio radio-calc">
                  <input class="radio-calc__input" type="radio" name="25 en ligne" value="not" id="radio-not-1" checked>
                  <label class="radio-calc__label" for="radio-not-1">Non</label>
                </div>
              </div>
            </li>
            <li class="calculator__item calculator__item--radio">
              <p class="calculator__field-text">Réalisez vous plus de 25% de vos chiffres d’affaires via des paiements par carte bancaire ?</p>
              <div class="calculator__container">
                <div class="calculator__box calculator__box--radio radio-calc">
                  <input class="radio-calc__input" type="radio" name="25 cartes bancaires" value="yes" id="radio-yes-2">
                  <label class="radio-calc__label" for="radio-yes-2">Oui</label>
                </div>
                <div class="calculator__box calculator__box--radio radio-calc">
                  <input class="radio-calc__input" type="radio" name="25 cartes bancaires" value="not" id="radio-not-2" checked>
                  <label class="radio-calc__label" for="radio-not-2">Non</label>
                </div>
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
