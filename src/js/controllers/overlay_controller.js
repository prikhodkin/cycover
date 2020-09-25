import { Controller } from "stimulus";

const popup = document.querySelector(`.modal-registration__main-box`);
const calc = document.querySelector(`#calculator`);
const overlay = document.querySelector(`.overlay`);

const escPressHandler = (e) => {
  if(e.keyCode && e.keyCode === 27) {
    close()
  }
}

const close = () => {
  popup.classList.remove(`modal-registration__main-box--active`);
  calc.classList.remove(`calculator__main-box--active`);
  overlay.classList.remove(`overlay--active`)
  calc.innerHTML = ``;

  document.removeEventListener(`keydown`, escPressHandler)
}

export default class extends Controller {
  static targets = [ `area` ]

  closeModal() {
    close()
  }
}
