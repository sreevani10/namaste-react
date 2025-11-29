import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (items) =>
        items?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || []
    );
  console.log(categories);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{costForTwoMessage}</h3>
      <h4>Menu</h4>

      {categories.map((category, id) => (
        <div key={category?.card?.card?.title || id}>
          <h1>{category?.card?.card?.title}</h1>
          <ul>
            {category?.card?.card?.itemCards.map((itemCard) => (
              <li key={itemCard.card.info.id}>
                {itemCard.card.info.name}-{"Rs."}
                {itemCard.card.info.price / 100}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
