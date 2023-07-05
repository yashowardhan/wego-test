import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CategoryList from "./CategoryList";

// Sample test data
const categories = [
  { id: "6288a89f1f0152b8c2cd512b", name: "Sushi" },
  { id: "6288a89f7338764f2071a8a8", name: "Pizza" },
];

describe("CategoryList component", () => {
  it("renders category list correctly", () => {
    const { getByText } = render(
      <CategoryList
        categories={categories}
        selectedCategoryId="6288a89f1f0152b8c2cd512b"
        onCategoryClick={jest.fn()}
      />
    );

    expect(getByText("All")).toBeInTheDocument();
    expect(getByText("Sushi")).toBeInTheDocument();
    expect(getByText("Pizza")).toBeInTheDocument();
  });

  it("triggers category click event", () => {
    const handleCategoryClick = jest.fn();

    const { getByText } = render(
      <CategoryList
        categories={categories}
        selectedCategoryId="16288a89f1f0152b8c2cd512b"
        onCategoryClick={handleCategoryClick}
      />
    );

    const category2 = getByText("Pizza");

    fireEvent.click(category2);

    expect(handleCategoryClick).toHaveBeenCalledTimes(1);
    expect(handleCategoryClick).toHaveBeenCalledWith(
      "6288a89f7338764f2071a8a8"
    );
  });
});
