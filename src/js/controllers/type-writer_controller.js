import { Controller } from "stimulus";
import Typewriter from 'typewriter-effect/dist/core';

export default class extends Controller {
  static targets = [ `target` ]
  connect() {
    this.init();
  }

  init() {
    console.log(this.targetTarget.getAttribute(`data-words`));
    const words = this.targetTarget.getAttribute(`data-words`).split(',');
    console.log(words);
    new Typewriter(this.targetTarget, {
      strings: words,
      autoStart: true,
      loop: true
    });
  }

}
