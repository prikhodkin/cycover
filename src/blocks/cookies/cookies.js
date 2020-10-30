import { nodeName } from "jquery";
import {setCookie, getCookie} from "../../js/util/cookie"

const modal = document.querySelector(`.cookies`);
// modules.define('cookies', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {

//             }
//         }
//     }
// }));

// });


export const initialCookieModal = () => {
  const isFirst = getCookie('is_first');

  if (!isFirst) {
    addIsFirstInfo()
  } else {
      modal.classList.add(`cookies--hidden`)
  }
}

const addIsFirstInfo = () => {
  const acceptButton = modal.querySelector(`.button--background`)
  const denyButton = modal.querySelector(`.button--thin`)

  acceptButton.addEventListener(`click`, ()=>{
    setCookie('is_first', 'false', { expires:365 })
    modal.classList.add(`cookies--hidden`)
  })

  denyButton.addEventListener(`click`, () => {
    // modal.classList.add(`cookies--hidden`)
    denyButton.style = "pointer-events : none"
  })
}

