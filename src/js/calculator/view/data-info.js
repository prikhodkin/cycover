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
          <h2 class="calculator__title calculator__title--territorialite title title--black">Précisez la territorialité de votre entreprise :</h2>
          <ul class="calculator__list calculator__list--amount-data">

            <li class="calculator__item calculator__item--number field-numb">
              <label class="calculator__amount-label">
                <p class="calculator__amount-description">France métropolitain</p>
                <input checked class="calculator__amount-checkbox" type="radio" name="Précisez la territorialité" value="France métropolitain">
                <p class="calculator__check"></p>
              </label>
            </li>
            <li class="calculator__item calculator__item--number field-numb">
              <label class="calculator__amount-label">
                <p class="calculator__amount-description">Pays de l'UE</p>
                <input class="calculator__amount-checkbox" type="radio" name="Précisez la territorialité" value="Pays de l'UE">
                <p class="calculator__check"></p>
              </label>
            </li>
            <li class="calculator__item calculator__item--number field-numb">
              <label class="calculator__amount-label">
                <p class="calculator__amount-description">Pays de l'UE <br> + Suisse, Andorre et Monaco</p>
                <input class="calculator__amount-checkbox" type="radio" name="Précisez la territorialité" value="Pays de l'UE + Suisse, Andorre et Monaco">
                <p class="calculator__check"></p>
              </label>
            </li>
            <li class="calculator__item calculator__item--number field-numb">
              <label class="calculator__amount-label">
                <p class="calculator__amount-description">Monde entier hors <br> USA / Canada</p>
                <input class="calculator__amount-checkbox" type="radio" name="Précisez la territorialité" value="Monde entier hors USA / Canada">
                <p class="calculator__check"></p>
              </label>
            </li>
            <li class="calculator__item calculator__item--number field-numb">
              <label class="calculator__amount-label">
                <p class="calculator__amount-description">Monde entier avec <br> USA / Canada</p>
                <input class="calculator__amount-checkbox" type="radio" name="Précisez la territorialité" value="Monde entier avec USA / Canada">
                <p class="calculator__check"></p>
              </label>
            </li>
          </ul>
          <div class="calculator__box calculator__box--button">
            <a class="calculator__button calculator__button--back button button--back" href="#">
              <svg class="button__icon">
                <use xlink:href="img/sprites/sprite.svg#icon_arrow-back"></use>
              </svg>
            </a>
            <a class="calculator__button calculator__button--forth button button--forth button--background" href="#">
              <span>
                Continuer
                <svg class="button__icon button__icon--forth">
                  <use xlink:href="img/sprites/sprite.svg#icon_arrow-forward"></use>
                </svg>
              </span>
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
