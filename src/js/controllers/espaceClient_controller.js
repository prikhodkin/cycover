import { Controller } from "stimulus";
import IMask from 'imask';
import ajax from '../util/ajaxSend'

const popup = document.querySelector(`.modal-registration__main-box`);
const overlay = document.querySelector(`.overlay`);
const covid = document.querySelector(`.modal--covid`);

export default class extends Controller {

  static targets = [ `form`,`link` ]

  escPressHandler = (e) => {
    if(e.keyCode && e.keyCode === 27) {
      this.close()
    }
  }

  close = () => {
    popup.classList.remove(`modal-registration__main-box--active`);
    covid.classList.remove(`modal-registration__main-box--active`);
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
    this.sendAjax()
  }

  sendAjax() {
    const form = this.formTarget;
    const formData = new FormData(form)
    const postURL = `vendor/mail.php`;

    ajax(postURL, `post`, formData)
      .then(() => {
        this.close()
        form.reset();
      })
  }

  checkPhone() {
    const phone = document.querySelector(`#form-number`);
    const phoneOption = {
      mask: '+{7} (000) 000-00-00'
    }

    IMask(phone, phoneOption)
  }
}
