import DataInfoView from '../view/data-info';
import Router from '../application.js';
import FooterScreen from './footer'

export default class DataInfoScreen {
  constructor(state) {
    this._state = state;
console.log(this._state)
    this.view = new DataInfoView(this._state);
    this.view.onClickNext = () => {
      this._updateState(this.view.element)
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

  get state() {
    return this._state;
  }

  _updateState(element) {
    const inputs = element.querySelectorAll(`input`)
    inputs.forEach(it => {
      this._state = Object.assign({}, this._state, {
        [it.name]: it.value
      })
    });
  }
}
