import React, { useEffect, useState } from "react";
import CategoryList from "../components/CategoryList/CategoryList";
import FoodList from "../components/FoodList/FoodList";
import SearchBar from "../components/SearchBar/SearchBar";

const FoodPage = () => {
  const [categories, setCategories] = useState([]);
  const [foodList, setFoodList] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch food categories
    fetch("https://run.mocky.io/v3/f25ced0a-9ff7-4996-bdc7-430f281c48db")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));

    // Fetch food list
    fetch("https://run.mocky.io/v3/a24cfec5-f76c-410b-a5ac-9f63fab28abb")
      .then((response) => response.json())
      .then((data) => setFoodList(data))
      .catch((error) => console.error("Error fetching food list:", error));
  }, []);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter food list based on selected category and search query
  const filteredFoodList = foodList.filter((food) => {
    if (
      selectedCategoryId !== "all" &&
      food.categoryId !== selectedCategoryId
    ) {
      return false;
    }
    if (
      searchQuery &&
      !food.restaurant.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CategoryList
        categories={categories}
        onCategoryClick={handleCategoryClick}
        selectedCategoryId={selectedCategoryId}
      />
      <FoodList foodList={filteredFoodList} />
    </div>
  );
};

export default FoodPage;
