/// <reference path="../../typings/browser.d.ts" />

import * as Flux from "flux";
import IAction from "../Actions/IAction";

export default new Flux.Dispatcher<IAction>();