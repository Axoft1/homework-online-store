import React, { FC, useContext, useState } from "react";
import { AContext, CustomContext } from "../../util/context";
import Pagination from "../pagination/Pagination";
import { ICatalog } from "../../models/ICatalog";
import ProductItem from "./ProductItem";

interface CatalogProps {
  catalog: ICatalog[];
}

const Products: FC<CatalogProps> = ({ catalog }: CatalogProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productPerPage] = useState<number>(6);
  const { loading } = useContext<AContext>(CustomContext);

  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProduct = catalog.slice(firstProductIndex, lastProductIndex);

  const pagination = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage >= Math.ceil(catalog.length / productPerPage)) {
      setCurrentPage(1);
      return;
    }
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage < Math.ceil(catalog.length / productPerPage) - 1) {
      setCurrentPage(Math.ceil(catalog.length / productPerPage));
      return;
    }
    setCurrentPage(currentPage - 1);
  };

  if (loading) {
    return <p>Загрузка...</p>;
  }

  return (
    <section className="product__wrapped" data-testid="component-products">
      <div className="product">
        {catalog &&
          currentProduct.map((product: ICatalog) => (
            <ProductItem
              data-testid="product-cart"
              product={product}
              key={product.id}
            />
          ))}
      </div>
      <div className="paginations">
        {catalog.length < productPerPage ? (
          ""
        ) : (
          <Pagination
            productPerPage={productPerPage}
            totalProduct={catalog.length}
            currentPage={currentPage}
            pagination={pagination}
            nextPage={nextPage}
            prevPage={prevPage}
          />
        )}        
      </div>
    </section>
  );
};

export default Products;
