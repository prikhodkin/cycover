import PersonalDataView from '../view/personal-data';
import Router from '../application.js';
import FooterScreen from './footer';
import IMask from 'imask';
import ajax from '../../util/ajaxSend'

export default class PersonalDataScreen {
  constructor(state) {
    this._state = state;
    this.inputErrors = 0;

    this.view = new PersonalDataView(this._state);
    this.view.onClickNext = (e) => {
      // e.preventDefault();
      this._checkValid();

      if(this.inputErrors === 0) {
        this._sendAjax()
      }
    };

    this._init()
  }

  get element() {
    const element = this.view.element;
    const footerWrap = element.querySelector(`#calc-footer`)
    footerWrap.appendChild(new FooterScreen(this._state).element)
    return element
  }

  _init() {
    this._checkPhone()
  }

  _sendAjax() {
    const form = this.view.element.querySelector(`.calculator__form`);
    const postURL = `vendor/mail.php`;
    const formData = new FormData(form);

    ajax(postURL, `post`, formData)
      .then(() => {
        form.reset();
        Router.showApproved();
      })
  }

  _checkPhone() {
    const phone = this.view.element.querySelector(`#form-number-calc`)
    const phoneOption = {
      mask: '+{33} (0) 00-00-00-00'
    }
    IMask(phone, phoneOption)
  }

  _checkValid() {
    this.inputErrors = 0;

    const inputs = this.view.element.querySelectorAll(`.field__input`);

    inputs.forEach(it => {
      if (!it.value) {
        this.inputErrors += 1;
      }
    })

  }
}
