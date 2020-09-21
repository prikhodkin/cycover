import DataInfoView from '../view/data-info';
import Router from '../application.js';

export default class DataInfoScreen {
  constructor() {
    this.view = new DataInfoView();
    this.view.onClickNext = () => {
      Router.showDataInfoMore();
    };
    this.view.onClickBack = () => {
      Router.showAssuranse();
    }
  }

  get element() {
    return this.view.element;
  }
}
