import VotreView from '../view/votre.js';
import Router from '../application.js';
import FooterScreen from './footer'

export default class VotreScreen {
  constructor(state) {
    this._state = state;
    this.view = new VotreView();
    this.view.onClickNext = (e) => {
      this._updateState(e)
      Router.showAssuranse(this._state);
    };
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

  _updateState(target) {
    this._state = Object.assign({}, this._state, {
      type: target.target.innerHTML
    })
  }
}
