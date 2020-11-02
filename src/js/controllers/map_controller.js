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
    maxPrice: 50000,
    minPlace: 0,
    itemSelector: `.map__item`,
    place: [
      `Gestion de crise`,
      `Frais de surveillance`,
      `Prise en charge des dommages`,
      `Accompagnement`,
      `Prise en charge des sanctions`,
      `Remboursement`
    ],
    placeAccent: [
      `Piratage`,
      `Perte ou vol de données`,
      `Erreur humaine`,
      `Cyber extorsion de fonds`,
      `Malveillance interne`
    ]
  }

  initialize() {
    this.renderPin();
  }

  renderPin() {
    let count = randomCount(this.options.minCount, this.options.maxCount);
    let countAccent = count % 3;
    for (let i = 0; i <= count; i++) {
      setTimeout(()=> {
        this.itemTarget.insertAdjacentHTML('afterbegin', this.pinTemplate());
      }, 200 * (i + 1))
    }

    for (let i = 0; i <= countAccent; i++) {
      setTimeout(()=> {
        this.itemTarget.insertAdjacentHTML('afterbegin', this.pinTemplateAccent());
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


  pinTemplateAccent() {
    return `
    <div class="map__item map__item--accent" data-action="map.target" style="left: ${randomCount(this.options.minPinPosition, this.options.maxPinPosition) + `%`}; top: ${randomCount(this.options.minPinPosition, this.options.maxPinPosition) + `%`}">
      <div class="map__pin">
      <div class="map__circle map__circle--big"></div>
      <div class="map__circle map__circle--middle"></div>
      <div class="map__circle map__circle--small"></div>
      </div>
      ${this.textTemplateAccent()}
    </div>
    `
  }

  textTemplateAccent() {
    return `
     <p class="map__text">
        ${this.options.placeAccent[randomCount(this.options.minPlace, this.options.place.length)]}
        <span> - ${randomCount(this.options.minPrice, this.options.maxPrice)} €</span>
     </p>
      `
  }

  textTemplate() {
    return `
     <p class="map__text">
        ${this.options.place[randomCount(this.options.minPlace, this.options.place.length)]}
        <span> ${randomCount(this.options.minPrice, this.options.maxPrice)} €</span>
     </p>
      `
  }
}
