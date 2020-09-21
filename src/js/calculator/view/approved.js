import AbstractView from '../abstract-view.js';

export default class ApprovedView extends AbstractView {
  get template() {
    return `
      <section class="calculator calculator--approved" data-controller="calculator">
        <div class="calculator__wrap calculator__wrap--approved">
          <div class="calculator__tick"></div>
          <p class="calculator__desc calculator__desc--approved">Votre demande sera approuver</p>
        </div>
        <button class="calculator__button-close button-close" style="cursor: pointer;" data-target="calculator.link" data-action="click->calculator#closeCalc">
          <span class="visually-hidden">close</span>
          <svg class="button-close__icon" style="pointer-events: none;">
            <use xlink:href="img/sprites/sprite.svg#icon__close"></use>
          </svg>
        </button>
      </section>
    `;
  }
}
