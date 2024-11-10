import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants,setListOfRestaurants] = useState(restList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
            let filteredList = listOfRestaurants.filter((res)=> res.info.avgRating>4);
            setListOfRestaurants(filteredList);
            console.log(filteredList);
        }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="resto-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
