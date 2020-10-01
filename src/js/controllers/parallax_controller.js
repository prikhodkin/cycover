import { Controller } from "stimulus";
import Parallax from "parallax-js"
export default class extends Controller {

  connect() {
    const parallaxBorders = document.querySelectorAll(`.advantages__parallax`);
    parallaxBorders.forEach((item)=> new Parallax(item));
  }
}
