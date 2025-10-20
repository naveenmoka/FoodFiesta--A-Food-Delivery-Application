import React from "react";

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* 1. Header Section */}
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                About Us
              </h1>
              <p className="text-xl text-gray-600">
                Your Culinary Journey Starts Here.
              </p>
            </div>

            <hr className="my-10 border-gray-200" />

            {/* 2. Content Sections: */}
            <div className="space-y-10">
              {/* Our Mission Section */}
              <div>
                <h2 className="text-3xl font-bold text-orange-600 border-b-2 border-orange-200 pb-2 mb-4">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is simple: to connect food lovers with the best
                  local restaurants. We believe that a great meal has the power
                  to make any day better, and we are committed to making that
                  happen, one delicious delivery at a time.
                </p>
              </div>

              {/* Quality & Partnership Section */}
              <div>
                <h2 className="text-3xl font-bold text-orange-600 border-b-2 border-orange-200 pb-2 mb-4">
                  A World of Flavors
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We partner with a diverse range of top-rated restaurants, from
                  beloved neighborhood gems to fine-dining favorites. Whether
                  you're craving a spicy Biryani, a comforting pizza, or a
                  healthy salad, our extensive selection has something to
                  satisfy every craving.
                </p>
              </div>

              {/* How It Works Section */}
              <div className="pt-4">
                <h2 className="text-3xl font-bold text-orange-600 text-center mb-8">
                  How It Works
                </h2>
                <div className="flex flex-col md:flex-row justify-around text-center gap-8">
                  <div>
                    <span className="text-6xl">🔍</span>
                    <h3 className="text-2xl font-semibold mt-4">Search</h3>
                    <p className="text-gray-600 mt-2">
                      Find your favorite restaurants.
                    </p>
                  </div>
                  <div>
                    <span className="text-6xl">🍲</span>
                    <h3 className="text-2xl font-semibold mt-4">Choose</h3>
                    <p className="text-gray-600 mt-2">
                      Select your favorite dishes.
                    </p>
                  </div>
                  <div>
                    <span className="text-6xl">🛵</span>
                    <h3 className="text-2xl font-semibold mt-4">Enjoy</h3>
                    <p className="text-gray-600 mt-2">
                      Get it delivered fast and fresh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
