/// <reference path="../../typings/browser.d.ts" />

import {Dispatcher} from "flux";
import IAction from "../Actions/IAction";

const instance: Dispatcher<IAction> = new Dispatcher();
export default instance;

// So we can conveniently do, `import {dispatch} from './Dispatcher';`
export const dispatch: void = instance.dispatch.bind(instance);