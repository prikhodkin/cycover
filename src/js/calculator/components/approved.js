import ApprovedView from '../view/approved';
import FooterScreen from './footer'

export default class ApprovedScreen {
  constructor() {
    this.view = new ApprovedView();
  }

  get element() {
    return this.view.element;
  }
}
