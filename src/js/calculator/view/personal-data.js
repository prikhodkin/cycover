import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class PersonalDataView extends AbstractView {
  get template() {
    return `
      <section class="calculator calculator--personal-data" data-controller="calculator">
        <div class="calculator__wrap calculator__wrap--personal-data">
          <form class="calculator__form form form--calculator" action="#" method="POST">
            <div class="form__wrap form__wrap--calculator">
              <div class="form__box form__box--calculator field field--calculator">
                <input class="field__input field__input--calculator" type="text" id="form-siret" name="siret" placeholder="Siret">
                <label class="field__label field__label--calculator" for="form-siret">
                  <svg class="field__icon field__icon--calculator">
                    <use xlink:href="img/sprites/sprite.svg#icon__identity-card"></use>
                  </svg>
                </label>
              </div>
              <div class="form__box form__box--calculator field field--calculator">
                <input class="field__input field__input--calculator" type="text" id="form-name-calc" name="name-calc" placeholder="Votre nom et prénom">
                <label class="field__label field__label--calculator" for="form-name-calc">
                  <svg class="field__icon field__icon--calculator">
                    <use xlink:href="img/sprites/sprite.svg#icon__user"></use>
                  </svg>
                </label>
              </div>
              <div class="form__box form__box--calculator field field--calculator">
                <input class="field__input field__input--calculator" type="number" id="form-number-calc" name="number-calc" placeholder="Numéro de tel">
                <label class="field__label field__label--calculator" for="form-number-calc">
                  <svg class="field__icon field__icon--calculator">
                    <use xlink:href="img/sprites/sprite.svg#icon__phone"></use>
                  </svg>
                </label>
              </div>
              <div class="form__box form__box--calculator field field--calculator">
                <input class="field__input field__input--calculator" type="email" id="form-email-calc" name="email-calc" placeholder="E-mail">
                <label class="field__label field__label--calculator" for="form-email-calc">
                  <svg class="field__icon field__icon--calculator">
                    <use xlink:href="img/sprites/sprite.svg#icon__at"></use>
                  </svg>
                </label>
              </div>
            </div>

            <button class="calculator__button calculator__button--form-calc button button--forth button--calc-form" type="submit">
              Continuer
              <svg class="button__icon button__icon--forth">
                <use xlink:href="img/sprites/sprite.svg#icon_arrow-forward"></use>
              </svg>
            </button>
          </form>
        </div>
        ${footerTemplate}
      </section>
    `;
  }

  bind() {
    const next = this.element.querySelector(`.button--forth`);

    next.addEventListener(`click`, () => {
      this.onClickNext();
    });

  }

  onClickNext() {};
}