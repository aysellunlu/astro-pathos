import { render, screen } from "@testing-library/react";
import App from "./App";

test("Header renders correctly", () => {
  const { debug, container } = render(<App />);

  debug();
});
