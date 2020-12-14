import ApprovedView from '../view/approved';
import FooterScreen from './footer'

export default class ApprovedScreen {
  constructor() {
    this._showAnimation();
    this.view = new ApprovedView();

    //Автозакрытие окна
    this.timeID = setTimeout(this._closePage, 4000);
  }

  get element() {
    return this.view.element;
  }

  _closePage() {
    const calc = document.querySelector(`#calculator`);
    const overlay = document.querySelector(`.overlay`);

    //Добавляем анимацию закрытия
    calc.classList.add(`calculator__approver--close`)

    setTimeout(() => {
      calc.classList.remove(`calculator__main-box--active`);
      calc.classList.remove(`calculator__approver--show`);
      calc.classList.remove(`calculator__approver--close`)

      overlay.classList.remove(`overlay--active`)
      calc.innerHTML = ``;
      clearTimeout(this.timeID)
    }, 300)
  }

  _showAnimation() {
    const calc = document.querySelector(`#calculator`);
    calc.classList.add(`calculator__approver--show`);
  }
}
