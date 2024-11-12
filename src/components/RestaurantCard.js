import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo ,sla} =
    restData?.info;

  return (
    <div className="resto-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="resto-logo"
        src={CDN_URL + restData.info.cloudinaryImageId}
        alt="img"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
