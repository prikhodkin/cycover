import AssuranceView from '../view/cyber-assurance';
import Router from '../application.js';
import {garanties} from '../../util/calc';
import FooterScreen from './footer';

const selects = {
  'revenue': 'select-revenue',
  'effectif': 'select-effectif'
}

export default class AssuranceScreen {
  constructor(state) {
    this._state = state;
    this.view = new AssuranceView();
    this.view.onClickNext = () => {
       // ЭТИ СЕЛЕКТЫ ПРОПИСАНЫ В HTML, ЗНАЧЕНИЯ ВЗЯТЫ ИЗ РАЗМЕТКИ
       this._checkSelects(selects.revenue)
       this._checkSelects(selects.effectif)
       //

      Router.showSecteur(this._state);
    };
    this.view.onClickBack = () => {
      Router.initial(this._state);
    }
    this.view.onChangeSelect = (e) => {
      // сбрасываем состояние selected у всех options
      garanties.forEach(it => it.selected = false)

      const option =  e.target.options[e.target.selectedIndex].value

      // ЗНАЧЕНИЯ ДЛЯ ЭТОГО СЕЛЕКТА БЕРУТСЯ ИЗ ВНЕШНЕГО ФАЙЛА, РАЗМЕТКА ЗАПОЛНЯЕТСЯ ИЗ JS
      const elem = garanties.find(it => {
        // Добавляем selected выбранному option
        if (it.value == option) {
          it.selected = true;
        }
       return it.value == option
      })

      this._updateState(elem)
      //
    }
  }
  //ОСТАВИЛ 2 ВАРИАНТА С СЕЛЕКТАМИ, ПОСКОЛЬКУ НЕТ ИНФОРМАЦИИ КАК ЭТО ВСЕ БУДЕТ ЗАПОЛНЯТЬСЯ"

  get element() {
    const element = this.view.element;
    const footerWrap = element.querySelector(`#calc-footer`)
    footerWrap.appendChild(new FooterScreen(this._state).element)
    return element
  }

  _updateState(garant) {
    this._state = Object.assign({}, this._state, {
      garantie : garant
    })
  }

  _checkSelects(selectID) {
    const select = this.view.element.querySelector(`#${selectID}`)
    this._state = Object.assign({}, this._state, {
      [selectID]: select.options[select.selectedIndex].value
    })
  }
}
