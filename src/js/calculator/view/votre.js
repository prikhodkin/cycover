import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class VotreView extends AbstractView {

  get template() {
    return `
      <section class="calculator" data-controller="calculator">
        <div class="calculator__wrap">
          <h2 class="calculator__title title title--black">Choisissez votre situation</h2>
          <ul class="calculator__list calculator__list--situation">

            <li class="calculator__item calculator__item--situation situation situation--professional">
              <a class="situation__link situation__link--professional" href="#">Professionnel </a>
            </li>

            <li class="calculator__item calculator__item--situation situation situation--particuller">
              <a class="situation__link situation__link--particuller" href="particulier.html#tarif" data-target="calculator.link" data-action="click->calculator#closeCalc">Particulier </a>
            </li>

          </ul>
        </div>
        <div id="calc-footer"></div>
      </section>
    `;
  }

  bind() {
    const next = this.element.querySelector(`.situation__link--professional`);
    const check = this.element.querySelector(`.situation__link--particuller`);

      next.addEventListener(`click`, (e) => {
        e.preventDefault();
        this.onClickNext(e);
      });

      check.addEventListener(`click`, () => {
        this.onClickCheck();
      })
  }

  onClickNext() {}
  onClickCheck() {}
}
