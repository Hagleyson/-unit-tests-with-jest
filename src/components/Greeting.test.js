import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test("render Hello World as a text", () => {
  //Arrange
  render(<Greeting />);
  // Act
  //...nothing
  //Assert
  const helloWordElement = screen.getByText("Hello world!", { exact: false });
  expect(helloWordElement).toBeInTheDocument();
});
