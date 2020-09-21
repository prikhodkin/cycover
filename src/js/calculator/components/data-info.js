import DataInfoView from '../view/data-info';
import Router from '../application.js';
import FooterScreen from './footer'

export default class DataInfoScreen {
  constructor(state) {
    this._state = state;

    this.view = new DataInfoView();
    this.view.onClickNext = () => {
      Router.showDataInfoMore(this._state);
    };
    this.view.onClickBack = () => {
      Router.showAssuranse(this._state);
    }
  }

  get element() {
    const element = this.view.element;
    const footerWrap = element.querySelector(`#calc-footer`)
    footerWrap.appendChild(new FooterScreen(this._state).element)
    return element
  }
}
