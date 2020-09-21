import SearchCircleView from '../view/search-circle';
import Router from '../application.js';
import FooterScreen from './footer'

export default class SearchCircleScreen {
  constructor(state) {
    this._state = state;

    this.view = new SearchCircleView();

    setTimeout(() => {
      Router.showTariff(this._state)
    }, 2000)
  }

  get element() {
    const element = this.view.element;
    const footerWrap = element.querySelector(`#calc-footer`)
    footerWrap.appendChild(new FooterScreen(this._state).element)
    return element
  }
}
