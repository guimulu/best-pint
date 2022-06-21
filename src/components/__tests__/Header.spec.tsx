import * as React from "react";
import { createSnapshot } from "jest-react-fela";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "..";

describe("Header component", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(
      <Router>
        <Header />
      </Router>
    );
    expect(snapshot).toMatchSnapshot();
  });
});
