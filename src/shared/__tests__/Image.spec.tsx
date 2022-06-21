import * as React from "react";
import { createSnapshot } from "jest-react-fela";

import { Image } from "..";

describe("Image component", () => {
  it("renders correctly", () => {
    const snapshot = createSnapshot(
      <Image
        alt="test"
        src="/test.png"
        marginBottom={10}
        marginTop={10}
        maxHeight={10}
      />
    );
    expect(snapshot).toMatchSnapshot();
  });
});
