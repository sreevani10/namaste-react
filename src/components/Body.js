import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";

const Body = () => {
  let listOfRestaurants = [
    {
      info: {
        id: "588613",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/ab13ff98-4cb5-4062-bef6-1738d5d5ed45_588619.JPG",
        locality: "Brigade Road",
        areaName: "Central Bangalore",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 3.6,
        parentId: "547",
        avgRatingString: "4.4",
        totalRatingsString: "2.0K+",
        sla: {
          deliveryTime: 50,
        },
      },
    },
    {
        info: {
          id: "588619",
          name: "Dominos",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/ab13ff98-4cb5-4062-bef6-1738d5d5ed45_588619.JPG",
          locality: "Brigade Road",
          areaName: "Central Bangalore",
          costForTwo: "₹400 for two",
          cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
          avgRating: 4.4,
          parentId: "547",
          avgRatingString: "4.4",
          totalRatingsString: "2.0K+",
          sla: {
            deliveryTime: 50,
          },
        },
    }
  ];
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
            listOfRestaurants = listOfRestaurants.filter((res)=> res.info.avgRating>4);
            console.log(listOfRestaurants);
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
