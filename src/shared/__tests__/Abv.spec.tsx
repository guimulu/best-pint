import * as React from "react";
import { createSnapshot } from "jest-react-fela";

import { Abv } from "..";

describe("Abv component green", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Abv abv={4} />);
    expect(snapshot).toMatchSnapshot();
  });
});

describe("Abv component yellow", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Abv abv={5} />);
    expect(snapshot).toMatchSnapshot();
  });
});

describe("Abv component red", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Abv abv={7} />);
    expect(snapshot).toMatchSnapshot();
  });
});
