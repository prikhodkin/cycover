import FooterView from '../view/footer';
import {state, INITIAL_STATE, garanties} from '../../util/calc'

const reset = () => {
  garanties.forEach(it => {
    it.selected = false
  })
  state.type = INITIAL_STATE.type;
  state.garantie = INITIAL_STATE.garantie
}

export default class FooterScreen {
  constructor() {
    this.view = new FooterView();
    this.view.close = () => {
      reset()
    }

  }

  get element() {
    return this.view.element;
  }
}
