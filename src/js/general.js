import Turbolinks from "turbolinks";
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
// import { tns } from "tiny-slider/src/tiny-slider"

Turbolinks.start();

const application = Application.start()
const context = require.context(`./controllers`, true, /\.js$/);
application.load(definitionsFromContext(context));

// const slider = tns({
//   container: `.feedback__list`,
//   items: 1,
//   controls: true,
//   nav: false,
//   loop: false,
//   swipeAngle: false,
//   speed: 400,
//   nextButton: `.feedback__button--back`,
//   prevButton: `.feedback__button--forward`,
//   responsive: {
//     600: {
//       items: 2
//     },
//     900: {
//       items: 3
//     },
//     1100: {
//       items: 4
//     }
//   }
// });
