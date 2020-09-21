import AssuranceView from '../view/cyber-assurance';
import Router from '../application.js';
import {garanties} from '../../util/calc';
import FooterScreen from './footer'

export default class AssuranceScreen {
  constructor(state) {
    this._state = state;
    console.log(this._state)
    this.view = new AssuranceView();
    this.view.onClickNext = () => {
      Router.showDataInfo(this._state);
    };
    this.view.onClickBack = () => {
      Router.initial(this._state);
    }
    this.view.onChangeSelect = (e) => {
      // сбрасываем состояние selected у всех options
      garanties.forEach(it => it.selected = false)

      const option =  e.target.options[e.target.selectedIndex].value

      const elem = garanties.find(it => {
        // Добавляем selected выбранному option
        if (it.value == option) {
          it.selected = true;
        }
       return it.value == option
      })

      this.updateState(elem)
    }
  }

  get element() {
    const element = this.view.element;
    const footerWrap = element.querySelector(`#calc-footer`)
    footerWrap.appendChild(new FooterScreen(this._state).element)
    return element
  }

  updateState(garant) {
    this._state = Object.assign({}, this._state, {
      garantie : garant
    })
  }
}
