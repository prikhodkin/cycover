import DataInfoMoreView from '../view/data-info-more';
import Router from '../application.js';
import FooterScreen from './footer'

export default class DataInfoMoreScreen {
  constructor(state) {
    this._state = state;

    this.view = new DataInfoMoreView();
    this.view.onClickNext = () => {
      Router.showSearchCircle(this._state);
    };
    this.view.onClickBack = () => {
      Router.showDataInfo(this._state);
    }
  }

  get element() {
    const element = this.view.element;
    const footerWrap = element.querySelector(`#calc-footer`)
    footerWrap.appendChild(new FooterScreen(this._state).element)
    return element
  }
}
