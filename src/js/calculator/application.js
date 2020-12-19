import {changeScreen} from '../util/calc';
import VotreScreen from './components/votre';
import AssuranceScreen from './components/cyber-assurance';
import SecteurScreen from './components/secteur-dactivity';
import DataInfoScreen from './components/data-info'
import DataInfoMoreScreen from './components/data-info-more'
import SearchCircleScreen from './components/search-circle'
import TariffScreen from './components/tariff'
import PersonalDataScreen from './components/personal-data'
import ApprovedScreen from './components/approved'
import {state} from '../util/calc'

export default class Router {
  static initial() {
    const votreSituation = new VotreScreen(state)
    changeScreen(votreSituation.element)
  }

  static showAssuranse(data) {
    const assuranceScreen = new AssuranceScreen(data);
    changeScreen(assuranceScreen.element);
  }

  static showSecteur(data) {
    const secteurScreen = new SecteurScreen(data);
    changeScreen(secteurScreen.element);
  }

  static showDataInfo(data) {
    const dataInfoScreen = new DataInfoScreen(data);
    changeScreen(dataInfoScreen.element)
  }

  static showDataInfoMore(data) {
    const dataInfoScreen = new DataInfoMoreScreen(data);
    changeScreen(dataInfoScreen.element)
  }

  static showSearchCircle(data) {
    const searchCircleScreen = new SearchCircleScreen(data);
    changeScreen(searchCircleScreen.element)
  }

  static showTariff(data) {
    const tariffScreen = new TariffScreen(data);
    changeScreen(tariffScreen.element)
  }

  static showPersonalData(data) {
    const personalDataScreen = new PersonalDataScreen(data);
    changeScreen(personalDataScreen.element)
  }

  static showApproved() {
    const approvedScreen = new ApprovedScreen();
    changeScreen(approvedScreen.element)
  }
}
