/// <reference path="../../../../typings/browser.d.ts" />

import * as React from "react";

/* tslint:disable:no-any */
const styles: any = require("./ContentHeader.module.less");
/* tslint:enable:no-any */

interface IContentHeaderProps {
  isActive: boolean;
  title: string;
};

export default class ContentHeader extends React.Component<IContentHeaderProps, {}> {
  render(): React.ReactElement<{}> {
    if (!this.props.isActive) {
      return null;
    }

    return <div className={styles.container}>{this.props.title}</div>;
  }
};