import * as React from "react";
import { createSnapshot } from "jest-react-fela";

import { Favorite } from "..";

describe("Favorite component", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Favorite />);
    expect(snapshot).toMatchSnapshot();
  });
});

describe("Favorite component red", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Favorite isFavorite />);
    expect(snapshot).toMatchSnapshot();
  });
});
