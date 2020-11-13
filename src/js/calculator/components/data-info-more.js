import DataInfoMoreView from '../view/data-info-more';
import Router from '../application.js';
import FooterScreen from './footer'

export default class DataInfoMoreScreen {
  constructor(state) {
    this._state = state;

    this.view = new DataInfoMoreView(this._state);
    this.view.onClickNext = () => {
      this._updateState(this.view.element)
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

  get state() {
    return this._state;
  }

  _updateState(element) {
    const radios = element.querySelectorAll(`input[type="radio"]:checked`)
    // const gouvernInput = element.querySelector(`input[name="Données gouvernementale"]`);

    // this._state = Object.assign({}, this._state, {
    //   [gouvernInput.name]: gouvernInput.value
    // })

    radios.forEach(it => {
      this._state = Object.assign({}, this._state, {
        [it.name]: it.value
      })
    })
  }
}
