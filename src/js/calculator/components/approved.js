import ApprovedView from '../view/approved';

export default class ApprovedScreen {
  constructor() {
    this.view = new ApprovedView();
  }

  get element() {
    return this.view.element;
  }
}
