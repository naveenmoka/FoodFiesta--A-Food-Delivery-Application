import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mockData/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
const mockRestaurants = [
  {
    info: {
      id: "1",
      name: "Pizza Place",
      cuisines: ["Italian"],
      avgRating: 4.5,
      costForTwo: "500",
      cloudinaryImageId: "abc123",
    },
  },
];
beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: {
            cards: [
              {},
              {},
              {},
              {},
              {
                card: {
                  card: {
                    gridElements: {
                      infoWithStyle: {
                        restaurants: mockRestaurants,
                      },
                    },
                  },
                },
              },
            ],
          },
        }),
    })
  );
});

test("Should renderthe Body component with search", async () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );

  // 1. Find the search input and button
  const searchInput = await screen.findByTestId("searchInput");
  const searchBtn = screen.getByRole("button", { name: "Search" });

  // 2. Verify the input is on the page
  expect(searchInput).toBeInTheDocument();

  // 3. Type "Pizza" into the input
  fireEvent.change(searchInput, { target: { value: "Pizza" } });

  // 4. Click the search button
  fireEvent.click(searchBtn);

  // 5. ASSERT THE RESULT:
  //    Check that the number of rendered cards matches the filter.
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(1); // <-- This is the new, crucial assertion
});
