import { useDispatch } from "react-redux";
import { RES_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => {
        const { id, name, price, defaultPrice, description, imageId } =
          item.card.info;
        const itemPrice = price ? price / 100 : defaultPrice / 100;

        return (
          <div
            data-testid="foodItems"
            key={id}
            className="p-4 m-2 border-gray-200 border-b-2 text-left flex justify-between last:border-b-0"
          >
            <div className="w-9/12 pr-4">
              {" "}
              <div className="py-2">
                <span className="font-bold text-lg text-gray-800">{name}</span>
                <span className="text-gray-700"> - ₹{itemPrice}</span>
              </div>
              <p className="text-xs text-gray-500">{description}</p>
            </div>

            <div className="w-3/12 p-2 relative">
              {" "}
              {imageId && (
                <img
                  src={RES_IMG + imageId}
                  className="w-full h-24 object-cover rounded-md shadow-lg"
                />
              )}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                <button
                  className="px-5 py-1 rounded-md bg-white text-green-600 font-bold shadow-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-300"
                  onClick={() => handleAddItem(item)}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ItemList;
