import React from "react";
import PropTypes from "prop-types";
import "./CategoryList.css";

const CategoryList = ({ categories, selectedCategoryId, onCategoryClick }) => {
  return (
    <ul className="category-list">
      <li
        onClick={() => onCategoryClick("all")}
        className={selectedCategoryId === "all" ? "selected" : ""}
      >
        All
      </li>
      {categories.map((category) => (
        <li
          key={category.id}
          onClick={() => onCategoryClick(category.id)}
          className={selectedCategoryId === category.id ? "selected" : ""}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  selectedCategoryId: PropTypes.string,
  onCategoryClick: PropTypes.func.isRequired,
};

export default CategoryList;
