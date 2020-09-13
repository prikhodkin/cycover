import { Controller } from "stimulus";
import {randomCount} from "../util";

export default class extends Controller {
  static targets = [ `item`, `target`]
  options = {
    minPinPosition: 20,
    maxPinPosition: 70,
    minCount: 3,
    maxCount: 7,
    minPrice: 10,
    maxPrice: 5000,
    minPlace: 0,
    itemSelector: `.map__item`,
    place: [
      `с карты`,
      `cо счета`,
      `из кармана`
    ]
  }

  initialize() {
    this.renderPin();
  }

  renderPin() {
    for (let i = 0; i <= randomCount(this.options.minCount, this.options.maxCount); i++) {
      setTimeout(()=> {
        this.itemTarget.insertAdjacentHTML('afterbegin', this.pinTemplate());
      }, 200 * (i + 1))
    }

    setTimeout(() => {
      this.removePin(() => this.renderPin());
    }, 3000)
  }

  removePin(callback) {
    const items = this.itemTarget.querySelectorAll(this.options.itemSelector);
    items.forEach((item,index) => {
      setTimeout(() => {
        item.style.opacity = 0;
        setTimeout(() => {
          item.remove();
        }, 100)
      }, 200 * (index + 1))
    })
    callback();
  }

  pinTemplate() {
    return `
    <div class="map__item" data-action="map.target" style="left: ${randomCount(this.options.minPinPosition, this.options.maxPinPosition) + `%`}; top: ${randomCount(this.options.minPinPosition, this.options.maxPinPosition) + `%`}">
      <div class="map__pin">
      <div class="map__circle map__circle--big"></div>
      <div class="map__circle map__circle--middle"></div>
      <div class="map__circle map__circle--small"></div>
      </div>
      ${this.textTemplate()}
    </div>
    `
  }

  textTemplate() {
    return `<p class="map__text">Кража <span>$${randomCount(this.options.minPrice, this.options.maxPrice)}</span> ${this.options.place[randomCount(this.options.minPlace, this.options.place.length)]}</p>`
  }
}
