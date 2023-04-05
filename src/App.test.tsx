import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import AppRouter from "./component/AppRouter";
import Catalog from "./pages/catalog/Catalog";
import ProductItem from "./component/products/ProductItem";
import Products from "./component/products/Products";

describe("ROUTE TEST", () => {
  test("non-existent pages", () => {
    render(
      <MemoryRouter initialEntries={["/dsfg"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("catalog-page")).toBeInTheDocument();
  });
  test("navigation to the basket page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByTestId("link-to-basket");
    fireEvent.click(linkElement);
    expect(screen.getByTestId("basket-empty")).toBeInTheDocument();
  });
  test("navigation to the catalog page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByTestId("link-to-catalog");
    fireEvent.click(linkElement);
    expect(screen.getByTestId("catalog-page")).toBeInTheDocument();
  });
  test("mobile navigation to the catalog page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByTestId("linkMobile-to-catalog");
    fireEvent.click(linkElement);
    expect(screen.getByTestId("catalog-page")).toBeInTheDocument();
  });
  test("navigation to the admin page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const linkElement = screen.getByTestId("li-admin");
    fireEvent.click(linkElement);
    expect(screen.getByTestId("admin-panel")).toBeInTheDocument();
  });
  test("has the products component appeared", () => {
    render(
      <MemoryRouter>
        <Catalog />
      </MemoryRouter>
    );

    expect(screen.getByTestId("component-products")).toBeInTheDocument();
  });
  // test("has the product component appeared", async () => {
  //   render(
  //     <MemoryRouter>
  //       <App />
  //       <Catalog />
  //     </MemoryRouter>
  //   );
  //   expect(await screen.findAllByTestId("product-cart")).toHaveLength(2);
  //    await waitFor(() => {
  //      expect(screen.getAllByTestId("product-cart")).toHaveLength(2);
  //    });

  //   jest.useFakeTimers();
  //   render(
  //     <MemoryRouter>
  //       <App />
  //       <Catalog />
  //     </MemoryRouter>
  //   );
  //   act(() => {
  //     jest.advanceTimersByTime(1000 * 10);
  //   });
  //   const movieTiles = screen.getAllByTestId("product-cart");
  //   expect(movieTiles).toHaveLength(2);
  //   jest.runOnlyPendingTimers();
  //   jest.useRealTimers();
  // });
});

test("has the products component appeared", () => {
  render(
    <MemoryRouter>
      <Catalog />
    </MemoryRouter>
  );

  expect(screen.getByTestId("component-products")).toBeInTheDocument();
});
