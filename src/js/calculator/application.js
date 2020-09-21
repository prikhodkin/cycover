import {changeScreen} from '../util/view-calc';
import VotreScreen from './components/votre';
import AssuranceScreen from './components/cyber-assurance';
import DataInfoScreen from './components/data-info'
import DataInfoMoreScreen from './components/data-info-more'
import SearchCircleScreen from './components/search-circle'
import TariffScreen from './components/tariff'
import PersonalDataScreen from './components/personal-data'
import ApprovedScreen from './components/approved'

export default class Router {
  static initial() {
    const votreSituation = new VotreScreen()
    changeScreen(votreSituation.element)
  }

  static showAssuranse() {
    const assuranceScreen = new AssuranceScreen();
    changeScreen(assuranceScreen.element);
  }

  static showDataInfo() {
    const dataInfoScreen = new DataInfoScreen();
    changeScreen(dataInfoScreen.element)
  }

  static showDataInfoMore() {
    const dataInfoScreen = new DataInfoMoreScreen();
    changeScreen(dataInfoScreen.element)
  }

  static showSearchCircle() {
    const searchCircleScreen = new SearchCircleScreen();
    changeScreen(searchCircleScreen.element)
  }

  static showTariff() {
    const tariffScreen = new TariffScreen();
    changeScreen(tariffScreen.element)
  }

  static showPersonalData() {
    const personalDataScreen = new PersonalDataScreen();
    changeScreen(personalDataScreen.element)
  }

  static showApproved() {
    const approvedScreen = new ApprovedScreen();
    changeScreen(approvedScreen.element)
  }
}
