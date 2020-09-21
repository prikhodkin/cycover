import PersonalDataView from '../view/personal-data';
import Router from '../application.js';
import FooterScreen from './footer';
import $ from 'jquery';

export default class PersonalDataScreen {
  constructor(state) {
    this._state = state;

    this.view = new PersonalDataView();
    this.view.onClickNext = (e) => {
      e.preventDefault();
      const form = $(`.calculator__form`)
      $.ajax({
        type: `POST`,
        url: `vendor/mail.php`, // Change
        data: form.serialize()
      }).done(function () {
        Router.showApproved();
        setTimeout(function () {
          // Done Functions
          form.trigger(`reset`);
        }, 1000);
      });
      console.log(this._state)
      return false
    };
  }

  get element() {
    const element = this.view.element;
    const footerWrap = element.querySelector(`#calc-footer`)
    footerWrap.appendChild(new FooterScreen(this._state).element)
    return element
  }
}
