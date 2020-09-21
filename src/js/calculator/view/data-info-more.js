import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class DataInfoMoreView extends AbstractView {
  get template() {
    return `
      <section class="calculator calculator--amount-data-next" data-controller="calculator">
        <div class="calculator__wrap">
          <h2 class="calculator__title title title--black">nature & volume des données personnelles détenues par le proposant et ses filiales </h2>
          <ul class="calculator__list calculator__list--amount-data-next">
            <li class="calculator__item calculator__item--number field-numb">
              <input class="field-numb__input" type="number" id="field-numb__5" placeholder="0">
              <label class="field-numb__label" for="field-numb__5">Données gouvernementales classées confidentielles</label>
            </li>

            <li class="calculator__item calculator__item--radio">
              <p class="calculator__field-text">Réalisez-vous plus de 25 % de votre chiffre d'affaires en ligne ?</p>
              <div class="calculator__container">
                <div class="calculator__box calculator__box--radio radio-calc">
                  <input class="radio-calc__input" type="radio" name="radio-calc__1" value="yes-1" id="radio-yes-1">
                  <label class="radio-calc__label" for="radio-yes-1">Oui</label>
                </div>
                <div class="calculator__box calculator__box--radio radio-calc">
                  <input class="radio-calc__input" type="radio" name="radio-calc__1" value="not-1" id="radio-not-1">
                  <label class="radio-calc__label" for="radio-not-1">Non</label>
                </div>
              </div>
            </li>
            <li class="calculator__item calculator__item--radio">
              <p class="calculator__field-text">Réalisez-vous plus de 25 % de votre chiffre d'affaires par des paiements par cartes bancaires ?</p>
              <div class="calculator__container">
                <div class="calculator__box calculator__box--radio radio-calc">
                  <input class="radio-calc__input" type="radio" name="radio-calc__1" value="yes-1" id="radio-yes-2">
                  <label class="radio-calc__label" for="radio-yes-2">Oui</label>
                </div>
                <div class="calculator__box calculator__box--radio radio-calc">
                  <input class="radio-calc__input" type="radio" name="radio-calc__1" value="not-1" id="radio-not-2">
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
