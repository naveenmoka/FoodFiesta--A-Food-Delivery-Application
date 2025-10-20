import { useState } from "react";
import ItemList from "./ItemList";

// This component gets its restaurant info from the `useRestaurantMenu` hook.
// The hook is configured to use local mock data instead of a live API call.
// This is because the live Swiggy /menu API is heavily protected by CORS
// and server-side blocking, making it unreliable for this development project.

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="w-full sm:w-8/12 md:w-9/12 mx-auto my-4 bg-white shadow-lg rounded-lg">
      {/* Header - The clickable area */}
      <div
        className="flex justify-between cursor-pointer p-4 transition-colors duration-200 hover:bg-gray-50"
        onClick={handleClick}
      >
        <span className="font-bold text-lg text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>

        <span
          className={`transform transition-transform duration-300 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          ⬇️
        </span>
      </div>

      {/* Accordion Body  */}
      {showItems && (
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};
export default RestaurantCategory;
