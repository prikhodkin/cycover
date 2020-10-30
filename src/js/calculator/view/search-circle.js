import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class searchCircleView extends AbstractView {
  get template() {
    return `
      <section class="calculator calculator--circle" data-controller="calculator">
        <div class="calculator__wrap calculator__wrap--circle">
          <div class="calculator__icon circle-c">
            <img src="../img/256_circ-8.png">
          </div>
          <p class="calculator__desc">Nous cherchons les meilleurs propositions...</p>
        </div>
        <div id="calc-footer"></div>
      </section>
    `;
  }

}

