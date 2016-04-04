import ActionLogEntry from "../Log/ActionLogEntry";

/**
 * Interface for all actions
 */
interface IAction {
  type: string;
  /**
   * Converts the action to a loggable object.
   */
  toLogEntry(): ActionLogEntry;
}
export default IAction;