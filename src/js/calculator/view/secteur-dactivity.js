import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class DataInfoView extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
  }

  get template() {
    return `
      <section class="calculator" data-controller="calculator">
        <div class="calculator__wrap">
          <h2 class="calculator__title calculator__title--territorialite title title--black">Précisez le secteur d'activité de votre entreprise :</h2>
          <ul data-simplebar id="secture-bar" class="calculator__list calculator__list--secture-data">

            <li class="calculator__item calculator__item--number field-numb calculator__item--secture">
              <label class="calculator__secture-label">
                <div>
                  <p class="calculator__secture-description">Droit, Intermédiation, Finance et Patrimoine</p>
                  <input checked class="calculator__amount-checkbox" type="radio" name="Secteur d'activité" value="Droit, Intermédiation, Finance et Patrimoine">
                  <p class="calculator__check calculator__check--secture"></p>
                </div>
                <p class="calculator__sub-description">Avocat, conseil juridique, intermédiaire d'assurance, agent immobilier, expert-comptable, conseiller en investissement financier, conseiller en gestion de patrimoine indépendant, démarcheur bancaire, démarcheur financier, intermédiaire en opérations de banque et services de paiement, agent immobilier en transaction, conseil juridique à titre accessoire</p>
              </label>
            </li>
            <li class="calculator__item calculator__item--number field-numb calculator__item--secture">
              <label class="calculator__secture-label">
                <div>
                  <p class="calculator__secture-description">Télécom et Gestion de données informatiques</p>
                  <input class="calculator__amount-checkbox" type="radio" name="Secteur d'activité" value="Télécom et Gestion de données informatiques">
                  <p class="calculator__check calculator__check--secture"></p>
                </div>
                <p class="calculator__sub-description">Fournisseur d’accès internet, Opérateur de télécommunications, Hébergement, Cloud computing, Infogérance, Traitement de données informatiques</p>
              </label>
            </li>
            <li class="calculator__item calculator__item--number field-numb calculator__item--secture">
              <label class="calculator__secture-label">
                <div>
                  <p class="calculator__secture-description">Commerce de détail et E-commerce</p>
                  <input class="calculator__amount-checkbox" type="radio" name="Secteur d'activité" value="Commerce de détail et E-commerce">
                  <p class="calculator__check calculator__check--secture"></p>
                </div>
                <p class="calculator__sub-description">Commerce de tout bien de consommation ou alimentaire en magasin ou en ligne</p>
              </label>
            </li>
            <li class="calculator__item calculator__item--number field-numb calculator__item--secture">
              <label class="calculator__secture-label">
                <div>
                  <p class="calculator__secture-description">Professions de la santé</p>
                  <input class="calculator__amount-checkbox" type="radio" name="Secteur d'activité" value="Professions de la santé">
                  <p class="calculator__check calculator__check--secture"></p>
                </div>
                <p class="calculator__sub-description">Professions de la santé, Etablissement médicosocial, Médecin libéral (généraliste ou spécialiste), Pharmacien, Sage-femme, Infirmier, Masseur kinésithérapeute, Orthophoniste, Orthopédiste, Audioprothésiste, Opticien-lunetier, Pédicure, podologue, Ergothérapeute, Psychomotricien, Manipulateur ERM, Ostéopathe, Vétérinaire</p>
              </label>
            </li>
            <li class="calculator__item calculator__item--number field-numb calculator__item--secture">
              <label class="calculator__secture-label">
                <div>
                  <p class="calculator__secture-description">Hôtellerie et Restauration</p>
                  <input class="calculator__amount-checkbox" type="radio" name="Secteur d'activité" value="Hôtellerie et Restauration">
                  <p class="calculator__check calculator__check--secture"></p>
                </div>
                <p class="calculator__sub-description">Hébergement, Camping, Restauration traditionnelle et collective, Débit de boissons</p>
              </label>
            </li>
            <li class="calculator__item calculator__item--number field-numb calculator__item--secture">
              <label class="calculator__secture-label">
                <div>
                  <p class="calculator__secture-description">Autres Activités</p>
                  <input class="calculator__amount-checkbox" type="radio" name="Secteur d'activité" value="Autres Activités">
                  <p class="calculator__check calculator__check--secture"></p>
                </div>
                <p class="calculator__sub-description">Toutes activités sauf Droit / Intermédiation / Finance et Patrimoine, Télécom et Gestion de données informatiques, Commerce de détail et E-commerce, Professions de santé, Hôtellerie et restauration</p>
              </label>
            </li>
          </ul>
          <div class="calculator__box calculator__box--button">
            <a class="calculator__button calculator__button--back button button--back" href="#">
              <svg class="button__icon">
                <use xlink:href="img/sprites/sprite.svg#icon_arrow-back"></use>
              </svg>
            </a>
            <a class="calculator__button calculator__button--forth button button--forth button--background" href="#">
              <span>
                Continuer
                <svg class="button__icon button__icon--forth">
                  <use xlink:href="img/sprites/sprite.svg#icon_arrow-forward"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div id="calc-footer"></div>
      </section>
    `;
  }

  bind() {
    const next = this.element.querySelector(`.calculator__button--forth`);
    const back = this.element.querySelector(`.calculator__button--back`);

    next.addEventListener(`click`, (e) => {
      e.preventDefault()
      this.onClickNext();
    });

    back.addEventListener(`click`, (e) => {
      e.preventDefault()
      this.onClickBack();
    })
  }

  onClickNext() {};
  onClickBack() {};
}
