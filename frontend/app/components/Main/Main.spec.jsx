import React from "react";
import {findDOMNode} from "react-dom";
import TestUtils from "react-addons-test-utils";

import Main from "./Main.jsx";

describe("Main", () => {
  var component;
  var props;
  var node;

  beforeEach(() => {
    props = {
      pressed: true,
      onButtonClick: jasmine.createSpy('spy')
    };
    // NOTE: need to wrap stateless component
    //   - https://github.com/iamdustan/react-testing-stateless-components
    // NOTE: take the original react component before `ReactRedux.connect`
    component = TestUtils.renderIntoDocument(
      <div>
        <Main.WrappedComponent {...props} />
      </div>
    );
  });

  it("can be rendered", () => {
    expect(component).toBeDefined();
  });

  // NOTE: need to find child elements by primitive javascript way
  //   - https://github.com/facebook/react/issues/4692
  it("triggers callback by click on a button", () => {
    TestUtils.Simulate.click(component.getElementsByTagName("button")[0]);
    expect(props.onButtonClick).toHaveBeenCalled();
  });

  it("shows 'true' in p tag", () => {
    expect(
      component.getElementsByTagName("p")[0].textContent
    ).toContain("true");
  });
});
