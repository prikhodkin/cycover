import { Controller } from "stimulus";
import $ from "jquery";

export default class extends Controller {

  static targets = [ `form`,`link` ]

  showPopup(e){
    e.preventDefault();
    this.toggle();
  }

  closePopup(e) {
    e.preventDefault();
    this.toggle();
  }

  makeRequest(e) {
    e.preventDefault();

    const form = $('.modal-registration__form');

    $.ajax({
      type: `POST`,
      url: `vendor/mail.php`, // Change
      data: form.serialize()
    }).done(function () {
      this.toggle();
      setTimeout(function () {
        // Done Functions
        form.trigger(`reset`);
      }, 1000);
    });
    return false;
  }

  toggle() {
    const popup = document.querySelector(`.modal-registration__main-box`);
    const overlay = document.querySelector(`.overlay`);
    popup.classList.toggle(`modal-registration__main-box--active`);
    overlay.classList.toggle(`overlay--active`)
  }
}
