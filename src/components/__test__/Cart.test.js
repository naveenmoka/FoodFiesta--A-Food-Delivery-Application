import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { act } from "react";
import appStore from "../../utils/appStore";
import { addItem, clearCart } from "../../utils/cartSlice";
import Cart from "../Cart";
import "@testing-library/jest-dom";

// Mock ItemList component's dependencies if it has any, otherwise, just import it
// For this test, we assume ItemList renders items with data-testid="foodItems"
import ItemList from "../ItemList";

// --- MOCK DATA FOR THE TEST ---
const MOCK_ITEM = {
  card: {
    info: {
      id: "1001",
      name: "Test Item",
      price: 10000,
    },
  },
};

afterEach(() => {
  act(() => {
    appStore.dispatch(clearCart());
  });
});

// --- TEST CASE 1: EMPTY CART ---
test("should render Cart component with an empty message", () => {
  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );

  const heading = screen.getByText("Cart");
  expect(heading).toBeInTheDocument();

  const emptyMessage = screen.getByText(
    "Cart is empty. Add some items to th cart"
  );
  expect(emptyMessage).toBeInTheDocument();
});

// --- TEST CASE 2: CART WITH ITEMS & CLEAR ---
test("should render Cart with items and clear the cart on button click", () => {
  act(() => {
    appStore.dispatch(addItem(MOCK_ITEM));
  });

  render(
    <Provider store={appStore}>
      <Cart />
    </Provider>
  );

  // (Assuming your ItemList renders items with data-testid="foodItems")
  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(1);

  // Assert that the empty cart message is NOT present
  const emptyMessage = screen.queryByText(
    "Cart is empty. Add some items to th cart"
  );
  expect(emptyMessage).not.toBeInTheDocument();

  const clearButton = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearButton);

  // ASSERT: Check that the cart is now empty
  const emptyMessageAfterClear = screen.getByText(
    "Cart is empty. Add some items to th cart"
  );
  expect(emptyMessageAfterClear).toBeInTheDocument();

  const foodItemsAfterClear = screen.queryAllByTestId("foodItems");
  expect(foodItemsAfterClear.length).toBe(0);
});
