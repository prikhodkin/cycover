import DataInfoMoreView from '../view/data-info-more';
import Router from '../application.js';

export default class DataInfoMoreScreen {
  constructor() {
    this.view = new DataInfoMoreView();
    this.view.onClickNext = () => {
      Router.showSearchCircle();
    };
    this.view.onClickBack = () => {
      Router.showDataInfo();
    }
  }

  get element() {
    return this.view.element;
  }
}
