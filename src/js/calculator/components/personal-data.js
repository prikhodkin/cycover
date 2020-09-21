import PersonalDataView from '../view/personal-data';
import Router from '../application.js';

export default class PersonalDataScreen {
  constructor() {
    this.view = new PersonalDataView();
    this.view.onClickNext = () => {
      Router.showApproved();
    };
  }

  get element() {
    return this.view.element;
  }
}
