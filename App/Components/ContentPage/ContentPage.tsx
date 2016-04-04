/// <reference path="../../../typings/browser.d.ts" />

import React, {Component} from 'react';
import ContentHeader from "./ContentHeader/ContentHeader";
import ContentBody from "./ContentBody/ContentBody";
import CommonStore from "../../Stores/CommonStore";
import CommonActionCreators from "../../ActionCreators/CommonActionCreators";

/* tslint:disable:no-any */
const styles: any = require("./ContentPage.module.less");
/* tslint:enable:no-any */

interface IContentPageState {
  bodyTitle: string;
  bodySummary: string;
  sayHelloCount: number;
}

export default class ContentPage extends Component<{}, IContentPageState> {
  public static getStores() {
    return [CommonStore];
  }

  public static calculateState(prevState) {
    return {
      counter: CommonStore.getState(),
    };
  }

  public render(): React.ReactElement<{}> {
    const headerTitle: string = "Welcome to Lorem Ipsum";

    return (
      <div className={styles.container}>
        <ContentHeader isActive={true} title={headerTitle} />
        <ContentBody ref="contentBodyRef" title={this.state.bodyTitle} summary={this.state.bodySummary}>
          <div className={styles.hello}>
            // <button onClick={() => this.onButtonClick() }>Say Hello!</button>
            <span> You said hello {this.state.sayHelloCount} time(s) </span>
          </div>
        </ContentBody>
      </div>
    );
  }
}