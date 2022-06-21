import * as React from "react";
import { createSnapshot } from "jest-react-fela";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "../../context/AppContext";
import Details from "./Favorites";

describe("Favorites page", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(
      <AppProvider>
        <Router>
          <Details />
        </Router>
      </AppProvider>
    );
    expect(snapshot).toMatchSnapshot();
  });
});
