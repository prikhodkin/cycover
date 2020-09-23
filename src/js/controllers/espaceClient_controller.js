import { Controller } from "stimulus";
import IMask from 'imask';
import ajax from '../util/ajaxSend'

export default class extends Controller {

  static targets = [ `form`,`link` ]

  initialize() {}

  showPopup(e){
    e.preventDefault();
    this.checkPhone();
    this.toggle();
  }

  closePopup(e) {
    e.preventDefault();
    this.toggle();
  }

  makeRequest(e) {
    e.preventDefault();
    this.sendAjax()
  }

  sendAjax() {
    const overlay = document.querySelector(`.overlay`);
    const form = this.formTarget;
    const formData = new FormData(form)
    const postURL = `vendor/mail.php`;

    ajax(postURL, `post`, formData)
      .then(() => {
        this.element.classList.toggle(`modal-registration__main-box--active`)
        overlay.classList.toggle(`overlay--active`)
        form.reset();
      })
  }

  toggle() {
    const popup = document.querySelector(`.modal-registration__main-box`);
    const overlay = document.querySelector(`.overlay`);
    const scrollY = window.pageYOffset;

    popup.style.top = scrollY + document.documentElement.clientHeight / 2 - 250 + "px"
    popup.classList.toggle(`modal-registration__main-box--active`);
    overlay.classList.toggle(`overlay--active`)
  }

  checkPhone() {
    const phone = document.querySelector(`#form-number`);
    const phoneOption = {
      mask: '+{7} (000) 000-00-00'
    }

    IMask(phone, phoneOption)
  }
}
