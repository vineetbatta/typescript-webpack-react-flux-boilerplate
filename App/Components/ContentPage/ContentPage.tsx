/// <reference path="../../../typings/browser.d.ts" />

import * as React from "react";
import {Container, Store} from "flux/utils";
import CommonStore from "../../Stores/CommonStore";
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";

import dispatcher from "../../Dispatcher/Dispatcher";
import SayHelloAction from "../../Actions/SayHelloAction";

/* tslint:disable:no-any */
const styles: any = require("./ContentPage.module.less");
/* tslint:enable:no-any */

interface IProps {

}

interface IContentPageState {
  bodyTitle?: string;
  bodySummary?: string;
  sayHelloCount?: number;
}

class ContentPage extends React.Component<IProps, IContentPageState> {
  public static getStores(): Array<Store> {
    return [CommonStore];
  }

  public static calculateState(prevState: IContentPageState): IContentPageState {
    return {
      sayHelloCount: CommonStore.getState().sayHelloCount
    };
  }

  public onButtonClick(): void {
    dispatcher.dispatch(new SayHelloAction());
  }

  public render(): React.ReactElement<{}> {
    const headerTitle: string = "Welcome to Lorem Ipsum";

    return (
      <div className={styles.container}>
        <ContentHeader isActive={true} title={headerTitle} />
        <ContentBody ref="contentBodyRef" title={this.state.bodyTitle} summary={this.state.bodySummary}>
          <div className={styles.hello}>
            <button onClick={() => this.onButtonClick() }>Say Hello!</button>
            <span> You said hello {this.state.sayHelloCount} time(s) </span>
          </div>
        </ContentBody>
      </div>
    );
  }

}

const container: React.ComponentClass<IProps> = Container.create(ContentPage);

export default container;