import { useState, useEffect } from "react";
import mockMenuData from "./mockMenuData";
const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    setRestaurantInfo(mockMenuData);
  }, []);

  return restaurantInfo;
};
export default useRestaurantMenu;
