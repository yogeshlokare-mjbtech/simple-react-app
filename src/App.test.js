import React from "react";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import App from "./App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
describe("App component testing", function() {
  it("renders welcome message", function() {
    const wrapper = shallow(<App />);
    const message = (
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    );
    expect(wrapper.contains(message)).to.equal(true);
  });
});
