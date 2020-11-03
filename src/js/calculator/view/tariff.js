import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class TariffView extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
    console.log(this._state)
  }
  get template() {
    return `
      <section class="calculator calculator--tariff" data-controller="calculator">
        <ul class="calculator__wrap calculator__wrap--tariff">
          <li class="calculator__item calculator__item--tariff tariff-card tariff-card--calc">
            <p class="tariff-card__name tariff-card__name--calc">de base</p>
            <ul class="tariff-card__list">
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc">Assistance dans la gestion de crise</p>
              </li>
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc">Responsabilité civile</p>
              </li>
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc">Enquêtes et sanctions </p>
              </li>
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc">Perte d’exploitation</p>
              </li>
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc">Cyber-extorsion</p>
              </li>
              <li class="tariff-card__item tariff-card__item--unavailable">
                <div class="tariff-card__icon tariff-card__icon--unavailable">
                  <svg class="tariff-card__img tariff-card__img--cross">
                    <use xlink:href="img/sprites/sprite.svg#icon__cross"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc">Fraude</p>
              </li>

            </ul>
            <div class="calculator__box calculator__box--button">
              <p class="tariff-card__price tariff-card__price--calc">&#8364; ${Math.ceil(this._state.garantie.base/12)} /<span style="text-transform:lowercase;font-size: 14px;">par mois</span></p>
              <a class="calculator__button calculator__button--forth-tariff button button--forth" href="#" data-name="BASE" data-price="${this._state.garantie.base}">
                Continuer
                <svg class="button__icon button__icon--forth">
                  <use xlink:href="img/sprites/sprite.svg#icon_arrow-forward"></use>
                </svg>
              </a>
            </div>
          </li>
          <li class="calculator__item calculator__item--tariff tariff-card tariff-card--prime tariff-card--calc tariff-card--calc-prime">
            <p class="tariff-card__name tariff-card__name--prime tariff-card__name--calc">Prime</p>
            <ul class="tariff-card__list">
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--prime-available tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick tariff-card__img--prime-tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc tariff-card__desc--prime">Assistance dans la gestion de crise</p>
              </li>
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--prime-available tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick tariff-card__img--prime-tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc tariff-card__desc--prime">Responsabilité civile</p>
              </li>
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--prime-available tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick tariff-card__img--prime-tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc tariff-card__desc--prime">Enquêtes et sanctions</p>
              </li>
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--prime-available tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick tariff-card__img--prime-tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc tariff-card__desc--prime">Perte d’exploitation</p>
              </li>
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--prime-available tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick tariff-card__img--prime-tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc tariff-card__desc--prime">Cyber-extorsion</p>
              </li>
              <li class="tariff-card__item tariff-card__item--available">
                <div class="tariff-card__icon tariff-card__icon--prime-available tariff-card__icon--available">
                  <svg class="tariff-card__img tariff-card__img--tick tariff-card__img--prime-tick">
                    <use xlink:href="img/sprites/sprite.svg#icon__tick"></use>
                  </svg>
                </div>
                <p class="tariff-card__desc tariff-card__desc--calc tariff-card__desc--prime">Fraude</p>
              </li>
            </ul>
            <div class="calculator__box calculator__box--button">
              <p class="tariff-card__price tariff-card__price--calc tariff-card__price--calc-prime">&#8364; ${Math.ceil(this._state.garantie.prime/12)} /<span style="text-transform:lowercase;font-size: 14px;">par mois</span></p>
              <a class="calculator__button calculator__button--forth-tariff button button--forth-white" href="#" data-name="PRIME" data-price="${this._state.garantie.prime}">
                Continuer
                <svg class="button__icon">
                  <use xlink:href="img/sprites/sprite.svg#icon_arrow-forward"></use>
                </svg>
              </a>
            </div>
          </li>
        </ul>
        <div id="calc-footer"></div>
      </section>
    `;
  }

  bind() {
    const nexts = this.element.querySelectorAll(`.calculator__button--forth-tariff`);

    nexts.forEach(it => {
      it.addEventListener(`click`, (e) => {
        e.preventDefault();
        this.onClickNext(it);
      });
    })
   }

  onClickNext() {};
}
