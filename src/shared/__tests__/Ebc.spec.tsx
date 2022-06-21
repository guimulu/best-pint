import * as React from "react";
import { createSnapshot } from "jest-react-fela";

import { Ebc } from "..";

describe("Ebc component green", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Ebc ebc={9} />);
    expect(snapshot).toMatchSnapshot();
  });
});

describe("Ebc component yellow", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Ebc ebc={45} />);
    expect(snapshot).toMatchSnapshot();
  });
});

describe("Ebc component red", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Ebc ebc={50} />);
    expect(snapshot).toMatchSnapshot();
  });
});
