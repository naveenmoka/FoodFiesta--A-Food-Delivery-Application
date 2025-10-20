import { RES_IMG } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div
      data-testid="resCard"
      className="m-4 w-72 h-[420px] bg-orange-100 rounded-lg border border-gray-200 shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="h-48">
        <img
          className="w-full h-full object-cover"
          alt={name}
          src={RES_IMG + cloudinaryImageId}
        />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="p-4 flex flex-col flex-grow">
        <h2
          className="text-xl font-bold text-gray-800 mb-2 truncate"
          title={name}
        >
          {name}
        </h2>

        <h4
          className="text-sm text-gray-600 mb-4 truncate flex-grow"
          title={(cuisines || []).join(", ")}
        >
          {(cuisines || []).join(", ")}
        </h4>

        {/* DETAILS CONTAINER */}
        <div className="flex justify-between items-center text-sm font-semibold text-gray-700 mt-auto border-t pt-3">
          <span className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full">
            <span className="mr-1">⭐</span> {avgRating}
          </span>
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component
export const withPureVegLable = (RestaurentCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-6 left-6 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
          Pure Veg
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
