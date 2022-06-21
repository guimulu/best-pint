import * as React from "react";
import { createSnapshot } from "jest-react-fela";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "../../context/AppContext";
import Home from "./Home";

describe("Home page", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(
      <AppProvider>
        <Router>
          <Home />
        </Router>
      </AppProvider>
    );
    expect(snapshot).toMatchSnapshot();
  });
});
