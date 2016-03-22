/// <reference path="../../../typings/browser.d.ts" />
import React, {Component} from 'react';
import {Container} from 'flux/utils';

import CounterStore from "../../Stores/CounterStore";

class CounterContainer extends Component<any,any> {
  static getStores() {
    return [CounterStore];
  }

  static calculateState(prevState) {
    return {
      counter: CounterStore.getState(),
    };
  }

  render() {
    return <div counter={this.state.counter} />;
  }
}

const container = Container.create(CounterContainer);

export default container;