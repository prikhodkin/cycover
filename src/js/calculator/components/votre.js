import VotreView from '../view/votre.js';
import Router from '../application.js';

export default class VotreScreen {
  constructor() {
    this.view = new VotreView();
    this.view.onClickNext = () => {
      Router.showAssuranse();
    };
  }

  get element() {
    return this.view.element;
  }
}
