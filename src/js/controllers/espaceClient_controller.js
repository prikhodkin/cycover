import { Controller } from "stimulus";
import IMask from 'imask';
import ajax from '../util/ajaxSend'

const popup = document.querySelector(`.modal-registration__main-box`);
const thanks = document.querySelector(`.modal-registration__main-box--thanks`);
const overlay = document.querySelector(`.overlay`);

export default class extends Controller {

  static targets = [ `form`,`link`, `closeThanks` ]

  escPressHandler = (e) => {
    if(e.keyCode && e.keyCode === 27) {
      this.close()
    }
  }

  close = () => {
    popup.classList.remove(`modal-registration__main-box--active`);
    thanks.classList.remove(`modal-registration__main-box--active`);
    overlay.classList.remove(`overlay--active`);

    document.removeEventListener(`keydown`, this.escPressHandler)
  }

  initialize() {}

  showPopup(e){
    e.preventDefault();
    this.checkPhone();
    const scrollY = window.pageYOffset;

    popup.style.top = scrollY + document.documentElement.clientHeight / 2 - 250 + "px"
    popup.classList.toggle(`modal-registration__main-box--active`);
    overlay.classList.toggle(`overlay--active`)

    document.addEventListener(`keydown`, this.escPressHandler)
  }

  closePopup(e) {
    e.preventDefault();
    this.close()
  }

  makeRequest(e) {
    e.preventDefault();
    this.sendAjax();
  }

  sendAjax() {
    const form = this.formTarget;
    const formData = new FormData(form)
    const postURL = `vendor/mail.php`;

    ajax(postURL, `post`, formData)
      .then(() => {
        this.showThanks();
        form.reset();
      })
  }

  checkPhone() {
    const phone = document.querySelector(`input[type="tel"]`);
    const phoneOption = {
      mask: '+{33} (0) 00-00-00-00'
    }

    IMask(phone, phoneOption)
  }

  showThanks() {
    thanks.classList.add(`calculator__approver--show`);
    popup.classList.remove(`modal-registration__main-box--active`);
    overlay.classList.add(`overlay--active`)
    const scrollY = window.pageYOffset;

    thanks.style.top = scrollY + document.documentElement.clientHeight / 2 - 250 + "px"
    thanks.classList.toggle(`modal-registration__main-box--active`);

    window.timeID  = setTimeout(() =>{
      this.closeThanks();
    },4000)
  }

  closeThanks() {
    thanks.classList.add(`calculator__approver--close`);
    setTimeout(() => {
      thanks.classList.remove(`modal-registration__main-box--active`);
      thanks.classList.remove(`calculator__approver--show`);
      thanks.classList.remove(`calculator__approver--close`);
      overlay.classList.remove(`overlay--active`);
      clearTimeout(window.timeID)
    }, 300)
  }
}
