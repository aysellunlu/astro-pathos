import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("Header renders correctly", () => {
  const { debug, container } = render(<Welcome />);

  debug();
});
