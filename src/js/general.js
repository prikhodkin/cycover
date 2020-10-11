import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"
import {initialCookieModal} from "../blocks/cookies/cookies"

const application = Application.start()
const context = require.context(`./controllers`, true, /\.js$/);
application.load(definitionsFromContext(context));
initialCookieModal()
