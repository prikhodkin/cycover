import { Controller } from "stimulus";
import imask from "imask";

export default class extends Controller {
  static targets = [ `input` ]
  connect() {
    imask(this.inputTarget, {
      mask: `+{7} (000) 000-00-00`
    });
  }
}
