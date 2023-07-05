import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import "./FoodList.css";

const FoodList = ({ foodList }) => {
  const [visibleFoodCount, setVisibleFoodCount] = useState(12);

  const handleShowMore = () => {
    setVisibleFoodCount((prevCount) => prevCount + 12);
  };

  const renderedFoodList = foodList.slice(0, visibleFoodCount);

  return (
    <>
      <div className="food-list">
        {renderedFoodList.map((food) => (
          <div className="food-item" key={food.id}>
            {food.promotion === "gift" ? (
              <div className="promotion gift">
                <FontAwesomeIcon icon={faGift} />
              </div>
            ) : food.promotion === "discount" ? (
              <div className="promotion discount">%</div>
            ) : food.promotion ? (
              <div className="promotion other">{food.promotion}</div>
            ) : null}
            <img src={food.imageUrl} alt={food.name} />
            <h3>{food.name}</h3>
            <div className="food-details">
              <div className="rating">
                <div className="rating-box">
                  <span className="star-icon">&#9733;</span>
                  <span className="rating-value">{food.rating.toFixed(1)}</span>
                </div>
              </div>
              <div className="cook-time">
                {food.minCookTime}-{food.maxCookTime}
                <span className="time-unit"> min</span>
              </div>
              {food.isNew ? <span className="new-text"> New</span> : ""}
            </div>
          </div>
        ))}
      </div>
      <div className="show-more">
        {visibleFoodCount < foodList.length && (
          <button className="show-more-button" onClick={handleShowMore}>
            &#43; Show More
          </button>
        )}
      </div>
    </>
  );
};

FoodList.propTypes = {
  foodList: PropTypes.array.isRequired,
};

export default FoodList;
