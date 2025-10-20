import { useState, useEffect } from "react";
import RestaurentCard, { withPureVegLable } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { RESTAURENTS_LIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [ListofRestaurents, setListofRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const RestaurantCardPureVeg = withPureVegLable(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RESTAURENTS_LIST_URL);

    const json = await data.json();
    setListofRestaurents(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (ListofRestaurents?.length ?? 0) === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-50 min-h-screen">
      {/* Filter and Search Section */}
      <div className="bg-white shadow-sm p-6 mb-8">
        <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center gap-6">
          {/* Search Input and Button */}
          <div className="flex items-center w-full sm:w-auto">
            <input
              type="text"
              data-testid="searchInput"
              className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-400 transition-shadow duration-200"
              placeholder="Search for restaurants..."
              value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <button
              className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-r-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75 transition-all duration-200"
              onClick={() => {
                const filtered = ListofRestaurents.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilterRestaurants(filtered);
              }}
            >
              Search
            </button>
          </div>

          {/* Top Rated Button */}
          <button
            className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all duration-200 w-full sm:w-auto"
            onClick={() => {
              const filterList = ListofRestaurents.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRestaurants(filterList);
            }}
          >
            Top Rated Restaurants ⭐
          </button>
        </div>
      </div>

      {/* Restaurant Cards Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {filterRestaurants.map((restaurent) => (
            <Link
              to={"/restaurant/" + restaurent.info.id}
              key={restaurent.info.id}
              state={{ restaurantData: restaurent }}
              className="transform hover:scale-105 transition-transform duration-200"
            >
              {restaurent.info.veg ? (
                <RestaurantCardPureVeg resData={restaurent} />
              ) : (
                <RestaurentCard resData={restaurent} />
              )}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12 mb-8">
        <button className="py-3 px-8 bg-orange-600 text-white font-bold rounded-lg shadow-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all duration-200">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Body;
