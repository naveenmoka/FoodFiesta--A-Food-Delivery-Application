// This mock data is for "Pizza Hut" (ID: 1003414)
// It is structured to work perfectly with your existing components.

const mockMenuData = {
  statusCode: 0,
  data: {
    cards: [
      { card: { card: { "@type": "Spacer" } } }, // Dummy card at index 0
      { card: { card: { "@type": "Spacer" } } }, // Dummy card at index 1

      // --- 1. RESTAURANT INFO CARD ---
      // Your RestaurantMenu.js component reads this from:
      // restaurantInfo.data.cards[2].card.card.info
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "1003414",
              name: "Pizza Hut",
              cuisines: ["Pizzas", "Chineese"], // From your screenshot
              costForTwoMessage: "₹350 for two", // From your screenshot
              avgRating: 4.3, // From your screenshot
            },
          },
        },
      },

      { card: { card: { "@type": "Spacer" } } }, // Dummy card at index 3

      // --- 2. MENU CATEGORIES CARD ---
      // Your RestaurantMenu.js component reads this from:
      // restaurantInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                // This is a filter/badge card.
                // Your component correctly filters this out.
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                    },
                  },
                },

                // --- CATEGORY 1: Recommended ---
                // (Matches your screenshot)
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "44410787",
                              name: "Margherita",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed",

                              price: 24900,
                              description:
                                "Classic delight with 100% real mozzarella cheese",
                            },
                          },
                        },
                        {
                          card: {
                            info: {
                              id: "44410792",
                              name: "Veggie Supreme",
                              price: 38900,
                              description:
                                "Onion, Capsicum, Mushroom, Red Paprika, Black Olives, Sweet Corn",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/17/ee9985e4-828b-4a0e-b99b-656442e80877_7492ef8f-5b57-4ca4-86e6-4a8981c38510.jpg_compressed",
                            },
                          },
                        },
                      ],
                    },
                  },
                },

                // --- CATEGORY 2: Flash Sale Pizza ---
                // (Matches your screenshot)
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Flash Sale Pizza",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "135602167",
                              name: "Buy 1 Get 1 - Medium Veg Pizza",
                              price: 38900,
                              description:
                                "Buy 1 Get 1 Free on Medium Veg Pizzas. Flat 50% Off",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/16/d718f493-f644-410a-b6e8-46ef517f5950_b3be8e09-8ec3-483f-b688-f5ab2b7b1bbd.png_compressed",
                            },
                          },
                        },
                      ],
                    },
                  },
                },

                // --- CATEGORY 3: New Ultimate Cheese Crust Pizza ---
                // (Matches your screenshot)
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "New Ultimate Cheese Crust Pizza",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "115869408",
                              name: "Ultimate Veggie",
                              price: 59900,
                              description:
                                "The Ultimate Veggie pizza with a Cheesy Crust, loaded with Paneer, Onion, Capsicum, Mushroom, Olives & Jalapenos",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/4/16/679e740a-2500-4758-8fb6-ed036e66ea8e_e550eb7a-689b-4beb-9542-5f949e8b230a.jpg_compressed",
                            },
                          },
                        },
                      ],
                    },
                  },
                },

                // --- CATEGORY 4: Veg Pizza ---
                // (Matches your screenshot)
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Veg Pizza",
                      itemCards: [
                        {
                          card: {
                            info: {
                              id: "44410790",
                              name: "Farmhouse",
                              price: 45900,
                              description:
                                "Delightful combination of onion, capsicum, tomato & grilled mushroom",
                              imageId:
                                "FOOD_CATALOG/IMAGES/CMS/2025/5/16/f549f63e-9d95-4bc9-8b37-8aae4d611618_ee116843-bb88-4f78-936b-0f31130f9c01.png_compressed",
                            },
                          },
                        },
                      ],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
};

export default mockMenuData;
