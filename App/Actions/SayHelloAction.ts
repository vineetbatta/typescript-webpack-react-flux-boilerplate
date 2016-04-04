import IAction from "./IAction";
import ActionLogEntry from "../Log/ActionLogEntry";

export default class SayHelloAction implements IAction {
  type: string = "say-hello";
  toLogEntry(): ActionLogEntry {
    return new ActionLogEntry("SayHelloAction");
  }
}