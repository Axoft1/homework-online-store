import ProductItem from "./ProductItem";
import Catalog from "../../pages/catalog/Catalog";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Product from "../../pages/product/Product";

describe("PRODUCT TEST", () => {
  test("has correct product props", () => {
    render(
      <MemoryRouter>
        <Catalog />
        <ProductItem
          product={{
            id: 1,
            count: 1,
            url: "https://avatars.mds.yandex.net/get-mpic/3923571/img_id4769885840219787083.png/orig",
            name: "Влажные салфетки Солнце и Луна c экстрактом липы",
            size_type: "300 г",
            size: "25см/8см",
            barcode: "100013239401",
            manufacturer: "Cotton Club",
            brand: "Солнце и Луна",
            description:
              "СОЛНЦЕ И ЛУНА ECO Влажные салфетки детские 0+ хлопковые с экстрактом липы big-pack с крышкой, 100штМягкие и нежные салфетки созданы для очищения нежной кожи малышей, прекрасно очищают и освежают кожу. Подходят для использования с рождения. Природные компоненты, входящие в состав экстракта липы, способствуют увлажнению и успокаивают кожу. Салфетки удобны в применении и незаменимы для ежедневного ухода за кожей ребенка.",
            price: 175,
            type_of_care: ["paper"],
          }}
        />
      </MemoryRouter>
    );
    expect(screen.getByTestId("size_type")).toHaveTextContent("300 г");

    expect(screen.getByTestId("barcode")).toHaveTextContent(
      "Штрихкод: 100013239401"
    );

    expect(screen.getByTestId("manufacturer")).toHaveTextContent(
      "Производитель: Cotton Club"
    );
    expect(screen.getByTestId("brand")).toHaveTextContent("Солнце и Луна");
    
    expect(screen.getByTestId("price")).toHaveTextContent('175');

    expect(screen.getByTestId("in-basket")).toBeInTheDocument();

    expect(screen.getByTestId("product-img")).toHaveAttribute(
      "src",
      "https://avatars.mds.yandex.net/get-mpic/3923571/img_id4769885840219787083.png/orig"
    );

  });
  test("has correct welcome", () => {
    render(
      <MemoryRouter>
        <Catalog />
        <ProductItem
          product={{
            id: 1,
            count: 1,
            url: "https://avatars.mds.yandex.net/get-mpic/3923571/img_id4769885840219787083.png/orig",
            name: "Влажные салфетки Солнце и Луна c экстрактом липы",
            size_type: "300 г",
            size: "25см/8см",
            barcode: "100013239401",
            manufacturer: "Cotton Club",
            brand: "Солнце и Луна",
            description:
              "СОЛНЦЕ И ЛУНА ECO Влажные салфетки детские 0+ хлопковые с экстрактом липы big-pack с крышкой, 100штМягкие и нежные салфетки созданы для очищения нежной кожи малышей, прекрасно очищают и освежают кожу. Подходят для использования с рождения. Природные компоненты, входящие в состав экстракта липы, способствуют увлажнению и успокаивают кожу. Салфетки удобны в применении и незаменимы для ежедневного ухода за кожей ребенка.",
            price: 175,
            type_of_care: ["paper"],
          }}
        />
      </MemoryRouter>
    );
    const button = screen.getByText(/В КОРЗИНУ/i);
    expect(button.getAttribute("disabled")).toBeNull();
  });
  test("link to product", () => {
    render(
      <MemoryRouter>
        <Catalog />
        <Product/>
        <ProductItem
          product={{
            id: 1,
            count: 1,
            url: "https://avatars.mds.yandex.net/get-mpic/3923571/img_id4769885840219787083.png/orig",
            name: "Влажные салфетки Солнце и Луна c экстрактом липы",
            size_type: "300 г",
            size: "25см/8см",
            barcode: "100013239401",
            manufacturer: "Cotton Club",
            brand: "Солнце и Луна",
            description:
              "СОЛНЦЕ И ЛУНА ECO Влажные салфетки детские 0+ хлопковые с экстрактом липы big-pack с крышкой, 100штМягкие и нежные салфетки созданы для очищения нежной кожи малышей, прекрасно очищают и освежают кожу. Подходят для использования с рождения. Природные компоненты, входящие в состав экстракта липы, способствуют увлажнению и успокаивают кожу. Салфетки удобны в применении и незаменимы для ежедневного ухода за кожей ребенка.",
            price: 175,
            type_of_care: ["paper"],
          }}
        />
      </MemoryRouter>
    );
    const link = screen.getByTestId("link-product");
    fireEvent.click(link);
    const product = screen.getByTestId("product-item");
    expect(product).toBeInTheDocument();
  });
});
