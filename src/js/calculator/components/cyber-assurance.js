import AssuranceView from '../view/cyber-assurance';
import Router from '../application.js';

export default class AssuranceScreen {
  constructor() {
    this.view = new AssuranceView();
    this.view.onClickNext = () => {
      Router.showDataInfo();
    };
    this.view.onClickBack = () => {
      Router.initial();
    }
  }

  get element() {
    return this.view.element;
  }
}
