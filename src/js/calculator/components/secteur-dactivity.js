import SecteurView from '../view/secteur-dactivity.js';
import Router from '../application.js';
import FooterScreen from './footer';
import SimpleBar from "simplebar";

export default class SecteurScreen {
  constructor(state) {
    this._state = state;
    this.view = new SecteurView(this._state);
    this.view.onClickNext = () => {
      this._updateState(this.view.element)
      Router.showDataInfo(this._state);
    };
    this.view.onClickBack = () => {
      Router.showAssuranse(this._state);
    }
    this._initSimpleBar();
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

  _initSimpleBar() {
    const element = this.view.element.querySelector(`#secture-bar`);
    console.log(element)
    new SimpleBar(element, {
      scrollbarMaxSize: 70,
      classNames: {
        // defaults
        scrollContent: 'calculator__secture-scrollbar-content',
        scrollbar: 'calculator__secture-scrollbar',
        track: 'calculator__secture-scrollbar-track'
      }
    })
  }
}
