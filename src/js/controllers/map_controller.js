import { Controller } from "stimulus";
const data = [
  {
    left: 10,
    top: 20,
    text: `Кража <span>$20</span> с карты`
  }
]


export default class extends Controller {
  static targets = [ `item`]
  options = {
    minPinPosition: 20,
    maxPinPosition: 70,
    minCount: 3,
    maxCount: 7,
    minPrice: 10,
    maxPrice: 5000,
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
    for (let i = 0; i <= this.randomCount(this.options.minCount, this.options.maxCount); i++) {
      setTimeout(()=> {
        this.itemTarget.insertAdjacentHTML('afterbegin', this.pinData());
      }, 200 * (i + 1))
    }
    setTimeout(() => {
      this.removePin(() => this.renderPin());
    }, 3000)
  }

  pinData() {
    return `
    <div class="map__item" style="left: ${this.randomCount(this.options.minPinPosition, this.options.maxPinPosition) + `%`}; top: ${this.randomCount(this.options.minPinPosition, this.options.maxPinPosition) + `%`}">
      <div class="map__pin">
      <div class="map__circle map__circle--big"></div>
      <div class="map__circle map__circle--middle"></div>
      <div class="map__circle map__circle--small"></div>
      </div>
      ${this.textTemplate()}
    </div>
    `
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

  randomCount(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  textTemplate() {
    return `<p class="map__text">Кража <span>$${this.randomCount(this.options.minPrice, this.options.maxPrice)}</span> ${this.options.place[this.randomCount(0, this.options.place.length)]}</p>`
  }
}
