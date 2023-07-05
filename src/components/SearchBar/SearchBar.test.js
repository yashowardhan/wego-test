import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("calls onSearch with the entered search text", () => {
    // Mock onSearch function
    const onSearchMock = jest.fn();

    // Render the SearchBar component
    const { getByPlaceholderText } = render(
      <SearchBar onSearch={onSearchMock} />
    );
    const input = getByPlaceholderText("Enter restaurant name...");

    // Simulate change event on the input field
    fireEvent.change(input, { target: { value: "niquent" } });

    // Verify if onSearch is called with the correct search text
    expect(onSearchMock).toHaveBeenCalledWith("niquent");
  });
});
