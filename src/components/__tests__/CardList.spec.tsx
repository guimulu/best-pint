import * as React from "react";
import { createSnapshot } from "jest-react-fela";

import { CardList } from "..";

describe("CardList component", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<CardList />);
    expect(snapshot).toMatchSnapshot();
  });
});
