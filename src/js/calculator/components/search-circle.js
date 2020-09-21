import SearchCircleView from '../view/search-circle';
import Router from '../application.js';

export default class SearchCircleScreen {
  constructor() {
    this.view = new SearchCircleView();

    setTimeout(() => {
      Router.showTariff()
    }, 2000)
  }

  get element() {
    return this.view.element;
  }
}
