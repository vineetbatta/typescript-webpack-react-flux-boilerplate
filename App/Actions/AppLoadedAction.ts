import IAction from "./IAction";
import ActionLogEntry from "../Log/ActionLogEntry";

export default class AppLoadedAction implements IAction {
  type: string = "app-loaded";

  bodyTitle: string;
  bodySummary: string;

  constructor(bodyTitle: string, bodySummary: string) {
    this.bodyTitle = bodyTitle;
    this.bodySummary = bodySummary;
  }

  toLogEntry(): ActionLogEntry {
    return new ActionLogEntry(
      "AppLoadedAction",
      {
        "bodyTitle": this.bodyTitle
      });
  }
}