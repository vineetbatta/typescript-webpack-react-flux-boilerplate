/// /// <reference path="../../typings/browser/ambient/jasmine/jasmine.d.ts" />

import CounterStore from "./../CounterStore";
import dispatcher from "./../../Dispatcher/Dispatcher";

describe("CounterStore tests", () => {
  it("test", () => {
    var counterStore = new CounterStore(dispatcher);

    expect(
      counterStore.reduce(0, { type: "increment" })
    ).toEqual(1);
  });
});