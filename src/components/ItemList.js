import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <h1>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-black-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>
                  - ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-40 p-2">
              <div>
                <button className="absolute p-2 mx-2 rounded-lg bg-black shadow-lg text-white">
                  Add +{" "}
                </button>
              </div>
              <img src={CDN_URL + item.card.info.imageId} className="" />
            </div>
          </div>
        ))}
      </h1>
    </div>
  );
};

export default ItemList;
