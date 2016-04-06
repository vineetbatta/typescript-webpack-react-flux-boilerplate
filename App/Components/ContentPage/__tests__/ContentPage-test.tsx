/// <reference path="../../../../typings/browser/ambient/jasmine/jasmine.d.ts" />

import * as React from "react";
import * as TestUtils  from "react-addons-test-utils";
import ContentPage from "./../ContentPage";
import ContentBody from "./../ContentBody/ContentBody";
import CommonStore from "./../../../Stores/CommonStore";
import CommonActionCreators from "./../../../ActionCreators/CommonActionCreators";
import dispatcher from "./../../../Dispatcher/Dispatcher";
import AppLoadedAction from "./../../../Actions/AppLoadedAction";

// Check here what's avaiable in TestUtils: https://facebook.github.io/react/docs/test-utils.html
describe("ContentPage tests", () => {
  describe("render tests", () => {
    it("renders content page", () => {
      // CommonActionCreators.loadApp();

      const bodyTitle: string = "The standard Lorem Ipsum passage, used since the 1500s";
      const bodySummary: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" +
        "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco" +
        "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" +
        "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt" +
        "in culpa qui officia deserunt mollit anim id est laborum.";

      dispatcher.dispatch(new AppLoadedAction(bodyTitle, bodySummary));

      const component: React.Component<{}, {}> = TestUtils.renderIntoDocument(
        <ContentPage />
      );

      const body: ContentBody = component.refs["contentBodyRef"] as ContentBody;
      expect(body).toBeDefined();
      expect(body.props.summary.length).toBeGreaterThan(0);

      const summaryElement: Element = body.refs["summaryRef"] as Element;
      expect(summaryElement).toBeDefined();

      const summaryText: string = summaryElement.textContent;
      expect(summaryText).toBe(CommonStore.getState().bodySummary);
    });
  });
});
