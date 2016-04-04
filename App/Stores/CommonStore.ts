/// <reference path="../../typings/browser.d.ts" />

import {ReduceStore} from "flux/utils";
import dispatcher from "../Dispatcher/Dispatcher";

interface IContentPageState {
  bodyTitle?: string;
  bodySummary?: string;
  sayHelloCount?: number;
}

class CommonStore extends ReduceStore<IContentPageState> {

  public getInitialState(): IContentPageState {
    return {
      bodyTitle: "",
      bodySummary: "",
      sayHelloCount: 0
    };
  }

  reduce(state: IContentPageState, action: { type: string }): IContentPageState {
    switch (action.type) {
      case "app-loaded":
        return {
          bodyTitle: state.bodyTitle,
          bodySummary: state.bodySummary
        };

      case "say-hello":
        return {
          sayHelloCount: state.sayHelloCount + 1
        };

      default:
        return state;
    }
  }
}

export default new CommonStore(dispatcher);