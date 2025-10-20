import Shimmer from "./Shimmer";
import { useParams, useLocation } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { RES_IMG } from "../utils/constants";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const location = useLocation();
  const { restaurantData } = location.state || {};
  const restaurantInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (restaurantInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwo, cloudinaryImageId } = restaurantData.info;
  const categories =
    restaurantInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  return (
    <div className="text-center bg-gray-50 min-h-screen">
      {" "}
      <div className="container mx-auto p-4 max-w-3xl">
        {" "}
        {/* Restaurant Header Section */}
        <div className="bg-white p-6 my-4 rounded-lg shadow-md flex flex-col items-center">
          {cloudinaryImageId && (
            <img
              src={RES_IMG + cloudinaryImageId}
              alt={name}
              className="w-full max-w-xs h-48 object-cover rounded-md mb-4 shadow-sm" // Responsive image, fixed height
            />
          )}
          <h1 className="font-extrabold text-3xl text-gray-800 mb-2">{name}</h1>
          <p className="text-gray-600 text-lg mb-1">{cuisines.join(", ")}</p>
          <p className="text-gray-700 font-semibold text-md">{costForTwo}</p>
        </div>
        {/* Menu Categories Accordions */}
        <div className="mt-8">
          {" "}
          {categories.map((category, index) => (
            <RestaurantCategory
              data={category?.card?.card}
              key={category?.card?.card?.title || index}
              showItems={index === showIndex ? true : false}
              setShowIndex={() =>
                setShowIndex(index === showIndex ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
