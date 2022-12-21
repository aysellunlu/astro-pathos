import { render, screen } from "@testing-library/react";
import BlogPage from "./BlogPage";

test("Header renders correctly", () => {
  const { debug, container } = render(<BlogPage />);

  debug();
});
