import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import {initialCookieModal} from "../blocks/cookies/cookies"

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

const covid = document.querySelector(`.modal--covid`);
const overlay = document.querySelector(`.overlay`);
setTimeout(() => {
  overlay.classList.add(`overlay--active`);
  covid.classList.add(`modal-registration__main-box--active`);
}, 3000)
