import TariffView from '../view/tariff';
import Router from '../application.js';

export default class TariffScreen {
  constructor() {
    this.view = new TariffView();
    this.view.onClickNext = () => {
      Router.showPersonalData();
    };
    // this.view.onClickBack = () => {
    //   Router.showDataInfoMore();
    // }
  }

  get element() {
    return this.view.element;
  }
}
