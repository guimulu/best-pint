import * as React from "react";
import { createSnapshot } from "jest-react-fela";

import { Ibu } from "..";

describe("Ibu component green", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Ibu ibu={10} />);
    expect(snapshot).toMatchSnapshot();
  });
});

describe("Ibu component yellow", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Ibu ibu={20} />);
    expect(snapshot).toMatchSnapshot();
  });
});

describe("Ibu component red", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Ibu ibu={30} />);
    expect(snapshot).toMatchSnapshot();
  });
});
