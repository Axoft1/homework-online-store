import React, { FC, useContext, useState } from "react";
import CategoriesButtons from "../../component/categoriesButtons/CategoriesButtons";
import DropDownList from "../../component/dropDownList/DropDownList";
import FilterList from "../../component/filterList/FilterList";
import { AContext, CustomContext } from "../../util/context";
import Products from "../../component/products/Products";
import { IFilterForm } from "../../models/IFilterForm";
import { Button } from "../../component/Button/Button";
import { ICatalog } from "../../models/ICatalog";
import * as imgs from "../../img/imges";
import "./style.scss";

const Catalog: FC = () => {
  const { catalog, buttonMobileFilter, setCatalog, setButtonMobileFilter } =
    useContext<AContext>(CustomContext);

  const catalogSort = (value: string): void => {
    switch (value) {
      case "price01":
        let price01 = filteredCatalog.sort((a, b): number => a.price - b.price);
        setCatalog && setCatalog(price01);
        break;
      case "price10":
        let price10 = filteredCatalog.sort((a, b): number => b.price - a.price);
        setCatalog && setCatalog(price10);
        break;
      case "nameAZ":
        let nameAZ = filteredCatalog.sort((a, b): number =>
          a.name.localeCompare(b.name)
        );
        setCatalog && setCatalog(nameAZ);
        break;
      case "nameZA":
        let nameZA = filteredCatalog.sort((a, b): number =>
          b.name.localeCompare(a.name)
        );
        setCatalog && setCatalog(nameZA);
        break;
    }
  };

  const [filterForm, setFilterForm] = useState<IFilterForm>({
    manufacturers: [],
    brands: [],
    priceMin: 0,
    priceMax: 10000,
    category: "",
  });

  const [applyedFilter, setApplyedFilter] = useState<IFilterForm>({
    manufacturers: [],
    brands: [],
    priceMin: 0,
    priceMax: 10000,
    category: "",
  });

  const brand = Array.from(new Set(catalog?.map((e: ICatalog): string => e.brand)));
  const manufacturer = Array.from(
    new Set(catalog?.map((e: ICatalog):string => e.manufacturer))
  );

  const formSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  const hasCategory = (item: ICatalog, category: string): boolean => {
    if (category === "") {
      return true;
    }
    return item.type_of_care.includes(category);
  };

  const filterCatalog = (
    catalog: ICatalog[],
    filter: IFilterForm
  ): ICatalog[] => {
    return catalog
      ? catalog
          .filter(
            (item): boolean =>
              item.price >= filter.priceMin && item.price <= filter.priceMax
          )
          .filter((item): boolean =>
            filter.manufacturers.length === 0
              ? true
              : filter.manufacturers.includes(item.manufacturer)
          )
          .filter((item): boolean =>
            filter.brands.length === 0
              ? true
              : filter.brands.includes(item.brand)
          )
      : [];
  };

  const filteredCatalogType = catalog?.filter((item): boolean =>
    hasCategory(item, filterForm.category)
  );

  const filteredCatalog = filterCatalog(
    filteredCatalogType ? filteredCatalogType : [],
    applyedFilter
  );

  return (
    <div className="catalog conteiner" data-testid="catalog-page">
      <div className="catalog__header">
        <h2 className="catalog__title">КОСМЕТИКА И ГИГИЕНА</h2>
        <div className="dropDownListDiscrete">
          <DropDownList catalogSort={catalogSort} />
        </div>
      </div>
      <div className="catalog__buttonsFilter">
        <div className="catalog__buttonsFilter-param">
          <h3>Подбор по параметрам</h3>
          <Button
            onClick={(): void =>
              setButtonMobileFilter &&
              setButtonMobileFilter(!buttonMobileFilter)
            }
            size="img"
            img={buttonMobileFilter ? imgs.cursorUpIcon : imgs.cursorDownIcon}
          ></Button>
        </div>
        <CategoriesButtons setFilterForm={setFilterForm} />

        <div className="dropDownListMobile">
          <DropDownList catalogSort={catalogSort} />
        </div>
      </div>
      <div className="catalog__body">
        <FilterList
          brand={brand}
          formSubmit={formSubmit}
          manufacturer={manufacturer}
          filterForm={filterForm}
          setFilterForm={setFilterForm}
          setApplyedFilter={setApplyedFilter}
          applyFilter={(): void => setApplyedFilter(filterForm)}
        />
        <Products catalog={filteredCatalog} />
      </div>
    </div>
  );
};

export default Catalog;
