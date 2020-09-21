import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class searchCircleView extends AbstractView {
  get template() {
    return `
      <section class="calculator calculator--circle" data-controller="calculator">
        <div class="calculator__wrap calculator__wrap--circle">
          <div class="calculator__icon circle-c">
            <svg class="circle-c__img calculator__image">
              <use xlink:href="img/sprites/sprite.svg#icon__calc-circle"></use>
            </svg>
          </div>
          <p class="calculator__desc">Nous cherchons les meilleurs propositions...</p>
        </div>
        ${footerTemplate}
      </section>
    `;
  }

}
