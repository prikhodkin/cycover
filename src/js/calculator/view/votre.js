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
              <a class="situation__link situation__link--professional" href="#">Professional </a>
            </li>
            <li class="calculator__item calculator__item--situation situation situation--particuller">
              <a class="situation__link situation__link--particuller" href="#">Particuller </a>
            </li>
          </ul>
        </div>
        <div id="calc-footer"></div>
      </section>
    `;
  }

  bind() {
    const nexts = this.element.querySelectorAll(`.situation__link`);

    nexts.forEach(it => {
      it.addEventListener(`click`, (e) => {
        this.onClickNext(e);
      });
    })

  }

  onClickNext() {}
}
