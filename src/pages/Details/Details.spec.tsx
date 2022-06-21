import * as React from "react";
import { createSnapshot } from "jest-react-fela";
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from "../../context/AppContext";
import Details from "./Details";

describe("Details page", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(
      <AppProvider>
        <Details />
      </AppProvider>
    );
    expect(snapshot).toMatchSnapshot();
  });
});
