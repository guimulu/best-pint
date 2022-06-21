import * as React from "react";
import { createSnapshot } from "jest-react-fela";

import { Text } from "..";

describe("Text component", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(<Text fontSize={12} />);
    expect(snapshot).toMatchSnapshot();
  });
});
