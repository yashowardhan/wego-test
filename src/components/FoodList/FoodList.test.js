import React from "react";
import { render } from "@testing-library/react";
import FoodList from "./FoodList";

describe("FoodList", () => {
  const foodList = [
    {
      id: "628b5decc94a27754f30e6f1",
      index: 0,
      rating: 3.9508,
      promotion: "gift",
      isNew: false,
      categoryId: "6288a89fac9e970731bfaa7b",
      minCookTime: 80,
      maxCookTime: 100,
      restaurant: "Niquent",
      name: "Niquent Drinks",
      imageUrl: "https://source.unsplash.com/random/400x400?Drinks",
    },
    {
      id: "628b5decf39bcc4e982fc88a",
      index: 1,
      rating: 4.9874,
      promotion: "1+1",
      isNew: false,
      categoryId: "6288a89f1f0152b8c2cd512b",
      minCookTime: 120,
      maxCookTime: 140,
      restaurant: "Boilicon",
      name: "Boilicon Sushi",
      imageUrl: "https://source.unsplash.com/random/400x400?Sushi",
    },
  ];

  it("renders food items correctly", () => {
    const { getByText, getAllByAltText } = render(
      <FoodList foodList={foodList} />
    );

    // Assert that food items are rendered
    foodList.forEach((food) => {
      const foodName = getByText(food.name);
      expect(foodName).toBeInTheDocument();

      const foodImage = getAllByAltText(food.name);
      expect(foodImage.length).toBeGreaterThan(0);

      const ratingValue = getByText(food.rating.toFixed(1));
      expect(ratingValue).toBeInTheDocument();
    });
  });
});
