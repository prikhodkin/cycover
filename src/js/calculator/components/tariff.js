import TariffView from '../view/tariff';
import Router from '../application.js';
import FooterScreen from './footer'

export default class TariffScreen {
  constructor(state) {
    this._state = state;

    this.view = new TariffView(this._state);
    this.view.onClickNext = (it) => {
      this._updateState(it)
      Router.showPersonalData(this._state);
    };
  }

  get element() {
    const element = this.view.element;
    const footerWrap = element.querySelector(`#calc-footer`)
    footerWrap.appendChild(new FooterScreen(this._state).element)
    return element
  }

  _updateState(element) {
    const key = element.getAttribute(`data-name`);
    const value = element.getAttribute(`data-price`);

    this._state = Object.assign({}, this._state, {
      [key]: value
    })
  }
}
