import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import {initialCookieModal} from "../blocks/cookies/cookies"
import IMask from "imask";

const application = Application.start()
const context = require.context(`./controllers`, true, /\.js$/);
application.load(definitionsFromContext(context));
initialCookieModal()

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const inputs = document.querySelectorAll(`.field__input`);
inputs.forEach((item) => {
  const parent = item.parentNode;
  item.addEventListener(`input`, ()=> {
    if(item.value.length > 5) {
      parent.classList.add(`field--active`)
    } else {
      parent.classList.remove(`field--active`)
    }
  });
})

const phones = document.querySelectorAll(`input[type="tel"]`);
const phoneOption = {
  mask: '+{33} (0) 00-00-00-00'
}
phones.forEach(item => IMask(item, phoneOption));
